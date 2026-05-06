<template>
  <section id="sobre" class="py-28 relative">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-16 items-center">

        <!-- Visual side -->
        <div class="relative order-2 md:order-1">
          <!-- Avatar placeholder -->
          <div class="relative w-72 h-72 mx-auto md:mx-0">
            <!-- Glow border -->
            <div class="absolute inset-0 rounded-2xl opacity-30 blur-xl"
              style="background: linear-gradient(135deg, #7c6aff, #00e5cc);" />
            <div class="relative w-full h-full rounded-2xl border border-dark-600 overflow-hidden bg-dark-800 flex items-center justify-center">
              <!-- Substitua pela sua foto: <img src="/sua-foto.jpg" class="w-full h-full object-cover" /> -->
              <div class="flex flex-col items-center gap-3 text-gray-600">
                <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span class="text-xs font-mono">sua foto aqui</span>
              </div>
            </div>
            <!-- Corner accent -->
            <div class="absolute -bottom-3 -right-3 w-16 h-16 rounded-xl border border-accent/40 bg-accent/5" />
            <div class="absolute -top-3 -left-3 w-8 h-8 rounded-lg border border-cyan-accent/30 bg-cyan-accent/5" />
          </div>
        </div>

        <!-- Text side -->
        <div class="order-1 md:order-2">
          <p class="section-label mb-4">Sobre mim</p>
          <h2 class="section-title mb-6">
            Código limpo,<br />
            <span class="text-accent">resultados reais.</span>
          </h2>

          <div class="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Sou um desenvolvedor frontend com paixão por criar interfaces que unem estética e funcionalidade.
              Trabalho com <span class="text-white font-medium">Vue.js, Nuxt, React</span> e um ecossistema moderno de ferramentas.
            </p>
            <p>
              Acredito que um bom produto nasce da atenção aos detalhes: performance, acessibilidade e uma UX que faz o usuário sorrir.
            </p>
          </div>

          <!-- Fun facts -->
          <div class="mt-8 grid grid-cols-2 gap-4">
            <div v-for="fact in facts" :key="fact.label" class="card-dark p-4">
              <p class="font-display font-bold text-2xl text-white mb-1">{{ fact.value }}</p>
              <p class="text-gray-500 text-sm">{{ fact.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const facts = [
  { value: '3+', label: 'Anos de experiência' },
  { value: '20+', label: 'Projetos entregues' },
  { value: '10+', label: 'Clientes satisfeitos' },
  { value: '∞', label: 'Café consumido' },
]
</script>