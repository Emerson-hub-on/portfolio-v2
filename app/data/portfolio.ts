// Todo o conteúdo do portfólio fica aqui.
// Para atualizar o site: edite este arquivo, faça commit e push — o Vercel publica sozinho.
// Os textos abaixo são exemplos: troque pelos seus.

// ── Tela de intro (botão "Conhecer") ──
export const intro = {
  title: 'Dev Frontend',
  subtitle: 'Vue · Nuxt · React',
}

// ── Hero ──
export const hero = {
  welcomeTag: 'Olá, seja bem-vindo',
  titleHighlight: 'Dev Frontend',
  titleComplement: 'apaixonado por interfaces.',
  description:
    'Crio aplicações web rápidas, acessíveis e bonitas com Vue, Nuxt e TypeScript — do protótipo ao deploy.',
  btnPrimary: 'Ver Projetos',
  btnSecondary: 'Falar comigo →',
  statExperience: '3+',
  statProjects: '20+',
}

// ── Sobre mim ──
export const about = {
  // Coloque sua foto em /public (ex.: public/foto.jpg) e use '/foto.jpg'. Deixe null para o placeholder.
  photoUrl: null as string | null,
  photoShape: 'round' as 'round' | 'square',
  titleLine1: 'Código limpo,',
  titleLine2: 'resultados reais.',
  paragraph1:
    'Sou desenvolvedor frontend com foco em Vue e Nuxt. Gosto de transformar ideias em interfaces claras, com atenção a performance, acessibilidade e detalhes de UX.',
  paragraph2:
    'Fora do código, estou sempre estudando algo novo — de design de interfaces a boas práticas de arquitetura — e compartilhando o que aprendo.',
  stats: [
    { value: '3+', label: 'Anos de experiência' },
    { value: '20+', label: 'Projetos entregues' },
    { value: '10+', label: 'Clientes satisfeitos' },
    { value: '∞', label: 'Café consumido' },
  ],
}

// ── Projetos ──
// As tags também viram os filtros da seção (até 6).
export const projects: {
  name: string
  description: string
  emoji: string
  tags: string[]
  demoUrl?: string
  githubUrl?: string
}[] = [
  {
    name: 'Dashboard Financeiro',
    description: 'Painel com gráficos interativos para acompanhar receitas, despesas e metas mensais.',
    emoji: '📊',
    tags: ['Vue', 'TypeScript', 'Chart.js'],
    demoUrl: 'https://exemplo.com',
    githubUrl: 'https://github.com/seu-usuario/dashboard',
  },
  {
    name: 'App de Clima',
    description: 'Previsão do tempo com geolocalização, busca por cidade e tema claro/escuro.',
    emoji: '⛅',
    tags: ['Nuxt', 'API REST', 'Tailwind'],
    githubUrl: 'https://github.com/seu-usuario/clima',
  },
  {
    name: 'Loja Virtual',
    description: 'E-commerce com carrinho, filtros de produtos e checkout simulado.',
    emoji: '🛒',
    tags: ['Nuxt', 'Pinia', 'Tailwind'],
    demoUrl: 'https://exemplo.com',
  },
]

// ── Skills ──
export const skillCategories = [
  {
    name: 'Frontend Core',
    icon: '🎯',
    color: '#7c6aff',
    skills: [
      { name: 'Vue.js / Nuxt', level: 90 },
      { name: 'React / Next.js', level: 75 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    name: 'Estilo & Design',
    icon: '🎨',
    color: '#00e5cc',
    skills: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'SASS / SCSS', level: 80 },
      { name: 'Figma', level: 70 },
      { name: 'CSS Animations', level: 75 },
    ],
  },
  {
    name: 'Ferramentas',
    icon: '⚙️',
    color: '#ff6b6b',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'Vite / Webpack', level: 75 },
      { name: 'Jest / Vitest', level: 65 },
      { name: 'Docker (básico)', level: 50 },
    ],
  },
]

// "Também trabalho com"
export const otherTechs = [
  'Pinia', 'Vuex', 'GraphQL', 'REST API', 'Axios',
  'GSAP', 'Framer Motion', 'Storybook', 'ESLint', 'Prettier',
  'Vercel', 'Netlify', 'PWA', 'SEO', 'Web Vitals',
]

// ── Experiência (a primeira aparece destacada como atual) ──
export const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Empresa Atual Ltda.',
    period: '2023 – presente',
    description:
      'Desenvolvimento de aplicações SPA e SSR em Vue 3 + Nuxt. Liderança técnica do frontend, definição de padrões de código, code review e mentoria júnior.',
    techs: ['Vue 3', 'Nuxt', 'TypeScript', 'Tailwind', 'Pinia'],
  },
  {
    role: 'Frontend Developer Jr.',
    company: 'Agência Digital XYZ',
    period: '2022 – 2023',
    description:
      'Criação de landing pages e sistemas web para clientes de e-commerce. Foco em performance, SEO e integração com APIs REST.',
    techs: ['Vue 2', 'JavaScript', 'SASS', 'Webpack'],
  },
  {
    role: 'Freelancer',
    company: 'Projetos Próprios',
    period: '2021 – 2022',
    description:
      'Desenvolvimento de sites institucionais e e-commerces para clientes locais. Primeiros projetos com Vue.js e Nuxt.',
    techs: ['HTML', 'CSS', 'JavaScript', 'WordPress'],
  },
]

// ── Contato (deixe um link vazio '' para esconder a rede) ──
export const contact = {
  email: 'seuemail@exemplo.com',
  githubUrl: 'https://github.com/seu-usuario',
  linkedinUrl: 'https://linkedin.com/in/seu-usuario',
  twitterUrl: '',
}
