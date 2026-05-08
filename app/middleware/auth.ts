export default defineNuxtRouteMiddleware(async () => {
  const { data } = await useSupabaseClient().auth.getSession()
  if (!data.session) return navigateTo('/admin/login')
})