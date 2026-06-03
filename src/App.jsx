import CardSwap, { Card } from './components/CardSwap'
import CardNav from './components/CardNav'
import lavyLogo from './assets/logo-transparent.png'
import navVideo from './assets/AdobeStock_1068497023.mov'
import { AnimatedCarousel } from './components/ui/logo-carousel'
import MagicBento from './components/MagicBento'
import DiagnosticoForm from './components/DiagnosticoForm'
import GradualBlur from './components/GradualBlur'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import Solution from './components/Solution'
import Showcase from './components/Showcase'
import { Bell, Eye, Clock, Users } from 'lucide-react'
import ProblemCards from './components/ProblemCards'

const tickerItems = [
  { value: '+40%', label: 'de conversão de leads' },
  { value: '24h',  label: 'de atendimento ativo' },
  { value: '-80%', label: 'do tempo em relatórios' },
  { value: '3x',   label: 'mais pacientes reativados' },
  { value: '0',    label: 'leads sem resposta' },
  { value: '100%', label: 'de visibilidade do comercial' },
]

const problemCards = [
  {
    icon: Bell,
    title: 'Leads chegam de madrugada. Ninguém responde.',
    desc: 'O paciente interessado não espera até segunda-feira. Se não houver resposta em minutos, ele agenda na clínica concorrente.',
  },
  {
    icon: Eye,
    title: 'Você não sabe onde cada paciente travou no funil.',
    desc: 'Sem visibilidade, decisões são feitas no achismo. Leads quentes esfriam enquanto o time foca nos errados.',
  },
  {
    icon: Clock,
    title: 'O médico perde 30 minutos por consulta digitando laudos.',
    desc: 'Tempo clínico é o recurso mais caro da clínica. Gastar com burocracia é dinheiro que você não vê sair.',
  },
  {
    icon: Users,
    title: 'Sua base de pacientes inativos é um ativo desperdiçado.',
    desc: 'Quem já foi paciente tem 5× mais chance de agendar. Mas sem reativação automática, eles simplesmente somem.',
  },
]

const navItems = [
  {
    label: 'Como funciona',
    bgColor: '#1B1722',
    textColor: '#fff',
    links: [
      { label: 'Agente de atendimento', ariaLabel: 'Agente de atendimento' },
      { label: 'Laudo por IA', ariaLabel: 'Laudo por IA' },
      { label: 'Funil de pacientes', ariaLabel: 'Funil de pacientes' },
    ],
  },
  {
    label: 'Resultados',
    bgColor: '#1B1722',
    textColor: '#fff',
    links: [
      { label: 'Cases', ariaLabel: 'Cases de sucesso' },
      { label: 'Métricas', ariaLabel: 'Principais métricas' },
    ],
  },
  {
    label: 'Planos',
    bgColor: '#2F293A',
    textColor: '#fff',
    links: [
      { label: 'Plano Starter', ariaLabel: 'Plano Starter' },
      { label: 'Plano Pro', ariaLabel: 'Plano Pro' },
      { label: 'Plano Enterprise', ariaLabel: 'Plano Enterprise' },
    ],
  },
  {
    label: 'Contato',
    bgColor: '#2F293A',
    textColor: '#fff',
    links: [
      { label: 'WhatsApp', ariaLabel: 'Falar pelo WhatsApp' },
      { label: 'E-mail', ariaLabel: 'Enviar e-mail' },
    ],
  },
]

export default function App() {
  return (
    <>
      <CardNav
        logo={lavyLogo}
        logoAlt="Lavy"
        middleVideo={navVideo}
        items={navItems}
        baseColor="transparent"
        menuColor="#fff"
        buttonBgColor="rgba(255,255,255,0.15)"
        buttonTextColor="#fff"
        buttonText="Quero ver uma demo"
        ease="power3.out"
      />

      {/* 1 — Hero */}
      <Hero />

      {/* Glow azul entre hero e ticker */}
      <div style={{
        position: 'relative',
        height: 0,
        overflow: 'visible',
        zIndex: 2,
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          top: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '55%',
          height: '90px',
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.5) 0%, transparent 70%)',
          filter: 'blur(18px)',
        }} />
      </div>

      {/* Stats Ticker */}
      <AnimatedCarousel items={tickerItems} />

      {/* 2 — Formulário */}
      <section id="section-2">
        <div className="container">
          <DiagnosticoForm />
        </div>
      </section>

      {/* 3 — Problema */}
      <section id="section-3">
        <div className="container">
          <div className="problem-header">
            <span className="problem-label">O PROBLEMA</span>
            <h2 className="problem-title">
              Onde sua clínica está<br />
              <span className="problem-title--accent">perdendo pacientes?</span>
            </h2>
            <p className="problem-subtitle">
              Cada lead sem resposta é uma consulta que foi para o concorrente.<br />
              O problema não é falta de demanda — é falta de processo.
            </p>
          </div>
          <ProblemCards cards={problemCards} />
        </div>
      </section>

      {/* 4 — Solução */}
      <section id="section-4">
        <Solution />
      </section>

      {/* 5 — Showcase */}
      <section id="section-5">
        <Showcase />
      </section>

      {/* 6 — CardSwap */}
      <section id="section-6">
        <div style={{ height: '800px', position: 'relative', width: '100%' }}>
          <CardSwap
            width={600}
            height={560}
            cardDistance={70}
            verticalDistance={80}
            delay={5000}
            pauseOnHover
            skewAmount={6}
            easing="elastic"
          >
            <Card />
            <Card />
            <Card />
          </CardSwap>
        </div>
      </section>

      {/* 7 — MagicBento */}
      <section id="section-7">
        <MagicBento
          textAutoHide={true}
          enableStars={false}
          enableSpotlight={false}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism
          clickEffect={true}
          spotlightRadius={680}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </section>

      {/* 8 — FAQ */}
      <section id="section-8" style={{ position: 'relative', overflow: 'hidden' }}>
        <FAQ />
        <GradualBlur target="parent" position="top"    height="6rem" strength={3} divCount={8} curve="bezier" exponential opacity={1} />
        <GradualBlur target="parent" position="bottom" height="6rem" strength={3} divCount={8} curve="bezier" exponential opacity={1} />
      </section>
    </>
  )
}
