import { useState } from 'react'
import './Showcase.css'

const steps = [
  {
    n: '01',
    title: 'O lead chega. O agente já está lá.',
    desc: 'Enquanto você dorme, o sistema qualifica, coleta dados e organiza tudo para o seu time. Nenhuma mensagem sem resposta.',
  },
  {
    n: '02',
    title: 'Você sabe exatamente onde cada paciente está.',
    desc: 'Do primeiro contato ao agendamento, cada lead tem um estágio. Sem achismo, sem post-it, sem planilha perdida.',
  },
  {
    n: '03',
    title: 'A consulta termina. O laudo já está pronto.',
    desc: 'O agente escuta o atendimento e gera o relatório automaticamente. O médico sai da sala sem digitar uma linha.',
  },
  {
    n: '04',
    title: 'Visibilidade total do seu comercial.',
    desc: 'Leads recebidos, taxa de conversão, atendimentos realizados e desempenho do agente — tudo em tempo real.',
  },
]

export default function Showcase() {
  const [active, setActive] = useState(0)

  return (
    <div className="shw-wrap">
      {/* left — text */}
      <div className="shw-left">
        <div className="shw-text">
          <span className="shw-step-num">{steps[active].n}</span>
          <h2 className="shw-title">{steps[active].title}</h2>
          <p className="shw-desc">{steps[active].desc}</p>
        </div>

        <div className="shw-steps">
          {steps.map((s, i) => (
            <button
              key={i}
              className={`shw-dot ${active === i ? 'shw-dot--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Passo ${s.n}`}
            >
              <span className="shw-dot-num">{s.n}</span>
              <span className="shw-dot-label">{s.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* right — placeholder */}
      <div className="shw-right">
        <div className="shw-placeholder" />
      </div>
    </div>
  )
}
