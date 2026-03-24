import { useState } from "react";
import {
  EDUCATION,
  EXP,
  LANGUAGE_LEVELS,
  PROJECTS,
  SKILL_GROUPS,
  UI,
  type Lang,
} from "../portfolio/data";
import "../styles/portfolio.css";

export default function PortfolioPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [, setMenuOpen] = useState(false);
  const t = UI[lang];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFlip = (id: string) => {
    if (window.innerWidth <= 720) {
      setFlipped((p) => ({ ...p, [id]: !p[id] }));
    }
  };

  return (
    <div className="pf">
      <nav className="pf-nav">
        <div className="pf-logo">LP<em>.</em></div>
        <ul className="pf-links">
          {t.nav.map(([label, href]) => (
            <li key={href}>
              <a href={href} onClick={(e) => scrollTo(e, href)}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="pf-lang">
          <button className={lang === "pt" ? "on" : ""} onClick={() => setLang("pt")}>PT</button>
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </nav>

      <section id="about" className="pf-hero">
        <div>
          <p className="pf-hero-tag">{t.subtitle}</p>
          <h1>Luccas<br /><span>Pino</span></h1>
          <p className="pf-hero-desc">{t.heroDesc}</p>
        </div>
      </section>

      <section id="skills" className="pf-section">
        <h2 className="pf-h2">{t.skillsTitle}<em>.</em></h2>
        <div className="pf-skill-groups">
          {SKILL_GROUPS.map((g) => (
            <div key={g.pt}>
              <p className="pf-sg-label">{g[lang]}</p>
              <div className="pf-pills">
                {[...g.items, ...(g.itemsByLang?.[lang] ?? [])].map((item) => (
                  <span key={item} className="pf-pill">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="pf-section">
        <h2 className="pf-h2">{t.expTitle}<em>.</em></h2>
        <div className="pf-exp-list">
          {EXP[lang].map((exp) => (
            <div key={exp.company} className="pf-exp-card">
              <div className="pf-exp-top">
                <span className="pf-exp-co">{exp.company}</span>
                <span className="pf-exp-period">{exp.period}</span>
              </div>
              <p className="pf-exp-role">{exp.role}</p>
              <ul className="pf-exp-bul">
                {exp.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="pf-section">
        <h2 className="pf-h2">{t.eduTitle}<em>.</em></h2>
        <div className="pf-info-grid">
          <div className="pf-info-card">
            <p className="pf-sg-label">{t.degreeLabel}</p>
            <p className="pf-info-main">{EDUCATION[lang].degree}</p>
            <p className="pf-info-sub">{EDUCATION[lang].institution}</p>
            <p className="pf-info-sub">{EDUCATION[lang].period}</p>
          </div>
          <div className="pf-info-card">
            <p className="pf-sg-label">{t.langTitle}</p>
            <ul className="pf-exp-bul">
              {LANGUAGE_LEVELS[lang].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="pf-section">
        <h2 className="pf-h2">{t.projTitle}<em>.</em></h2>
        <div className="pf-grid">
          {PROJECTS.map((p) => (
            <div
              key={p.id}
              className={`pf-card-wrap${flipped[p.id] ? " flipped" : ""}`}
              onClick={() => toggleFlip(p.id)}
            >
              <div className="pf-card-inner">
                <div className="pf-card-f">
                  <p className="pf-card-num">{p.num}</p>
                  <span
                    className="pf-card-tag"
                    style={{ background: `${p.tagClr}18`, color: p.tagClr }}
                  >{p.tag}</span>
                  <h3 className="pf-card-title">{p.title}</h3>
                  <p className="pf-card-sub">{p.subtitle[lang]}</p>
                  <span className="pf-card-hint">{t.flipHint} ›</span>
                </div>

                <div className="pf-card-b">
                  <div>
                    <h3 className="pf-card-title" style={{ marginBottom: 10 }}>{p.title}</h3>
                    <p className="pf-card-desc">{p.desc[lang]}</p>
                    <div className="pf-card-stack">
                      {p.stack.map((s) => <span key={s}>{s}</span>)}
                    </div>
                  </div>
                  <div className="pf-card-links">
                    {p.links.map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pf-card-link"
                        onClick={(e) => e.stopPropagation()}
                      >{label}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="pf-section">
        <h2 className="pf-h2">{t.contTitle}<em>.</em></h2>
        <div className="pf-contact-links">
          <a href="mailto:luccaspino@icloud.com" className="pf-clink">
            <span className="pf-cicon">@</span>
            luccaspino@icloud.com
          </a>
          <a href="https://www.linkedin.com/in/luccas-pino-12430a268/" target="_blank" rel="noopener noreferrer" className="pf-clink">
            <span className="pf-cicon">in</span>
            LinkedIn
          </a>
          <a href="https://github.com/luccaspino" target="_blank" rel="noopener noreferrer" className="pf-clink">
            <span className="pf-cicon">gh</span>
            GitHub
          </a>
        </div>
      </section>

      <footer className="pf-footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
