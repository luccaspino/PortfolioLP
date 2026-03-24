export type Lang = "pt" | "en";

export type NavItem = [string, string];

export interface SkillGroup {
  pt: string;
  en: string;
  items: string[];
  itemsByLang?: Record<Lang, string[]>;
}

export interface Project {
  id: string;
  title: string;
  num: string;
  tag: string;
  tagClr: string;
  subtitle: Record<Lang, string>;
  desc: Record<Lang, string>;
  stack: string[];
  links: Array<[string, string]>;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface UiCopy {
  nav: NavItem[];
  subtitle: string;
  heroDesc: string;
  skillsTitle: string;
  expTitle: string;
  eduTitle: string;
  degreeLabel: string;
  langTitle: string;
  projTitle: string;
  contTitle: string;
  footer: string;
  flipHint: string;
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    pt: "Dados & Analytics",
    en: "Data & Analytics",
    items: [
      "Python (Pandas · NumPy · Scikit-Learn)",
      "PostgreSQL",
      "MongoDB",
      "PL/SQL",
      "Power BI",
      "Modelagem de Dados",
    ],
  },
  {
    pt: "Cloud & DevOps",
    en: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "GitHub", "CI/CD"],
    itemsByLang: {
      pt: ["Automação de Processos (n8n & Zapier)"],
      en: ["Process Automation (n8n & Zapier)"],
    },
  },
  {
    pt: "Backend",
    en: "Backend",
    items: ["FastAPI", "Node.js", "Express"],
  },
  {
    pt: "Frontend",
    en: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    pt: "Metodologia",
    en: "Methodology",
    items: ["Scrum", "Kanban"],
  },
  {
    pt: "Arquitetura",
    en: "Architecture",
    items: ["MVC", "Microservices", "WebSocket"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "etlboxd",
    title: "ETLBOXD",
    num: "01",
    tag: "Data Eng.",
    tagClr: "#10b981",
    subtitle: { pt: "Pipeline ETL pessoal", en: "Personal ETL pipeline" },
    desc: {
      pt: "Pipeline ETL que extrai dados do Letterboxd e os enriquece via TMDB API. Dashboard analítico no Power BI com métricas cinematográficas.",
      en: "ETL pipeline extracting Letterboxd data enriched via the TMDB API. Analytical Power BI dashboard with film metrics.",
    },
    stack: ["Python", "Pandas", "TMDB API", "Power BI", "PostgreSQL"],
    links: [["GitHub", "https://github.com/luccaspino/ETLBOXD"]],
  },
  {
    id: "gameboxd",
    title: "GameBoxd",
    num: "02",
    tag: "Full Stack",
    tagClr: "#60a5fa",
    subtitle: { pt: "Plataforma de jogos", en: "Game platform" },
    desc: {
      pt: "Plataforma para consulta, avaliação e gerenciamento de jogos com API externa, autenticação JWT e metodologia Scrum.",
      en: "Platform for consulting, reviewing and managing games using an external API, JWT authentication and Scrum methodology.",
    },
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    links: [
      ["Site", "https://api-games.vercel.app"],
      ["Front", "https://github.com/Miltchola/api_games"],
      ["Back", "https://github.com/Miltchola/api_games_backend"],
    ],
  },
  {
    id: "florir",
    title: "Florir",
    num: "03",
    tag: "Full Stack",
    tagClr: "#60a5fa",
    subtitle: { pt: "E-commerce de floricultura", en: "Flower shop e-commerce" },
    desc: {
      pt: "E-commerce completo de floricultura com painel administrativo, autenticação JWT e API RESTful documentada com Swagger.",
      en: "Complete flower shop e-commerce with admin panel, JWT authentication and RESTful API with Swagger docs.",
    },
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    links: [
      ["Site", "https://florir-website-front.vercel.app/"],
      ["Front", "https://github.com/Miltchola/florir-website-front"],
      ["Back", "https://github.com/Miltchola/florir-website-back"],
    ],
  },
  {
    id: "impostor",
    title: "ImpostorGame",
    num: "04",
    tag: "WebSocket",
    tagClr: "#fff700",
    subtitle: { pt: "Jogo de dedução social", en: "Social deduction game" },
    desc: {
      pt: "Jogo multiplayer de dedução social com papéis secretos, rodadas de votação e lógica de eliminação.",
      en: "Multiplayer social deduction game with secret roles, voting rounds and elimination logic.",
    },
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      ["Site", "https://impostorbr.onrender.com"],
      ["GitHub", "https://github.com/luccaspino/ImpostorGame"],
    ],
  },
];

export const EXP: Record<Lang, ExperienceItem[]> = {
  pt: [
    {
      company: "RSE - Gerenciamento de Risco e Sustentabilidade",
      role: "Estagiário de Engenharia de Software",
      period: "Mar 2024 - Mar 2026",
      location: "Remoto",
      bullets: [
        "Automação de Processos: Desenvolvi fluxos automatizados utilizando Python para integração de dados e suporte à decisão, impactando e otimizando as operações de 86% dos setores da empresa.",
        "Desenvolvimento de Sistemas: Projetei e implementei o portal interno e aplicativos de gestão de projetos (Logística e Reembolso) com Node.js e TypeScript, resultando em um ganho de 66% na eficiência dos fluxos ao unificar processos.",
        "Gestão de Dados: Modelagem e gerenciamento de bancos de dados SQL (+4.000 registros), com foco na integridade das informações via automação de regras de negócio (functions e procedures).",
        "Agentes de IA (RAG): Auxiliei na criação de agentes de IA baseados em RAG, atuando diretamente na etapa de testes, validação de respostas e refinamento das aplicações.",
        "Cibersegurança: Conduzi auditorias internas de vulnerabilidades e implementei protocolos de segurança que fortaleceram as defesas do domínio corporativo.",
      ],
    },
  ],
  en: [
    {
      company: "RSE - Risk and Sustainability Management",
      role: "Software Engineering Intern",
      period: "Mar 2024 - Mar 2026",
      location: "Remote",
      bullets: [
        "Process Automation: Developed automated workflows using Python for data integration and decision support, impacting and optimizing operations across 86% of the company's departments.",
        "Systems Development: Designed and implemented the internal portal and project management applications (Logistics and Reimbursement) with Node.js and TypeScript, resulting in a 66% efficiency gain in workflows by unifying processes.",
        "Data Management: Modeled and managed SQL databases (+4,000 records), focusing on information integrity through business rule automation (functions and procedures).",
        "AI Agents (RAG): Assisted in building RAG-based AI agents, working directly on testing, response validation and application refinement.",
        "Cybersecurity: Conducted internal vulnerability audits and implemented security protocols that strengthened corporate domain defenses.",
      ],
    },
  ],
};

export const EDUCATION: Record<Lang, { institution: string; degree: string; period: string }> = {
  pt: {
    institution: "Universidade SENAI CIMATEC",
    degree: "Bacharelado em Engenharia de Computação",
    period: "2022 - Dez 2026 (previsão)",
  },
  en: {
    institution: "SENAI CIMATEC University",
    degree: "Bachelor's Degree in Computer Engineering",
    period: "2022 - Dec 2026 (expected)",
  },
};

export const LANGUAGE_LEVELS: Record<Lang, string[]> = {
  pt: ["Português (Nativo)", "Inglês (Avançado - C1)"],
  en: ["Portuguese (Native)", "English (Advanced - C1)"],
};

export const UI: Record<Lang, UiCopy> = {
  pt: {
    nav: [
      ["Sobre", "#about"],
      ["Habilidades", "#skills"],
      ["Experiência", "#experience"],
      ["Formação", "#education"],
      ["Projetos", "#projects"],
      ["Contato", "#contact"],
    ],
    subtitle: "Engenharia de Computação",
    heroDesc:
      "Graduando em Engenharia de Computação com experiência Full Stack, foco em Back-end, Engenharia de Dados e desenvolvimento de soluções com IA. Domínio em Python (FastAPI) e JavaScript (React, Next.js, Node.js), além de bancos de dados, integração de APIs e cloud (Azure/AWS).",
    skillsTitle: "Tecnologias",
    expTitle: "Experiência Profissional",
    eduTitle: "Formação Acadêmica",
    degreeLabel: "Graduação",
    langTitle: "Idiomas",
    projTitle: "Projetos",
    contTitle: "Contato",
    footer: "© 2025 Luccas Pino. Todos os direitos reservados.",
    flipHint: "Passe o mouse",
  },
  en: {
    nav: [
      ["About", "#about"],
      ["Skills", "#skills"],
      ["Experience", "#experience"],
      ["Education", "#education"],
      ["Projects", "#projects"],
      ["Contact", "#contact"],
    ],
    subtitle: "Computer Engineering",
    heroDesc:
      "Computer Engineering student with Full Stack experience, focused on Back-end, Data Engineering and AI-driven solutions. Solid proficiency in Python (FastAPI) and JavaScript (React, Next.js, Node.js), plus databases, API integrations and cloud (Azure/AWS).",
    skillsTitle: "Technologies",
    expTitle: "Professional Experience",
    eduTitle: "Academic Background",
    degreeLabel: "Degree",
    langTitle: "Languages",
    projTitle: "Projects",
    contTitle: "Contact",
    footer: "© 2025 Luccas Pino. All rights reserved.",
    flipHint: "Hover to flip",
  },
};
