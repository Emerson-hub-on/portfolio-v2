// Todo o conteúdo do portfólio fica aqui.
// Para atualizar o site: edite este arquivo, faça commit e push — o Vercel publica sozinho.

// ── Tela de intro (botão "Conhecer") ──
export const intro = {
  title: 'Emerson Sousa',
  subtitle: 'Desenvolvedor Full Stack',
}

// ── Hero ──
export const hero = {
  welcomeTag: 'Olá, eu sou o Emerson Sousa',
  titleHighlight: 'Desenvolvedor Full Stack',
  titleComplement: 'do banco de dados à tela do usuário.',
  description:
    'Sistemas comerciais, automação fiscal e aplicações web. Moro em Campina Grande - PB.',
  btnPrimary: 'Ver Projetos',
  btnSecondary: 'Falar comigo →',
  statProjects: '20',
  statProjectsLabel: 'projetos no GitHub',
}

// ── Sobre mim ──
export const about = {
  // Coloque sua foto em /public (ex.: public/foto.jpg) e use '/foto.jpg'. Deixe null para o placeholder.
  photoUrl: '/foto.png' as string | null,
  photoShape: 'round' as 'round' | 'square',
  titleLine1: 'Sistemas intuitivos',
  titleLine2: 'e funcionais.',
  paragraph1:
    'Sou apaixonado por computação e tecnologia e estou sempre buscando aprimorar meus conhecimentos em desenvolvimento. Gosto de usar criatividade e inovação para construir sistemas intuitivos e funcionais, do banco de dados à tela do usuário.',
  paragraph2:
    'Desenvolvo o Cyberly Sistema, um PDV com emissão de NFC-e e NF-e, e o Cyberly Diet, um diário alimentar com inteligência artificial. Curso Análise e Desenvolvimento de Sistemas na Unifacisa, e estruturas de dados e algoritmos fazem parte do meu dia a dia.',
  stats: [
    { value: '20', label: 'Projetos no GitHub' },
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
    name: 'Cyberly Diet',
    description:
      'Diário alimentar com IA: fotografe o prato e a IA estima calorias e macronutrientes. Também registra peso, atividade física e água.',
    emoji: '🥗',
    tags: ['Laravel', 'IA', 'Supabase'],
    demoUrl: 'https://cyberly-diet.vercel.app',
    githubUrl: 'https://github.com/Emerson-hub-on/Cyberly-Diet',
  },
  {
    name: 'Cyberly Sistema',
    description:
      'Sistema de PDV (frente de caixa) com emissão de NFC-e e NF-e, comandas para restaurantes, integração com o iFood e pedidos online.',
    emoji: '🧾',
    tags: ['Automação fiscal'],
  },
  {
    name: 'Delivery Express',
    description:
      'Plataforma de delivery multiloja: cardápio, painel da loja, PDV, acompanhamento de pedidos e área do motoboy.',
    emoji: '🛵',
    tags: ['Next.js', 'TypeScript', 'Supabase'],
    githubUrl: 'https://github.com/Emerson-hub-on/delivery-express',
  },
  {
    name: 'Trufa App',
    description:
      'Gestão de produção e vendas de trufas: sabores, ficha técnica, compras, vendas e relatórios em PDF e Excel.',
    emoji: '🍫',
    tags: ['Nuxt', 'Vue', 'Supabase'],
    demoUrl: 'https://trufa-app.vercel.app',
    githubUrl: 'https://github.com/Emerson-hub-on/trufa-app',
  },
  {
    name: 'SEFAZ Proxy',
    description:
      'Proxy para os web services da SEFAZ, com autenticação por certificado digital A1 e acesso protegido por chave.',
    emoji: '🔐',
    tags: ['Node.js', 'Express', 'Automação fiscal'],
    githubUrl: 'https://github.com/Emerson-hub-on/sefaz-proxy',
  },
  {
    name: 'Galeria de Certificados',
    description: 'Galeria dos meus certificados de cursos, feita com componentes React.',
    emoji: '🏅',
    tags: ['React', 'Tailwind'],
    demoUrl: 'https://galeria-de-certificados.vercel.app',
    githubUrl: 'https://github.com/Emerson-hub-on/galeria-de-certificados',
  },
]

// ── Skills ──
export const skillCategories = [
  {
    name: 'Frontend',
    icon: '🎯',
    color: '#7c6aff',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue / Nuxt', 'React / Next.js', 'Tailwind CSS', 'Alpine.js'],
  },
  {
    name: 'Backend & Dados',
    icon: '⚙️',
    color: '#00e5cc',
    skills: ['PHP', 'Laravel', 'Node.js', 'Express', 'MySQL', 'SQLite', 'Supabase'],
  },
  {
    name: 'Outras linguagens',
    icon: '🧠',
    color: '#ff6b6b',
    skills: ['Java', 'Python', 'C', 'Estruturas de Dados'],
  },
]

// "Também trabalho com"
export const otherTechs = [
  'Git', 'GitHub', 'Vite', 'Linux', 'Nginx', 'VS Code',
  'Pinia', 'Chart.js', 'Mercado Pago', 'NFC-e / NF-e', 'Vercel',
]

// ── Experiência (a primeira aparece destacada como atual) ──
export const experiences: {
  role: string
  company: string
  period: string
  description: string
  techs: string[]
}[] = [
  {
    role: 'Suporte de TI',
    company: 'Cupom Fiscal Sistemas',
    period: 'Atual',
    description:
      'Suporte técnico aos clientes da empresa: atendimento, instalação e configuração dos sistemas e resolução de problemas.',
    techs: [],
  },
]

// ── Contato (deixe um link vazio '' para esconder a rede) ──
export const contact = {
  email: 'sousaemerson.bol@gmail.com',
  githubUrl: 'https://github.com/Emerson-hub-on',
  linkedinUrl: '',
  instagramUrl: 'https://www.instagram.com/messon_souza',
}
