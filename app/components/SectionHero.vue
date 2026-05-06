<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background noise + grid -->
    <div class="absolute inset-0 bg-dark-950">
      <!-- Grid lines -->
      <div
        class="absolute inset-0 opacity-[0.04]"
        style="background-image: linear-gradient(#7c6aff 1px, transparent 1px), linear-gradient(90deg, #7c6aff 1px, transparent 1px); background-size: 60px 60px;"
      />
      <!-- Glow blob -->
      <div class="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] animate-pulse-glow"
        style="background: radial-gradient(circle, #7c6aff 0%, transparent 70%);"
      />
      <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-5 blur-[100px]"
        style="background: radial-gradient(circle, #00e5cc 0%, transparent 70%);"
      />
    </div>

    <div class="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
      <div class="max-w-3xl">
        <!-- Label -->
        <p class="section-label mb-6 animate-fade-in opacity-0" style="animation-delay: 0.1s; animation-fill-mode: forwards;">
          Olá, seja bem-vindo
        </p>

        <!-- Name -->
        <h1 class="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0" style="animation-delay: 0.2s; animation-fill-mode: forwards;">
          Sou
          <span class="relative">
            <span class="text-transparent bg-clip-text" style="background-image: linear-gradient(135deg, #7c6aff, #00e5cc);">
              Dev Frontend
            </span>
          </span>
          <br />
          apaixonado
          <br />
          por interfaces.
        </h1>

        <!-- Description -->
        <p class="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-up opacity-0" style="animation-delay: 0.4s; animation-fill-mode: forwards;">
          Transformo ideias em experiências digitais incríveis. Especializado em Vue, Nuxt e React — foco em performance, acessibilidade e design.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 animate-fade-up opacity-0" style="animation-delay: 0.55s; animation-fill-mode: forwards;">
          <a
            href="#projetos"
            class="px-6 py-3 rounded-xl font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style="background: linear-gradient(135deg, #7c6aff, #5a4bcc); box-shadow: 0 4px 20px rgba(124, 106, 255, 0.3);"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            class="px-6 py-3 rounded-xl font-medium text-gray-300 border border-dark-600 hover:border-accent/50 hover:text-white transition-all duration-200"
          >
            Falar comigo →
          </a>
        </div>

        <!-- Scroll hint -->
        <div class="mt-16 flex items-center gap-3 text-gray-600 text-sm animate-fade-in opacity-0" style="animation-delay: 1s; animation-fill-mode: forwards;">
          <div class="w-px h-12 bg-gradient-to-b from-transparent to-dark-600" />
          <span class="font-mono">scroll para ver mais</span>
        </div>
      </div>

      <!-- Floating badge -->
      <div class="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4 animate-float">
        <div class="card-dark px-5 py-4 flex items-center gap-3">
          <span class="text-2xl">⚡</span>
          <div>
            <p class="font-display font-bold text-white text-lg">3+</p>
            <p class="text-gray-500 text-xs font-mono">anos de experiência</p>
          </div>
        </div>
        <div class="card-dark px-5 py-4 flex items-center gap-3">
          <span class="text-2xl">🚀</span>
          <div>
            <p class="font-display font-bold text-white text-lg">20+</p>
            <p class="text-gray-500 text-xs font-mono">projetos entregues</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>