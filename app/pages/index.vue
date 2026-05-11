<template>
  <Transition name="intro">
    <div v-if="showIntro" class="intro-screen" :class="{ 'revealing': revealing }">
      <div class="intro-bg">
        <div class="grid-overlay" />
        <div class="blob blob-purple" />
        <div class="blob blob-cyan" />
      </div>

      <div class="intro-content" :class="{ 'fade-out': revealing }">
        <div class="avatar-wrapper">
          <div class="avatar-ring" />
          <div class="avatar-ring ring-2" />
          <div class="avatar">
            <!-- Foto do banco se existir, senão SVG padrão -->
            <img
              v-if="about?.photo_url"
              :src="about.photo_url"
              class="w-full h-full object-cover"
            />
            <svg v-else viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="avatar-icon">
              <circle cx="40" cy="30" r="16" fill="#7c6aff" opacity="0.9"/>
              <ellipse cx="40" cy="68" rx="26" ry="16" fill="#7c6aff" opacity="0.6"/>
            </svg>
          </div>
          <div class="avatar-glow" />
        </div>

        <p class="intro-role">{{ about?.intro_title ?? 'Dev Frontend' }}</p>
        <p class="intro-sub">{{ about?.intro_subtitle ?? 'Vue · Nuxt · React' }}</p>

        <button class="btn-conhecer" @click="startReveal">
          <span class="btn-text">Conhecer</span>
          <span class="btn-arrow">↓</span>
        </button>
      </div>

      <div class="circle-expand" :class="{ 'active': revealing }" />
    </div>
  </Transition>

  <div v-if="!showIntro || revealing" class="portfolio-content" :class="{ 'visible': !showIntro }">
    <SectionsHero />
    <div class="glow-line opacity-20" />
    <SectionsSobre />
    <div class="glow-line opacity-20" />
    <SectionsProjetos />
    <div class="glow-line opacity-20" />
    <SectionsSkills />
    <div class="glow-line opacity-20" />
    <SectionsExperiencia />
    <div class="glow-line opacity-20" />
    <SectionsContato />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Dev Frontend | Portfolio',
  description: 'Portfolio de desenvolvimento frontend — Vue, Nuxt, React e muito mais.',
})

const { fetchAbout } = usePortfolioData()
const about = await fetchAbout()

const showIntro = ref(true)
const revealing = ref(false)

function startReveal() {
  revealing.value = true
  setTimeout(() => {
    showIntro.value = false
  }, 900)
}
</script>



<style scoped>
/* ── Intro Screen ── */
.intro-screen {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.intro-bg {
  position: absolute;
  inset: 0;
  background: #050508;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image:
    linear-gradient(#7c6aff 1px, transparent 1px),
    linear-gradient(90deg, #7c6aff 1px, transparent 1px);
  background-size: 60px 60px;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  animation: pulseGlow 3s ease-in-out infinite;
}

.blob-purple {
  top: 20%;
  left: 30%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #7c6aff 0%, transparent 70%);
  opacity: 0.12;
}

.blob-cyan {
  bottom: 20%;
  right: 25%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #00e5cc 0%, transparent 70%);
  opacity: 0.06;
}

/* ── Avatar ── */
.intro-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.intro-content.fade-out {
  opacity: 0;
  transform: scale(0.9);
}

.avatar-wrapper {
  position: relative;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a24, #111118);
  border: 2px solid #7c6aff40;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

.avatar-icon {
  width: 80px;
  height: 80px;
}

.avatar-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid #7c6aff30;
  animation: spinRing 8s linear infinite;
}

.ring-2 {
  inset: -12px;
  border-color: #00e5cc20;
  animation-duration: 12s;
  animation-direction: reverse;
}

.avatar-glow {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: radial-gradient(circle, #7c6aff20 0%, transparent 70%);
  animation: pulseGlow 3s ease-in-out infinite;
}

/* ── Text ── */
.intro-role {
  font-family: 'Syne', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: white;
  letter-spacing: -0.02em;
  margin: 0;
}

.intro-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #7c6aff;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: -0.5rem 0 0.5rem;
}

/* ── Button ── */
.btn-conhecer {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  border-radius: 999px;
  border: 1px solid #7c6aff60;
  background: transparent;
  color: white;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-conhecer::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #7c6aff20, #00e5cc10);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-conhecer:hover::before {
  opacity: 1;
}

.btn-conhecer:hover {
  border-color: #7c6aff;
  box-shadow: 0 0 20px #7c6aff30;
  transform: translateY(-2px);
}

.btn-arrow {
  display: inline-block;
  animation: bounce 1.5s ease-in-out infinite;
}

/* ── Circle Expand ── */
.circle-expand {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #050508;
  transform: scale(0);
  transition: transform 0.85s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  pointer-events: none;
}

.circle-expand.active {
  transform: scale(300);
}

/* ── Portfolio content ── */
.portfolio-content {
  opacity: 0;
  transition: opacity 0.3s ease 0.85s;
}

.portfolio-content.visible {
  opacity: 1;
}

/* ── Animations ── */
@keyframes pulseGlow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

@keyframes spinRing {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}

/* ── Intro transition ── */
.intro-enter-active,
.intro-leave-active {
  transition: opacity 0.3s ease;
}

.intro-enter-from,
.intro-leave-to {
  opacity: 0;
}

/* ── Glow line ── */
.glow-line {
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, transparent, #7c6aff, transparent);
}
</style>