<template>
  <div class="min-h-screen bg-dark-950 text-white flex">

    <!-- Overlay mobile -->
    <div
      v-if="menuOpen"
      class="fixed inset-0 bg-black/60 z-20 md:hidden"
      @click="menuOpen = false"
    />

    <!-- Sidebar -->
    <aside
      class="fixed md:relative inset-y-0 left-0 z-30 w-52 shrink-0 bg-dark-900 border-r border-dark-700 flex flex-col transition-transform duration-300"
      :class="menuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
    >
      <div class="px-4 py-5 border-b border-dark-700 flex items-center justify-between">
        <div>
          <p class="text-xs font-mono text-accent tracking-widest uppercase">Portfolio CMS</p>
          <p class="text-xs text-gray-500 mt-0.5">Painel admin</p>
        </div>
        <button class="md:hidden text-gray-500 hover:text-white" @click="menuOpen = false">✕</button>
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
          @click="active = tab.id; menuOpen = false"
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
    <div class="flex-1 flex flex-col overflow-hidden min-w-0">

      <!-- Topbar -->
      <header class="flex items-center justify-between px-4 md:px-6 py-4 border-b border-dark-700 bg-dark-900 gap-3">
        <div class="flex items-center gap-3 min-w-0">
          <!-- Hamburguer -->
          <button
            class="md:hidden flex flex-col gap-1.5 p-1 shrink-0"
            @click="menuOpen = true"
          >
            <span class="w-5 h-0.5 bg-gray-400 block" />
            <span class="w-5 h-0.5 bg-gray-400 block" />
            <span class="w-5 h-0.5 bg-gray-400 block" />
          </button>
          <div class="min-w-0">
            <h1 class="font-display font-semibold text-sm md:text-base truncate">{{ currentTab.label }}</h1>
            <p class="text-xs text-gray-500 mt-0.5 hidden sm:block">{{ currentTab.sub }}</p>
          </div>
        </div>
        <button
          class="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-40 shrink-0"
          style="background: linear-gradient(135deg, #7c6aff, #5a4bcc);"
          :disabled="saving"
          @click="save"
        >
          {{ saving ? 'Salvando...' : '💾 Salvar' }}
        </button>
      </header>

      <!-- Content -->
      <main class="flex-1 overflow-y-auto p-4 md:p-6">
        <Transition name="toast">
          <div v-if="toast" class="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-green-300 border border-green-500/30 bg-dark-800">
            ✓ Salvo com sucesso!
          </div>
        </Transition>

        <AdminPanelHero       v-if="active === 'hero'"       :hero="hero"                :about="about" />
        <AdminPanelAbout      v-if="active === 'about'"      :about="about"              :uploading="uploading" @upload="uploadPhoto" />
        <AdminPanelProjects   v-if="active === 'projects'"   :projects="projects"        @add="addProject" @remove="removeProject" @change-emoji="changeEmoji" />
        <AdminPanelSkills     v-if="active === 'skills'"     :skill-groups="skillGroups" :skill-tags="skillTags" @add-group="addSkillGroup" @remove-group="removeSkillGroup" />
        <AdminPanelExperience v-if="active === 'experience'" :experiences="experiences"  @add="addExperience" @remove="removeExperience" />
        <AdminPanelContact    v-if="active === 'contact'"    :contact="contact" />
        <AdminPanelSettings   v-if="active === 'settings'"   :pw-msg="pwMsg"             @change-password="handleChangePassword" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth', layout: false })

const supabase = useSupabaseClient()
const {
  fetchHero, fetchAbout, fetchProjects,
  fetchSkillGroups, fetchSkillTags, fetchExperiences, fetchContact,
  updateHero, updateAbout, updateContact,
  upsertProject, deleteProject,
  upsertSkillGroup, deleteSkillGroup,
  upsertSkill,
  upsertSkillTag,
  upsertExperience, deleteExperience,
} = usePortfolioData()

const active = ref('hero')
const saving = ref(false)
const uploading = ref(false)
const toast = ref(false)
const menuOpen = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)
const newPassword = ref('')
const confirmPassword = ref('')
const pwMsg = ref<{ ok: boolean; text: string } | null>(null)

const hero = ref<Record<string, any>>({})
const about = ref<Record<string, any>>({})
const projects = ref<any[]>([])
const skillGroups = ref<any[]>([])
const skillTags = ref<any[]>([])
const experiences = ref<any[]>([])
const contact = ref<Record<string, any>>({})

interface Tab {
  id: string
  icon: string
  label: string
  sub: string
}

const tabs: Tab[] = [
  { id: 'hero',       icon: '🏠', label: 'Hero',        sub: 'Editar seção inicial' },
  { id: 'about',      icon: '👤', label: 'Sobre mim',   sub: 'Foto, bio e estatísticas' },
  { id: 'projects',   icon: '🗂', label: 'Projetos',    sub: 'Gerenciar portfólio' },
  { id: 'skills',     icon: '⚡', label: 'Skills',      sub: 'Tecnologias e ferramentas' },
  { id: 'experience', icon: '💼', label: 'Experiência', sub: 'Trajetória profissional' },
  { id: 'contact',    icon: '✉️', label: 'Contato',     sub: 'Email e redes sociais' },
  { id: 'settings',   icon: '⚙️', label: 'Config',      sub: 'Conta e segurança' },
]

const currentTab = computed(() => (tabs.find(t => t.id === active.value) ?? tabs[0]) as Tab)

const inputClass = {
  class: 'w-full bg-dark-800 border border-dark-600 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/60 transition-colors font-body'
}

const aboutStats = [
  { key: 'stat_experience', label: 'anos de experiência' },
  { key: 'stat_projects',   label: 'projetos entregues' },
  { key: 'stat_clients',    label: 'clientes satisfeitos' },
  { key: 'stat_coffee',     label: 'café consumido' },
]

onMounted(async () => {
  const [h, a, p, sg, st, ex, ct] = await Promise.all([
    fetchHero(), fetchAbout(), fetchProjects(),
    fetchSkillGroups(), fetchSkillTags(),
    fetchExperiences(), fetchContact()
  ])
  hero.value = h || {}
  about.value = a || {}
  projects.value = (p || []).map((proj: any) => ({ ...proj, tagsInput: (proj.tags || []).join(', ') }))
  skillGroups.value = sg || []
  skillTags.value = st || []
  experiences.value = (ex || []).map((e: any) => ({ ...e, tagsInput: (e.tags || []).join(', ') }))
  contact.value = ct || {}
})

async function save() {
  saving.value = true
  if (active.value === 'hero') {
    await updateHero(hero.value)
    await updateAbout({ intro_title: about.value.intro_title, intro_subtitle: about.value.intro_subtitle })
  }
  if (active.value === 'about')      await updateAbout(about.value)
  if (active.value === 'contact')    await updateContact(contact.value)
    if (active.value === 'projects') {
    for (const proj of projects.value) {
        const { tagsInput, ...rest } = proj
        await upsertProject({
        id: rest.id,
        name: rest.name,
        description: rest.description || null,
        emoji: rest.emoji || '🚀',
        tags: tagsInput?.split(',').map((t: string) => t.trim()).filter(Boolean) || [],
        demo_url: rest.demo_url || null,
        github_url: rest.github_url || null,
        visible: rest.visible ?? true,
        order_index: rest.order_index ?? 0,
        })
    }
    }
  if (active.value === 'skills') {
    for (const tag of skillTags.value) await upsertSkillTag(tag)
    for (const group of skillGroups.value) {
      await upsertSkillGroup({ id: group.id, name: group.name, emoji: group.emoji, order_index: group.order_index })
      for (const skill of group.skills || []) await upsertSkill(skill)
    }
  }
  if (active.value === 'experience') {
    for (const exp of experiences.value) {
      await upsertExperience({ ...exp, tags: exp.tagsInput?.split(',').map((t: string) => t.trim()).filter(Boolean) || [] })
    }
  }
  saving.value = false
  showToast()
}

function showToast() {
  toast.value = true
  setTimeout(() => toast.value = false, 2500)
}

async function uploadPhoto(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return
  uploading.value = true
  const ext = file.name.split('.').pop()
  const path = `profile/photo.${ext}`

  const { data, error } = await supabase.storage
    .from('portfolio')
    .upload(path, file, { upsert: true })

  if (error) {
    uploading.value = false
    return
  }

  const { data: urlData } = supabase.storage
    .from('portfolio')
    .getPublicUrl(path)

  about.value.photo_url = urlData.publicUrl
  await updateAbout({ photo_url: urlData.publicUrl })
  uploading.value = false
}

function addProject() {
  projects.value.push({
    name: '',
    description: '',
    emoji: '🚀',
    tags: [],
    tagsInput: '',
    demo_url: '',
    github_url: '',
    visible: true,
    order_index: projects.value.length
  })
}

function removeProject(i: number) {
  const proj = projects.value[i]
  if (proj.id) deleteProject(proj.id)
  projects.value.splice(i, 1)
}

const emojis = ['🚀', '📊', '⛅', '🛒', '🎮', '📱', '🌐', '🔧', '✨', '🎨']
function changeEmoji(i: number) {
  const current = emojis.indexOf(projects.value[i].emoji)
  projects.value[i].emoji = emojis[(current + 1) % emojis.length]
}

async function handleChangePassword(newPw: string, confirmPw: string) {
  if (newPw !== confirmPw) {
    pwMsg.value = { ok: false, text: 'As senhas não coincidem.' }
    return
  }
  const { error } = await supabase.auth.updateUser({ password: newPw })
  pwMsg.value = error
    ? { ok: false, text: 'Erro ao atualizar a senha.' }
    : { ok: true, text: 'Senha atualizada com sucesso!' }
}

async function logout() {
  await supabase.auth.signOut()
  navigateTo('/admin/login')
}

function addSkillGroup() {
  skillGroups.value.push({ name: 'Novo grupo', emoji: '🔧', order_index: skillGroups.value.length, skills: [] })
}

function removeSkillGroup(i: number) {
  const group = skillGroups.value[i]
  if (group.id) deleteSkillGroup(group.id)
  skillGroups.value.splice(i, 1)
}

function addExperience() {
  experiences.value.push({ role: '', company: '', period: '', description: '', tags: [], tagsInput: '', order_index: experiences.value.length })
}

function removeExperience(i: number) {
  const exp = experiences.value[i]
  if (exp.id) deleteExperience(exp.id)
  experiences.value.splice(i, 1)
}
</script>

<style scoped>
.toast-enter-active, .toast-leave-active { transition: all 0.3s ease; }
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(10px); }
</style>