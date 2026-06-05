import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';
import { FaInstagram as Instagram, FaLinkedin as Linkedin, FaTwitter as Twitter } from 'react-icons/fa6';
import './Footer.css';

function TextHoverEffect({ text }) {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' });

  useEffect(() => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      const cx = ((cursor.x - rect.left) / rect.width) * 100;
      const cy = ((cursor.y - rect.top) / rect.height) * 100;
      setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="footer-text-svg"
    >
      <defs>
        <linearGradient id="lavyTextGradient" gradientUnits="userSpaceOnUse">
          {hovered && (
            <>
              <stop offset="0%"   stopColor="#60a5fa" />
              <stop offset="40%"  stopColor="#a78bfa" />
              <stop offset="75%"  stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#60a5fa" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="lavyRevealMask"
          gradientUnits="userSpaceOnUse"
          r="22%"
          initial={{ cx: '50%', cy: '50%' }}
          animate={maskPosition}
          transition={{ duration: 0, ease: 'easeOut' }}
        >
          <stop offset="0%"   stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="lavyTextMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#lavyRevealMask)" />
        </mask>
      </defs>

      {/* outline base — aparece ao hover */}
      <text
        x="50%" y="50%"
        textAnchor="middle" dominantBaseline="middle"
        strokeWidth="0.3"
        className="footer-text-base"
        style={{ opacity: hovered ? 0.6 : 0 }}
      >
        {text}
      </text>

      {/* stroke animado */}
      <motion.text
        x="50%" y="50%"
        textAnchor="middle" dominantBaseline="middle"
        strokeWidth="0.3"
        className="footer-text-stroke"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      >
        {text}
      </motion.text>

      {/* gradiente revelado pelo mouse */}
      <text
        x="50%" y="50%"
        textAnchor="middle" dominantBaseline="middle"
        stroke="url(#lavyTextGradient)"
        strokeWidth="0.3"
        mask="url(#lavyTextMask)"
        className="footer-text-gradient"
      >
        {text}
      </text>
    </svg>
  );
}

export default function Footer() {
  const links = [
    { label: 'Como funciona', href: '#section-4' },
    { label: 'Resultados',    href: '#section-7' },
    { label: 'FAQ',           href: '#section-8' },
    { label: 'Planos',        href: '#' },
  ];

  const socials = [
    { icon: <Instagram size={18} />, label: 'Instagram', href: '#' },
    { icon: <Linkedin  size={18} />, label: 'LinkedIn',  href: '#' },
    { icon: <Twitter   size={18} />, label: 'Twitter',   href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="footer-bg" />

      <div className="footer-inner">
        {/* topo */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Lavy</span>
            <p className="footer-tagline">
              Departamento comercial completo para clínicas.<br />
              Funcionando 24 horas, sem contratar ninguém.
            </p>
          </div>

          <nav className="footer-nav">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="footer-nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer-contact">
            <a href="mailto:contato@lavy.ai" className="footer-contact-item">
              <Mail size={15} />
              contato@lavy.ai
            </a>
            <a href="tel:+5511000000000" className="footer-contact-item">
              <Phone size={15} />
              (11) 9 0000-0000
            </a>
          </div>
        </div>

        {/* divisor */}
        <hr className="footer-divider" />

        {/* fundo */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Lavy. Todos os direitos reservados.
          </p>
          <div className="footer-socials">
            {socials.map(({ icon, label, href }) => (
              <a key={label} href={href} aria-label={label} className="footer-social-link">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* texto hover gigante */}
      <div className="footer-wordmark">
        <TextHoverEffect text="Lavy" />
      </div>
    </footer>
  );
}
