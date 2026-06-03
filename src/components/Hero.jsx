import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-wrap">
        <h1 className="hero-headline">
          <span className="hero-headline--gradient">Sua clínica tem pacientes.</span><br />
          <span className="hero-headline--muted">Falta o sistema para não perdê-los.</span>
        </h1>
        <p className="hero-sub">
          A Lavy entrega um departamento comercial completo funcionando 24 horas — sem precisar contratar ninguém.
        </p>
        <div className="hero-ctas">
          <button className="hero-btn-primary">Quero ver como funciona →</button>
          <button className="hero-btn-secondary">Falar com um especialista</button>
        </div>
      </div>
    </section>
  );
}
