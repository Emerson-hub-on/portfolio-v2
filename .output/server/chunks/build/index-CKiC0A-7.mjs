import { ref, unref, mergeProps, createVNode, resolveDynamicComponent, computed, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { u as useSeoMeta } from './composables-DQb260gL.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main$6 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "hero",
    class: "relative min-h-screen flex items-center overflow-hidden"
  }, _attrs))}><div class="absolute inset-0 bg-dark-950"><div class="absolute inset-0 opacity-[0.04]" style="${ssrRenderStyle({ "background-image": "linear-gradient(#7c6aff 1px, transparent 1px), linear-gradient(90deg, #7c6aff 1px, transparent 1px)", "background-size": "60px 60px" })}"></div><div class="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] animate-pulse-glow" style="${ssrRenderStyle({ "background": "radial-gradient(circle, #7c6aff 0%, transparent 70%)" })}"></div><div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px]" style="${ssrRenderStyle({ "background": "radial-gradient(circle, #00e5cc 0%, transparent 70%)" })}"></div></div><div class="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full"><div class="max-w-3xl"><p class="section-label mb-6 animate-fade-in opacity-0" style="${ssrRenderStyle({ "animation-delay": "0.1s", "animation-fill-mode": "forwards" })}"> Olá, seja bem-vindo </p><h1 class="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0" style="${ssrRenderStyle({ "animation-delay": "0.2s", "animation-fill-mode": "forwards" })}"> Sou <span class="relative"><span class="text-transparent bg-clip-text" style="${ssrRenderStyle({ "background-image": "linear-gradient(135deg, #7c6aff, #00e5cc)" })}"> Dev Frontend </span></span><br> apaixonado <br> por interfaces. </h1><p class="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-up opacity-0" style="${ssrRenderStyle({ "animation-delay": "0.4s", "animation-fill-mode": "forwards" })}"> Transformo ideias em experiências digitais incríveis. Especializado em Vue, Nuxt e React — foco em performance, acessibilidade e design. </p><div class="flex flex-wrap gap-4 animate-fade-up opacity-0" style="${ssrRenderStyle({ "animation-delay": "0.55s", "animation-fill-mode": "forwards" })}"><a href="#projetos" class="px-6 py-3 rounded-xl font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c6aff, #5a4bcc)", "box-shadow": "0 4px 20px rgba(124, 106, 255, 0.3)" })}"> Ver Projetos </a><a href="#contato" class="px-6 py-3 rounded-xl font-medium text-gray-300 border border-dark-600 hover:border-accent/50 hover:text-white transition-all duration-200"> Falar comigo → </a></div><div class="mt-16 flex items-center gap-3 text-gray-600 text-sm animate-fade-in opacity-0" style="${ssrRenderStyle({ "animation-delay": "1s", "animation-fill-mode": "forwards" })}"><div class="w-px h-12 bg-gradient-to-b from-transparent to-dark-600"></div><span class="font-mono">scroll para ver mais</span></div></div><div class="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 animate-float"><div class="card-dark px-5 py-4 flex items-center gap-3"><span class="text-2xl">⚡</span><div><p class="font-display font-bold text-white text-lg">3+</p><p class="text-gray-500 text-xs font-mono">anos de experiência</p></div></div><div class="card-dark px-5 py-4 flex items-center gap-3"><span class="text-2xl">🚀</span><div><p class="font-display font-bold text-white text-lg">20+</p><p class="text-gray-500 text-xs font-mono">projetos entregues</p></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender]]), { __name: "SectionHero" });
const _sfc_main$5 = {
  __name: "SectionSobre",
  __ssrInlineRender: true,
  setup(__props) {
    const facts = [
      { value: "3+", label: "Anos de experiência" },
      { value: "20+", label: "Projetos entregues" },
      { value: "10+", label: "Clientes satisfeitos" },
      { value: "∞", label: "Café consumido" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "sobre",
        class: "py-28 relative"
      }, _attrs))}><div class="max-w-6xl mx-auto px-6"><div class="grid md:grid-cols-2 gap-16 items-center"><div class="relative order-2 md:order-1"><div class="relative w-72 h-72 mx-auto md:mx-0"><div class="absolute inset-0 rounded-2xl opacity-30 blur-xl" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c6aff, #00e5cc)" })}"></div><div class="relative w-full h-full rounded-2xl border border-dark-600 overflow-hidden bg-dark-800 flex items-center justify-center"><div class="flex flex-col items-center gap-3 text-gray-600"><svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg><span class="text-xs font-mono">sua foto aqui</span></div></div><div class="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl border border-accent/40 bg-accent/5"></div><div class="absolute -top-3 -left-3 w-8 h-8 rounded-lg border border-cyan-accent/30 bg-cyan-accent/5"></div></div></div><div class="order-1 md:order-2"><p class="section-label mb-4">Sobre mim</p><h2 class="section-title mb-6"> Código limpo,<br><span class="text-accent">resultados reais.</span></h2><div class="space-y-4 text-gray-400 leading-relaxed"><p> Sou um desenvolvedor frontend com paixão por criar interfaces que unem estética e funcionalidade. Trabalho com <span class="text-white font-medium">Vue.js, Nuxt, React</span> e um ecossistema moderno de ferramentas. </p><p> Acredito que um bom produto nasce da atenção aos detalhes: performance, acessibilidade e uma UX que faz o usuário sorrir. </p></div><div class="mt-8 grid grid-cols-2 gap-4"><!--[-->`);
      ssrRenderList(facts, (fact) => {
        _push(`<div class="card-dark p-4"><p class="font-display font-bold text-2xl text-white mb-1">${ssrInterpolate(fact.value)}</p><p class="text-gray-500 text-sm">${ssrInterpolate(fact.label)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionSobre.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "SectionProjetos",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = [
      {
        title: "E-commerce Dashboard",
        description: "Painel administrativo completo com gráficos em tempo real, gestão de pedidos e relatórios.",
        emoji: "📊",
        color: "#7c6aff",
        tags: ["Vue 3", "Pinia", "Chart.js", "Tailwind"],
        demo: "#",
        github: "#"
      },
      {
        title: "App de Clima",
        description: "PWA de previsão do tempo com animações baseadas nas condições climáticas e geolocalização.",
        emoji: "🌤️",
        color: "#00e5cc",
        tags: ["Nuxt", "OpenWeather API", "GSAP"],
        demo: "#",
        github: "#"
      },
      {
        title: "Landing Page SaaS",
        description: "Página de vendas de alta conversão com animações de scroll e seções interativas.",
        emoji: "🚀",
        color: "#ff6b6b",
        tags: ["Nuxt", "Tailwind", "GSAP", "SEO"],
        demo: "#",
        github: null
      },
      {
        title: "Sistema de Design",
        description: "Biblioteca de componentes reutilizáveis com documentação interativa e Storybook.",
        emoji: "🎨",
        color: "#ffd93d",
        tags: ["Vue 3", "Storybook", "TypeScript"],
        demo: "#",
        github: "#"
      },
      {
        title: "Blog Pessoal",
        description: "Blog com conteúdo em Markdown, modo escuro, RSS feed e 100 no Lighthouse.",
        emoji: "✍️",
        color: "#6bcb77",
        tags: ["Nuxt Content", "Markdown", "SEO"],
        demo: "#",
        github: "#"
      },
      {
        title: "Clone do Figma",
        description: "Editor colaborativo de design com canvas infinito, múltiplas formas e exportação SVG.",
        emoji: "🖌️",
        color: "#a78bfa",
        tags: ["Vue 3", "Canvas API", "WebSockets"],
        demo: "#",
        github: "#"
      }
    ];
    const activeTag = ref("Todos");
    const allTags = computed(() => {
      const tags = /* @__PURE__ */ new Set();
      projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
      return [...tags].slice(0, 6);
    });
    const filteredProjects = computed(() => {
      if (activeTag.value === "Todos") return projects;
      return projects.filter((p) => p.tags.includes(activeTag.value));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "projetos",
        class: "py-28 relative"
      }, _attrs))}><div class="absolute inset-0 bg-dark-900/40"></div><div class="relative max-w-6xl mx-auto px-6"><div class="text-center mb-16"><p class="section-label mb-4">Portfolio</p><h2 class="section-title">Projetos em destaque</h2></div><div class="flex flex-wrap justify-center gap-2 mb-12"><!--[-->`);
      ssrRenderList(["Todos", ...unref(allTags)], (tag) => {
        _push(`<button class="${ssrRenderClass([unref(activeTag) === tag ? "bg-accent text-white" : "bg-dark-800 text-gray-400 hover:text-white border border-dark-600", "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"])}">${ssrInterpolate(tag)}</button>`);
      });
      _push(`<!--]--></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(filteredProjects), (project) => {
        _push(`<article class="group card-dark overflow-hidden hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"><div class="relative h-48 bg-dark-700 overflow-hidden"><div class="absolute inset-0 flex items-center justify-center text-6xl" style="${ssrRenderStyle(`background: linear-gradient(135deg, ${project.color}20, ${project.color}05)`)}">${ssrInterpolate(project.emoji)}</div><div class="absolute inset-0 bg-dark-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">`);
        if (project.demo) {
          _push(`<a${ssrRenderAttr("href", project.demo)} target="_blank" class="px-4 py-2 bg-accent text-white text-sm rounded-lg font-medium hover:bg-accent/80 transition-colors"> Ver Demo </a>`);
        } else {
          _push(`<!---->`);
        }
        if (project.github) {
          _push(`<a${ssrRenderAttr("href", project.github)} target="_blank" class="px-4 py-2 bg-dark-700 text-white text-sm rounded-lg font-medium hover:bg-dark-600 transition-colors"> GitHub </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="p-6"><h3 class="font-display font-bold text-lg text-white mb-2">${ssrInterpolate(project.title)}</h3><p class="text-gray-400 text-sm leading-relaxed mb-4">${ssrInterpolate(project.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(project.tags, (tag) => {
          _push(`<span class="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-700 text-gray-300 border border-dark-600">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionProjetos.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$4, { __name: "SectionProjetos" });
const _sfc_main$3 = {
  __name: "SectionSkills",
  __ssrInlineRender: true,
  setup(__props) {
    const skillCategories = [
      {
        name: "Frontend Core",
        icon: "🎯",
        color: "#7c6aff",
        skills: [
          { name: "Vue.js / Nuxt", level: 90 },
          { name: "React / Next.js", level: 75 },
          { name: "TypeScript", level: 80 },
          { name: "HTML & CSS", level: 95 }
        ]
      },
      {
        name: "Estilo & Design",
        icon: "🎨",
        color: "#00e5cc",
        skills: [
          { name: "Tailwind CSS", level: 90 },
          { name: "SASS / SCSS", level: 80 },
          { name: "Figma", level: 70 },
          { name: "CSS Animations", level: 75 }
        ]
      },
      {
        name: "Ferramentas",
        icon: "⚙️",
        color: "#ff6b6b",
        skills: [
          { name: "Git / GitHub", level: 85 },
          { name: "Vite / Webpack", level: 75 },
          { name: "Jest / Vitest", level: 65 },
          { name: "Docker (básico)", level: 50 }
        ]
      }
    ];
    const otherTechs = [
      "Pinia",
      "Vuex",
      "GraphQL",
      "REST API",
      "Axios",
      "GSAP",
      "Framer Motion",
      "Storybook",
      "ESLint",
      "Prettier",
      "Vercel",
      "Netlify",
      "PWA",
      "SEO",
      "Web Vitals"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "skills",
        class: "py-28"
      }, _attrs))}><div class="max-w-6xl mx-auto px-6"><div class="text-center mb-16"><p class="section-label mb-4">Toolkit</p><h2 class="section-title">Skills &amp; Tecnologias</h2></div><div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(skillCategories, (category) => {
        _push(`<div class="card-dark p-6 hover:border-accent/20 transition-all duration-300"><div class="flex items-center gap-3 mb-5"><span class="text-2xl">${ssrInterpolate(category.icon)}</span><h3 class="font-display font-bold text-white">${ssrInterpolate(category.name)}</h3></div><div class="space-y-3"><!--[-->`);
        ssrRenderList(category.skills, (skill) => {
          _push(`<div><div class="flex justify-between items-center mb-1.5"><span class="text-gray-300 text-sm font-medium">${ssrInterpolate(skill.name)}</span><span class="text-gray-500 text-xs font-mono">${ssrInterpolate(skill.level)}%</span></div><div class="h-1.5 bg-dark-700 rounded-full overflow-hidden"><div class="h-full rounded-full transition-all duration-1000" style="${ssrRenderStyle(`width: ${skill.level}%; background: linear-gradient(90deg, ${category.color}, ${category.color}99)`)}"></div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-12 text-center"><p class="text-gray-500 text-sm font-mono mb-6">// também trabalho com</p><div class="flex flex-wrap justify-center gap-3"><!--[-->`);
      ssrRenderList(otherTechs, (tech) => {
        _push(`<span class="px-4 py-2 rounded-full text-sm bg-dark-800 text-gray-300 border border-dark-600 hover:border-accent/40 hover:text-white transition-all cursor-default">${ssrInterpolate(tech)}</span>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionSkills.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "SectionExperiencia",
  __ssrInlineRender: true,
  setup(__props) {
    const experiences = [
      {
        role: "Frontend Developer",
        company: "Empresa Atual Ltda.",
        period: "2023 – presente",
        description: "Desenvolvimento de aplicações SPA e SSR em Vue 3 + Nuxt. Liderança técnica do frontend, definição de padrões de código, code review e mentoria júnior.",
        techs: ["Vue 3", "Nuxt", "TypeScript", "Tailwind", "Pinia"]
      },
      {
        role: "Frontend Developer Jr.",
        company: "Agência Digital XYZ",
        period: "2022 – 2023",
        description: "Criação de landing pages e sistemas web para clientes de e-commerce. Foco em performance, SEO e integração com APIs REST.",
        techs: ["Vue 2", "JavaScript", "SASS", "Webpack"]
      },
      {
        role: "Freelancer",
        company: "Projetos Próprios",
        period: "2021 – 2022",
        description: "Desenvolvimento de sites institucionais e e-commerces para clientes locais. Primeiros projetos com Vue.js e Nuxt.",
        techs: ["HTML", "CSS", "JavaScript", "WordPress"]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "experiencia",
        class: "py-28 relative"
      }, _attrs))}><div class="absolute inset-0 bg-dark-900/30"></div><div class="relative max-w-6xl mx-auto px-6"><div class="text-center mb-16"><p class="section-label mb-4">Trajetória</p><h2 class="section-title">Experiência</h2></div><div class="max-w-2xl mx-auto"><div class="relative"><div class="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-dark-600 to-transparent"></div><div class="space-y-8"><!--[-->`);
      ssrRenderList(experiences, (exp, index2) => {
        _push(`<div class="relative pl-20"><div class="${ssrRenderClass([index2 === 0 ? "border-accent bg-accent/20" : "border-dark-600 bg-dark-800", "absolute left-[26px] top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"])}">`);
        if (index2 === 0) {
          _push(`<div class="w-2 h-2 rounded-full bg-accent animate-pulse"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="card-dark p-6 hover:border-accent/20 transition-all duration-300"><div class="flex flex-wrap items-start justify-between gap-2 mb-3"><div><h3 class="font-display font-bold text-white text-lg">${ssrInterpolate(exp.role)}</h3><p class="text-accent text-sm font-medium">${ssrInterpolate(exp.company)}</p></div><span class="text-gray-500 text-xs font-mono bg-dark-700 px-3 py-1 rounded-full border border-dark-600">${ssrInterpolate(exp.period)}</span></div><p class="text-gray-400 text-sm leading-relaxed mb-4">${ssrInterpolate(exp.description)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(exp.techs, (tech) => {
          _push(`<span class="px-2.5 py-1 text-xs font-mono rounded-md bg-accent/10 text-accent/80 border border-accent/20">${ssrInterpolate(tech)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionExperiencia.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "SectionContato",
  __ssrInlineRender: true,
  setup(__props) {
    const GitHubIcon = {
      template: `<svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>`
    };
    const LinkedInIcon = {
      template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    };
    const TwitterIcon = {
      template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    };
    const socials = [
      { name: "GitHub", url: "https://github.com/seu-usuario", icon: GitHubIcon },
      { name: "LinkedIn", url: "https://linkedin.com/in/seu-usuario", icon: LinkedInIcon },
      { name: "Twitter / X", url: "https://twitter.com/seu-usuario", icon: TwitterIcon }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contato",
        class: "py-28"
      }, _attrs))}><div class="max-w-6xl mx-auto px-6"><div class="max-w-2xl mx-auto text-center"><p class="section-label mb-4">Vamos conversar</p><h2 class="section-title mb-6"> Tem um projeto em mente? </h2><p class="text-gray-400 text-lg leading-relaxed mb-12"> Estou sempre aberto a novas oportunidades e projetos interessantes. Me manda uma mensagem — respondo em até 24h. </p><a href="mailto:seuemail@exemplo.com" class="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-lg text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl mb-12" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c6aff, #5a4bcc)", "box-shadow": "0 8px 32px rgba(124, 106, 255, 0.3)" })}"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> seuemail@exemplo.com </a><div class="glow-line my-10"></div><div class="flex justify-center gap-6"><!--[-->`);
      ssrRenderList(socials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.url)} target="_blank" class="group flex items-center gap-2 text-gray-500 hover:text-white transition-all duration-200"><span class="card-dark p-3 rounded-xl group-hover:border-accent/30 transition-all duration-200">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(social.icon), { class: "w-5 h-5" }, null), _parent);
        _push(`</span><span class="text-sm font-medium hidden sm:block">${ssrInterpolate(social.name)}</span></a>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionContato.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Dev Frontend | Portfolio",
      description: "Portfolio de desenvolvimento frontend — Vue, Nuxt, React e muito mais."
    });
    const showIntro = ref(true);
    const revealing = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHero = __nuxt_component_0;
      const _component_SectionSobre = _sfc_main$5;
      const _component_SectionProjetos = __nuxt_component_2;
      const _component_SectionSkills = _sfc_main$3;
      const _component_SectionExperiencia = _sfc_main$2;
      const _component_SectionContato = _sfc_main$1;
      _push(`<!--[-->`);
      if (unref(showIntro)) {
        _push(`<div class="${ssrRenderClass([{ "revealing": unref(revealing) }, "intro-screen"])}" data-v-77252161><div class="intro-bg" data-v-77252161><div class="grid-overlay" data-v-77252161></div><div class="blob blob-purple" data-v-77252161></div><div class="blob blob-cyan" data-v-77252161></div></div><div class="${ssrRenderClass([{ "fade-out": unref(revealing) }, "intro-content"])}" data-v-77252161><div class="avatar-wrapper" data-v-77252161><div class="avatar-ring" data-v-77252161></div><div class="avatar-ring ring-2" data-v-77252161></div><div class="avatar" data-v-77252161><svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="avatar-icon" data-v-77252161><circle cx="40" cy="30" r="16" fill="#7c6aff" opacity="0.9" data-v-77252161></circle><ellipse cx="40" cy="68" rx="26" ry="16" fill="#7c6aff" opacity="0.6" data-v-77252161></ellipse></svg></div><div class="avatar-glow" data-v-77252161></div></div><p class="intro-role" data-v-77252161>Dev Frontend</p><p class="intro-sub" data-v-77252161>Vue · Nuxt · React</p><button class="btn-conhecer" data-v-77252161><span class="btn-text" data-v-77252161>Conhecer</span><span class="btn-arrow" data-v-77252161>↓</span></button></div><div class="${ssrRenderClass([{ "active": unref(revealing) }, "circle-expand"])}" data-v-77252161></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(showIntro) || unref(revealing)) {
        _push(`<div class="${ssrRenderClass([{ "visible": !unref(showIntro) }, "portfolio-content"])}" data-v-77252161>`);
        _push(ssrRenderComponent(_component_SectionHero, null, null, _parent));
        _push(`<div class="glow-line opacity-20" data-v-77252161></div>`);
        _push(ssrRenderComponent(_component_SectionSobre, null, null, _parent));
        _push(`<div class="glow-line opacity-20" data-v-77252161></div>`);
        _push(ssrRenderComponent(_component_SectionProjetos, null, null, _parent));
        _push(`<div class="glow-line opacity-20" data-v-77252161></div>`);
        _push(ssrRenderComponent(_component_SectionSkills, null, null, _parent));
        _push(`<div class="glow-line opacity-20" data-v-77252161></div>`);
        _push(ssrRenderComponent(_component_SectionExperiencia, null, null, _parent));
        _push(`<div class="glow-line opacity-20" data-v-77252161></div>`);
        _push(ssrRenderComponent(_component_SectionContato, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-77252161"]]);

export { index as default };
//# sourceMappingURL=index-CKiC0A-7.mjs.map
