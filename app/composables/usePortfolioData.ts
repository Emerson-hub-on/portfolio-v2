import type { Database } from '../../types/supabase'

export const usePortfolioData = () => {
  const supabase = useSupabaseClient<Database>()

  // ── Hero ──
  const fetchHero = async () => {
    const { data } = await supabase.from('hero').select('*').single()
    return data
  }

  const updateHero = async (payload: Database['public']['Tables']['hero']['Update']) => {
    const { data: current } = await supabase.from('hero').select('id').single()
    if (!current?.id) return
    const { data } = await supabase.from('hero').update(payload).eq('id', current.id)
    return data
  }

  // ── About ──
  const fetchAbout = async () => {
    const { data } = await supabase.from('about').select('*').single()
    return data
  }

  const updateAbout = async (payload: Database['public']['Tables']['about']['Update']) => {
    const { data: current } = await supabase.from('about').select('id').single()
    if (!current?.id) return
    const { data } = await supabase.from('about').update(payload).eq('id', current.id)
    return data
  }

  // ── Projects ──
  const fetchProjects = async () => {
    const { data } = await supabase
      .from('projects')
      .select('*')
      .eq('visible', true)
      .order('order_index')
    return data
  }

  const upsertProject = async (project: Database['public']['Tables']['projects']['Insert']) => {
    const { data } = await supabase.from('projects').upsert(project)
    return data
  }

  const deleteProject = async (id: string) => {
    await supabase.from('projects').delete().eq('id', id)
  }

  // ── Skills ──
  const fetchSkillGroups = async () => {
    const { data } = await supabase
      .from('skill_groups')
      .select('*, skills(*)')
      .order('order_index')
    return data
  }

  const upsertSkillGroup = async (group: Database['public']['Tables']['skill_groups']['Insert']) => {
    const { data } = await supabase.from('skill_groups').upsert(group)
    return data
  }

  const deleteSkillGroup = async (id: string) => {
    await supabase.from('skill_groups').delete().eq('id', id)
  }

  const upsertSkill = async (skill: Database['public']['Tables']['skills']['Insert']) => {
    const { data } = await supabase.from('skills').upsert(skill)
    return data
  }

  const deleteSkill = async (id: string) => {
    await supabase.from('skills').delete().eq('id', id)
  }

  const fetchSkillTags = async () => {
    const { data } = await supabase.from('skill_tags').select('*').order('order_index')
    return data
  }

  const upsertSkillTag = async (tag: Database['public']['Tables']['skill_tags']['Insert']) => {
    const { data } = await supabase.from('skill_tags').upsert(tag)
    return data
  }

  const deleteSkillTag = async (id: string) => {
    await supabase.from('skill_tags').delete().eq('id', id)
  }

  // ── Experiences ──
  const fetchExperiences = async () => {
    const { data } = await supabase
      .from('experiences')
      .select('*')
      .order('order_index')
    return data
  }

  const upsertExperience = async (exp: Database['public']['Tables']['experiences']['Insert']) => {
    const { data } = await supabase.from('experiences').upsert(exp)
    return data
  }

  const deleteExperience = async (id: string) => {
    await supabase.from('experiences').delete().eq('id', id)
  }

  // ── Contact ──
  const fetchContact = async () => {
    const { data } = await supabase.from('contact').select('*').single()
    return data
  }

  const updateContact = async (payload: Database['public']['Tables']['contact']['Update']) => {
    const { data: current } = await supabase.from('contact').select('id').single()
    if (!current?.id) return
    const { data } = await supabase.from('contact').update(payload).eq('id', current.id)
    return data
  }

  return {
    fetchHero, updateHero,
    fetchAbout, updateAbout,
    fetchProjects, upsertProject, deleteProject,
    fetchSkillGroups, upsertSkillGroup, deleteSkillGroup,
    upsertSkill, deleteSkill,
    fetchSkillTags, upsertSkillTag, deleteSkillTag,
    fetchExperiences, upsertExperience, deleteExperience,
    fetchContact, updateContact,
  }
}