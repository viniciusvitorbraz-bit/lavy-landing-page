import './Solution.css'

const features = [
  {
    icon: '◎',
    title: 'Recepcionista 24h',
    desc: 'Responde leads em segundos, em qualquer horário, inclusive fins de semana.',
  },
  {
    icon: '◈',
    title: 'Qualificação automática',
    desc: 'Coleta os dados do paciente e repassa pro seu time já organizado e pronto para fechar.',
  },
  {
    icon: '◇',
    title: 'Relatório médico por IA',
    desc: 'O agente escuta a consulta e gera o laudo automaticamente. O médico sai da sala sem digitar nada.',
  },
  {
    icon: '◆',
    title: 'Agendamento integrado',
    desc: 'Do interesse à consulta marcada sem intervenção humana.',
  },
  {
    icon: '◉',
    title: 'Reativação de inativos',
    desc: 'Sua base de pacientes antiga volta a gerar receita de forma automática.',
  },
  {
    icon: '▣',
    title: 'Dashboard completo',
    desc: 'Visibilidade total do comercial: leads, conversões, atendimentos e desempenho em tempo real.',
  },
]

export default function Solution() {
  return (
    <div className="sol-wrap">
      <div className="sol-header">
        <span className="sol-label">A SOLUÇÃO</span>
        <h2 className="sol-title">
          Tudo que sua clínica precisa para não perder mais paciente
        </h2>
        <p className="sol-sub">
          Um departamento comercial completo, funcionando 24 horas, sem contratar ninguém.
          Do primeiro contato ao paciente agendado — a Lavy cuida de tudo.
        </p>
      </div>

      <div className="sol-grid">
        {features.map((f, i) => (
          <div key={i} className="sol-card">
            <span className="sol-icon">{f.icon}</span>
            <h3 className="sol-card-title">{f.title}</h3>
            <p className="sol-card-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
