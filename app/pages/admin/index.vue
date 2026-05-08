<template>
  <div class="min-h-screen bg-dark-950 text-white flex">

    <!-- Sidebar -->
    <aside class="w-52 shrink-0 bg-dark-900 border-r border-dark-700 flex flex-col">
      <div class="px-4 py-5 border-b border-dark-700">
        <p class="text-xs font-mono text-accent tracking-widest uppercase">Portfolio CMS</p>
        <p class="text-xs text-gray-500 mt-0.5">Painel admin</p>
      </div>

      <nav class="p-2 flex-1 flex flex-col gap-0.5">
        <p class="text-[10px] text-gray-600 uppercase tracking-widest px-2 py-2">Seções</p>
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left w-full"
          :class="active === tab.id
            ? 'bg-accent/10 text-accent border-l-2 border-accent pl-[10px]'
            : 'text-gray-400 hover:text-white hover:bg-dark-800'"
          @click="active = tab.id"
        >
          <span>{{ tab.icon }}</span>
          {{ tab.label }}
        </button>
      </nav>

      <div class="p-2">
        <button
          class="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-400 border border-red-500/20 hover:bg-red-500/10 transition-all"
          @click="logout"
        >
          <span>↩</span> Sair
        </button>
      </div>
    </aside>

    <!-- Main -->
    <div class="flex-1 flex flex-col overflow-hidden">

      <!-- Topbar -->
      <header class="flex items-center justify-between px-6 py-4 border-b border-dark-700 bg-dark-900">
        <div>
          <h1 class="font-display font-semibold text-base">{{ currentTab.label }}</h1>
          <p class="text-xs text-gray-500 mt-0.5">{{ currentTab.sub }}</p>
        </div>
        <button
          class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-40"
          style="background: linear-gradient(135deg, #7c6aff, #5a4bcc);"
          :disabled="saving"
          @click="save"
        >
          {{ saving ? 'Salvando...' : '💾 Salvar' }}
        </button>
      </header>

      <!-- Content -->
      <main class="flex-1 overflow-y-auto p-6">

        <!-- Toast -->
        <Transition name="toast">
          <div v-if="toast" class="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-green-300 border border-green-500/30 bg-dark-800">
            ✓ Salvo com sucesso!
          </div>
        </Transition>

        <!-- HERO -->
        <div v-if="active === 'hero'" class="flex flex-col gap-5 max-w-2xl">
          <AdminSection title="Textos principais">
            <AdminField label="Tag de boas-vindas">
              <input v-model="hero.welcome_tag" v-bind="inputClass" />
            </AdminField>
            <AdminField label="Título destaque">
              <input v-model="hero.title_highlight" v-bind="inputClass" />
            </AdminField>
            <AdminField label="Complemento do título">
              <input v-model="hero.title_complement" v-bind="inputClass" />
            </AdminField>
            <AdminField label="Descrição">
              <textarea v-model="hero.description" v-bind="inputClass" rows="3" class="resize-none" />
            </AdminField>
          </AdminSection>

          <AdminSection title="Botões de ação">
            <div class="grid grid-cols-2 gap-3">
              <AdminField label="Botão primário">
                <input v-model="hero.btn_primary" v-bind="inputClass" />
              </AdminField>
              <AdminField label="Botão secundário">
                <input v-model="hero.btn_secondary" v-bind="inputClass" />
              </AdminField>
            </div>
          </AdminSection>

          <AdminSection title="Estatísticas">
            <div class="grid grid-cols-2 gap-3">
              <div class="bg-dark-800 rounded-lg p-3 flex items-center gap-3 border border-dark-600">
                <input v-model="hero.stat_experience" class="bg-transparent text-accent font-bold text-xl w-14 outline-none" />
                <span class="text-xs text-gray-500 font-mono">anos de experiência</span>
              </div>
              <div class="bg-dark-800 rounded-lg p-3 flex items-center gap-3 border border-dark-600">
                <input v-model="hero.stat_projects" class="bg-transparent text-accent font-bold text-xl w-14 outline-none" />
                <span class="text-xs text-gray-500 font-mono">projetos entregues</span>
              </div>
            </div>
          </AdminSection>
        </div>

        <!-- ABOUT -->
        <div v-if="active === 'about'" class="flex flex-col gap-5 max-w-2xl">
          <AdminSection title="Foto de perfil">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 rounded-xl bg-dark-800 border border-dashed border-dark-600 flex items-center justify-content overflow-hidden">
                <img v-if="about.photo_url" :src="about.photo_url" class="w-full h-full object-cover" />
                <span v-else class="text-2xl m-auto">👤</span>
              </div>
              <div>
                <input type="file" ref="fileInput" accept="image/*" class="hidden" @change="uploadPhoto" />
                <button
                  class="px-3 py-1.5 text-xs border border-accent/40 text-accent rounded-lg hover:bg-accent/10 transition-all"
                  @click="fileInput?.click()"
                >
                  {{ uploading ? 'Enviando...' : '↑ Escolher foto' }}
                </button>
                <p class="text-xs text-gray-600 mt-1.5">JPG, PNG ou WebP</p>
              </div>
            </div>
          </AdminSection>

          <AdminSection title="Textos">
            <div class="grid grid-cols-2 gap-3">
              <AdminField label="Título linha 1">
                <input v-model="about.title_line1" v-bind="inputClass" />
              </AdminField>
              <AdminField label="Título linha 2 (destaque)">
                <input v-model="about.title_line2" v-bind="inputClass" />
              </AdminField>
            </div>
            <AdminField label="Parágrafo 1">
              <textarea v-model="about.paragraph1" v-bind="inputClass" rows="3" class="resize-none" />
            </AdminField>
            <AdminField label="Parágrafo 2">
              <textarea v-model="about.paragraph2" v-bind="inputClass" rows="3" class="resize-none" />
            </AdminField>
          </AdminSection>

          <AdminSection title="Números">
            <div class="grid grid-cols-2 gap-3">
              <div v-for="stat in aboutStats" :key="stat.key" class="bg-dark-800 border border-dark-600 rounded-lg p-3 flex items-center gap-3">
                <input v-model="about[stat.key]" class="bg-transparent text-accent font-bold text-lg w-12 outline-none" />
                <span class="text-xs text-gray-500 font-mono">{{ stat.label }}</span>
              </div>
            </div>
          </AdminSection>
        </div>

        <!-- PROJETOS -->
        <div v-if="active === 'projects'" class="flex flex-col gap-5 max-w-2xl">
          <AdminSection title="Projetos">
            <div class="flex flex-col gap-2">
              <div
                v-for="(proj, i) in projects"
                :key="proj.id || i"
                class="flex items-center gap-3 bg-dark-800 border border-dark-700 rounded-lg px-3 py-2.5"
              >
                <span class="text-xl cursor-pointer" @click="changeEmoji(i)">{{ proj.emoji }}</span>
                <div class="flex-1 min-w-0">
                  <input
                    v-model="proj.name"
                    placeholder="Nome do projeto"
                    class="bg-transparent text-sm text-white w-full outline-none font-medium"
                  />
                  <input
                    v-model="proj.tagsInput"
                    placeholder="tags separadas por vírgula"
                    class="bg-transparent text-xs text-gray-500 w-full outline-none mt-0.5"
                  />
                </div>
                <button class="text-red-400/60 hover:text-red-400 text-sm transition-colors px-1" @click="removeProject(i)">✕</button>
              </div>
            </div>
            <button
              class="mt-2 w-full py-2 border border-dashed border-dark-600 rounded-lg text-xs text-gray-500 hover:text-accent hover:border-accent/40 transition-all"
              @click="addProject"
            >
              + Adicionar projeto
            </button>
          </AdminSection>
        </div>

        <!-- SETTINGS -->
        <div v-if="active === 'settings'" class="flex flex-col gap-5 max-w-md">
          <AdminSection title="Alterar senha">
            <AdminField label="Nova senha">
              <input v-model="newPassword" type="password" placeholder="••••••••" v-bind="inputClass" />
            </AdminField>
            <AdminField label="Confirmar nova senha">
              <input v-model="confirmPassword" type="password" placeholder="••••••••" v-bind="inputClass" />
            </AdminField>
            <button
              class="mt-1 px-4 py-2 text-sm rounded-lg font-medium text-white transition-opacity hover:opacity-80"
              style="background: linear-gradient(135deg, #7c6aff, #5a4bcc);"
              @click="changePassword"
            >
              Atualizar senha
            </button>
            <p v-if="pwMsg" class="text-xs mt-2" :class="pwMsg.ok ? 'text-green-400' : 'text-red-400'">
              {{ pwMsg.text }}
            </p>
          </AdminSection>
        </div>

      </main>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ middleware: 'auth', layout: false })

const supabase = useSupabaseClient()
const { fetchHero, fetchAbout, fetchProjects, updateHero, updateAbout, upsertProject, deleteProject } = usePortfolioData()

// State
const active = ref('hero')
const saving = ref(false)
const uploading = ref(false)
const toast = ref(false)
const fileInput = ref(null)
const newPassword = ref('')
const confirmPassword = ref('')
const pwMsg = ref(null)

const hero = ref({})
const about = ref({})
const projects = ref([])

const tabs = [
  { id: 'hero',     icon: '🏠', label: 'Hero',       sub: 'Editar seção inicial' },
  { id: 'about',    icon: '👤', label: 'Sobre mim',  sub: 'Foto, bio e estatísticas' },
  { id: 'projects', icon: '🗂', label: 'Projetos',   sub: 'Gerenciar portfólio' },
  { id: 'settings', icon: '⚙️', label: 'Config',     sub: 'Conta e segurança' },
]

const currentTab = computed(() => tabs.find(t => t.id === active.value))

const inputClass = {
  class: 'w-full bg-dark-800 border border-dark-600 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/60 transition-colors font-body'
}

const aboutStats = [
  { key: 'stat_experience', label: 'anos de experiência' },
  { key: 'stat_projects',   label: 'projetos entregues' },
  { key: 'stat_clients',    label: 'clientes satisfeitos' },
  { key: 'stat_coffee',     label: 'café consumido' },
]

// Load
onMounted(async () => {
  const [h, a, p] = await Promise.all([fetchHero(), fetchAbout(), fetchProjects()])
  hero.value = h || {}
  about.value = a || {}
  projects.value = (p || []).map(proj => ({
    ...proj,
    tagsInput: (proj.tags || []).join(', ')
  }))
})

// Save
async function save() {
  saving.value = true
  if (active.value === 'hero')     await updateHero(hero.value)
  if (active.value === 'about')    await updateAbout(about.value)
  if (active.value === 'projects') {
    for (const proj of projects.value) {
      await upsertProject({
        ...proj,
        tags: proj.tagsInput?.split(',').map(t => t.trim()).filter(Boolean) || []
      })
    }
  }
  saving.value = false
  showToast()
}

function showToast() {
  toast.value = true
  setTimeout(() => toast.value = false, 2500)
}

// Photo upload
async function uploadPhoto(event) {
  const file = event.target.files[0]
  if (!file) return
  uploading.value = true
  const ext = file.name.split('.').pop()
  const path = `profile/photo.${ext}`
  const { data } = await supabase.storage.from('portfolio').upload(path, file, { upsert: true })
  if (data) {
    const { data: urlData } = supabase.storage.from('portfolio').getPublicUrl(path)
    about.value.photo_url = urlData.publicUrl
  }
  uploading.value = false
}

// Projects
function addProject() {
  projects.value.push({ name: '', description: '', emoji: '🚀', tags: [], tagsInput: '', visible: true, order_index: projects.value.length })
}

function removeProject(i) {
  const proj = projects.value[i]
  if (proj.id) deleteProject(proj.id)
  projects.value.splice(i, 1)
}

const emojis = ['🚀', '📊', '⛅', '🛒', '🎮', '📱', '🌐', '🔧', '✨', '🎨']
function changeEmoji(i) {
  const current = emojis.indexOf(projects.value[i].emoji)
  projects.value[i].emoji = emojis[(current + 1) % emojis.length]
}

// Password
async function changePassword() {
  if (newPassword.value !== confirmPassword.value) {
    pwMsg.value = { ok: false, text: 'As senhas não coincidem.' }
    return
  }
  const { error } = await supabase.auth.updateUser({ password: newPassword.value })
  pwMsg.value = error
    ? { ok: false, text: 'Erro ao atualizar a senha.' }
    : { ok: true, text: 'Senha atualizada com sucesso!' }
  newPassword.value = ''
  confirmPassword.value = ''
}

// Logout
async function logout() {
  await supabase.auth.signOut()
  navigateTo('/admin/login')
}
</script>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(10px); }
</style>