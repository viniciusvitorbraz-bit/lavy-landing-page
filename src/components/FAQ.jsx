import { useState } from 'react'
import './FAQ.css'

const items = [
  {
    q: 'A Lavy funciona para qualquer tipo de clínica?',
    a: 'Sim. Atendemos clínicas de todas as especialidades — odontologia, dermatologia, ortopedia, psicologia, medicina estética e mais. O sistema é configurado de acordo com o fluxo e a linguagem específica do seu negócio.'
  },
  {
    q: 'Preciso trocar o meu sistema de agendamento atual?',
    a: 'Não. A Lavy se integra ao sistema que você já usa. O agente consulta a disponibilidade em tempo real e confirma o agendamento diretamente na agenda da clínica, sem conflito e sem retrabalho.'
  },
  {
    q: 'O agente responde pelo WhatsApp da minha clínica?',
    a: 'Sim. O agente opera pelo número oficial da sua clínica via API do WhatsApp Business. Para o paciente, a conversa parece completamente natural — sem robôs genéricos, sem respostas frias.'
  },
  {
    q: 'E se o paciente fizer uma pergunta que o agente não sabe responder?',
    a: 'O agente identifica o limite da conversa e redireciona o paciente para um atendente humano com todo o histórico da conversa já visível. Nenhum contexto se perde na transferência.'
  },
  {
    q: 'Como funciona o laudo gerado por IA?',
    a: 'O médico ativa a gravação no início da consulta. Ao final, o agente transcreve o atendimento, estrutura as informações clínicas e gera um rascunho de laudo padronizado. O médico revisa e assina — sem digitar nada do zero.'
  },
  {
    q: 'Em quanto tempo a Lavy entra em operação na minha clínica?',
    a: 'A implantação leva entre 5 e 10 dias úteis. Nesse período configuramos os fluxos, integramos com suas ferramentas e fazemos testes com sua equipe antes de ativar para os pacientes.'
  },
  {
    q: 'Os dados dos meus pacientes ficam seguros?',
    a: 'Sim. Toda comunicação é criptografada e seguimos rigorosamente as diretrizes da LGPD. Os dados dos seus pacientes pertencem à sua clínica — nunca são usados para treinar modelos ou compartilhados com terceiros.'
  },
  {
    q: 'Qual é o investimento?',
    a: 'Os planos variam conforme o volume de leads, número de canais e funcionalidades ativas. Fazemos um diagnóstico gratuito da sua clínica e apresentamos uma proposta sob medida — sem surpresas no contrato.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(prev => prev === i ? null : i)

  return (
    <div className="faq-wrap">
      <div className="faq-header">
        <span className="faq-label">PERGUNTAS FREQUENTES</span>
        <h2 className="faq-title">
          Tudo o que você precisa{' '}
          <span className="faq-title--purple">saber antes de decidir.</span>
        </h2>
      </div>

      <ul className="faq-list">
        {items.map((item, i) => (
          <li key={i} className={`faq-item ${open === i ? 'faq-item--open' : ''}`}>
            <button className="faq-question" onClick={() => toggle(i)} aria-expanded={open === i}>
              <span>{item.q}</span>
              <svg
                className="faq-chevron"
                width="20" height="20" viewBox="0 0 20 20" fill="none"
              >
                <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
