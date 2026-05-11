<template>
  <section id="contato" class="py-28">
    <div class="max-w-6xl mx-auto px-6">
      <div class="max-w-2xl mx-auto text-center">
        <p class="section-label mb-4">Vamos conversar</p>
        <h2 class="section-title mb-6">
          Tem um projeto em mente?
        </h2>
        <p class="text-gray-400 text-lg leading-relaxed mb-12">
          Estou sempre aberto a novas oportunidades e projetos interessantes.
          Me manda uma mensagem — respondo em até 24h.
        </p>

        <!-- CTA principal -->
        <a
          href="mailto:seuemail@exemplo.com"
          class="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-lg text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl mb-12"
          style="background: linear-gradient(135deg, #7c6aff, #5a4bcc); box-shadow: 0 8px 32px rgba(124, 106, 255, 0.3);"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          seuemail@exemplo.com
        </a>

        <!-- Divider -->
        <div class="glow-line my-10" />

        <!-- Social links -->
        <div class="flex justify-center gap-6">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="group flex items-center gap-2 text-gray-500 hover:text-white transition-all duration-200"
          >
            <span class="card-dark p-3 rounded-xl group-hover:border-accent/30 transition-all duration-200">
              <component :is="social.icon" class="w-5 h-5" />
            </span>
            <span class="text-sm font-medium hidden sm:block">{{ social.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Ícone GitHub inline
const GitHubIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>`,
}

const LinkedInIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
}

const TwitterIcon = {
  template: `<svg fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
}

const socials = [
  { name: 'GitHub', url: 'https://github.com/seu-usuario', icon: GitHubIcon },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/seu-usuario', icon: LinkedInIcon },
  { name: 'Twitter / X', url: 'https://twitter.com/seu-usuario', icon: TwitterIcon },
]
</script>