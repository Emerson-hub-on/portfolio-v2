<template>
  <div class="min-h-screen bg-dark-950 flex items-center justify-center">
    <div class="w-full max-w-sm p-8 rounded-2xl border border-dark-700 bg-dark-900">
      <p class="text-xs font-mono text-accent tracking-widest uppercase mb-1">Portfolio CMS</p>
      <h1 class="font-display text-2xl font-bold text-white mb-8">Acesso admin</h1>

      <form @submit.prevent="login" class="flex flex-col gap-4">
        <div>
          <label class="text-xs text-gray-500 mb-1.5 block">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="seu@email.com"
            class="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-accent/60 transition-colors"
          />
        </div>
        <div>
          <label class="text-xs text-gray-500 mb-1.5 block">Senha</label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            class="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-accent/60 transition-colors"
          />
        </div>

        <p v-if="error" class="text-red-400 text-xs flex items-center gap-1.5">
          <span>⚠</span> {{ error }}
        </p>

        <button
          type="submit"
          :disabled="loading"
          class="mt-2 py-2.5 rounded-lg font-medium text-white text-sm transition-opacity disabled:opacity-50"
          style="background: linear-gradient(135deg, #7c6aff, #5a4bcc);"
        >
          {{ loading ? 'Entrando...' : 'Entrar' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })

const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function login() {
  loading.value = true
  error.value = ''
  const { error: authError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (authError) {
    error.value = 'Email ou senha incorretos'
  } else {
    navigateTo('/admin')
  }
  loading.value = false
}
</script>