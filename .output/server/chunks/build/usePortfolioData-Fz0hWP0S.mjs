import { u as useSupabaseClient } from './useSupabaseClient-H06rCZGb.mjs';

const usePortfolioData = () => {
  const supabase = useSupabaseClient();
  const fetchHero = async () => {
    const { data } = await supabase.from("hero").select("*").single();
    return data;
  };
  const fetchAbout = async () => {
    const { data } = await supabase.from("about").select("*").single();
    return data;
  };
  const fetchProjects = async () => {
    const { data } = await supabase.from("projects").select("*").eq("visible", true).order("order_index");
    return data;
  };
  const updateHero = async (payload) => {
    const { data: current } = await supabase.from("hero").select("id").single();
    if (!current?.id) return;
    const { data } = await supabase.from("hero").update(payload).eq("id", current.id);
    return data;
  };
  const updateAbout = async (payload) => {
    const { data: current } = await supabase.from("about").select("id").single();
    if (!current?.id) return;
    const { data } = await supabase.from("about").update(payload).eq("id", current.id);
    return data;
  };
  const upsertProject = async (project) => {
    const { data } = await supabase.from("projects").upsert(project);
    return data;
  };
  const deleteProject = async (id) => {
    await supabase.from("projects").delete().eq("id", id);
  };
  return { fetchHero, fetchAbout, fetchProjects, updateHero, updateAbout, upsertProject, deleteProject };
};

export { usePortfolioData as u };
//# sourceMappingURL=usePortfolioData-Fz0hWP0S.mjs.map
