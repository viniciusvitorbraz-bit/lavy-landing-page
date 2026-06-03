import { useState } from 'react'
import './DiagnosticoForm.css'

export default function DiagnosticoForm() {
  const [form, setForm] = useState({
    nome: '',
    whatsapp: '',
    instagram: '',
    faturamento: '',
    leads: '',
    cupom: '',
  })

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <form className="diag-form" onSubmit={handleSubmit} noValidate>

      <div className="diag-field">
        <label className="diag-label">NOME COMPLETO</label>
        <input
          className="diag-input"
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
        />
      </div>

      <div className="diag-field">
        <label className="diag-label">WHATSAPP</label>
        <input
          className="diag-input"
          type="tel"
          name="whatsapp"
          placeholder="(11) 99999-9999"
          value={form.whatsapp}
          onChange={handleChange}
        />
      </div>

      <div className="diag-field">
        <label className="diag-label">INSTAGRAM DA EMPRESA</label>
        <input
          className="diag-input"
          type="text"
          name="instagram"
          placeholder="@suaempresa"
          value={form.instagram}
          onChange={handleChange}
        />
      </div>

      <div className="diag-field">
        <label className="diag-label">FATURAMENTO MENSAL</label>
        <div className="diag-select-wrap">
          <select
            className="diag-select"
            name="faturamento"
            value={form.faturamento}
            onChange={handleChange}
          >
            <option value="" disabled>Selecione</option>
            <option value="ate-10k">Até R$ 10.000</option>
            <option value="10k-50k">R$ 10.000 – R$ 50.000</option>
            <option value="50k-200k">R$ 50.000 – R$ 200.000</option>
            <option value="200k+">Acima de R$ 200.000</option>
          </select>
          <span className="diag-chevron">&#8964;</span>
        </div>
      </div>

      <div className="diag-field">
        <label className="diag-label">LEADS POR DIA NO FUNIL</label>
        <div className="diag-select-wrap">
          <select
            className="diag-select"
            name="leads"
            value={form.leads}
            onChange={handleChange}
          >
            <option value="" disabled>Selecione</option>
            <option value="0-10">0 – 10</option>
            <option value="10-50">10 – 50</option>
            <option value="50-200">50 – 200</option>
            <option value="200+">Mais de 200</option>
          </select>
          <span className="diag-chevron">&#8964;</span>
        </div>
      </div>

      <div className="diag-field">
        <label className="diag-label">
          CUPOM <span className="diag-label--optional">(opcional)</span>
        </label>
        <input
          className="diag-input"
          type="text"
          name="cupom"
          placeholder="Digite seu cupom"
          value={form.cupom}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="diag-btn">
        Agendar Diagnóstico Gratuito →
      </button>

    </form>
  )
}
