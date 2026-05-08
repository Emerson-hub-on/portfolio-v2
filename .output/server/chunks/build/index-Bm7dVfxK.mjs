import { ref, computed, mergeProps, unref, withCtx, withDirectives, createVNode, vModelDynamic, vModelText, openBlock, createBlock, toDisplayString, Fragment, renderList, isRef, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderComponent, ssrGetDynamicModelProps, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { u as useSupabaseClient } from './useSupabaseClient-H06rCZGb.mjs';
import { u as usePortfolioData } from './usePortfolioData-Fz0hWP0S.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import '@supabase/ssr';

const _sfc_main$2 = {
  __name: "AdminSection",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-dark-900 border border-dark-700 rounded-xl p-5" }, _attrs))}><p class="text-[11px] font-mono text-accent tracking-widest uppercase mb-4">${ssrInterpolate(__props.title)}</p><div class="flex flex-col gap-3">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AdminField",
  __ssrInlineRender: true,
  props: ["label"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><label class="text-xs text-gray-500 mb-1.5 block">${ssrInterpolate(__props.label)}</label>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AdminField.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const supabase = useSupabaseClient();
    const { deleteProject } = usePortfolioData();
    const active = ref("hero");
    const saving = ref(false);
    const uploading = ref(false);
    const toast = ref(false);
    const fileInput = ref(null);
    const newPassword = ref("");
    const confirmPassword = ref("");
    const pwMsg = ref(null);
    const hero = ref({});
    const about = ref({});
    const projects = ref([]);
    const tabs = [
      { id: "hero", icon: "🏠", label: "Hero", sub: "Editar seção inicial" },
      { id: "about", icon: "👤", label: "Sobre mim", sub: "Foto, bio e estatísticas" },
      { id: "projects", icon: "🗂", label: "Projetos", sub: "Gerenciar portfólio" },
      { id: "settings", icon: "⚙️", label: "Config", sub: "Conta e segurança" }
    ];
    const currentTab = computed(() => tabs.find((t) => t.id === active.value));
    const inputClass = {
      class: "w-full bg-dark-800 border border-dark-600 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-accent/60 transition-colors font-body"
    };
    const aboutStats = [
      { key: "stat_experience", label: "anos de experiência" },
      { key: "stat_projects", label: "projetos entregues" },
      { key: "stat_clients", label: "clientes satisfeitos" },
      { key: "stat_coffee", label: "café consumido" }
    ];
    async function uploadPhoto(event) {
      const file = event.target.files[0];
      if (!file) return;
      uploading.value = true;
      const ext = file.name.split(".").pop();
      const path = `profile/photo.${ext}`;
      const { data } = await supabase.storage.from("portfolio").upload(path, file, { upsert: true });
      if (data) {
        const { data: urlData } = supabase.storage.from("portfolio").getPublicUrl(path);
        about.value.photo_url = urlData.publicUrl;
      }
      uploading.value = false;
    }
    function addProject() {
      projects.value.push({ name: "", description: "", emoji: "🚀", tags: [], tagsInput: "", visible: true, order_index: projects.value.length });
    }
    function removeProject(i) {
      const proj = projects.value[i];
      if (proj.id) deleteProject(proj.id);
      projects.value.splice(i, 1);
    }
    const emojis = ["🚀", "📊", "⛅", "🛒", "🎮", "📱", "🌐", "🔧", "✨", "🎨"];
    function changeEmoji(i) {
      const current = emojis.indexOf(projects.value[i].emoji);
      projects.value[i].emoji = emojis[(current + 1) % emojis.length];
    }
    async function changePassword() {
      if (newPassword.value !== confirmPassword.value) {
        pwMsg.value = { ok: false, text: "As senhas não coincidem." };
        return;
      }
      const { error } = await supabase.auth.updateUser({ password: newPassword.value });
      pwMsg.value = error ? { ok: false, text: "Erro ao atualizar a senha." } : { ok: true, text: "Senha atualizada com sucesso!" };
      newPassword.value = "";
      confirmPassword.value = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AdminSection = _sfc_main$2;
      const _component_AdminField = _sfc_main$1;
      let _temp0, _temp1, _temp2, _temp3, _temp4, _temp5, _temp6, _temp7, _temp8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-dark-950 text-white flex" }, _attrs))} data-v-c4744d41><aside class="w-52 shrink-0 bg-dark-900 border-r border-dark-700 flex flex-col" data-v-c4744d41><div class="px-4 py-5 border-b border-dark-700" data-v-c4744d41><p class="text-xs font-mono text-accent tracking-widest uppercase" data-v-c4744d41>Portfolio CMS</p><p class="text-xs text-gray-500 mt-0.5" data-v-c4744d41>Painel admin</p></div><nav class="p-2 flex-1 flex flex-col gap-0.5" data-v-c4744d41><p class="text-[10px] text-gray-600 uppercase tracking-widest px-2 py-2" data-v-c4744d41>Seções</p><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass([unref(active) === tab.id ? "bg-accent/10 text-accent border-l-2 border-accent pl-[10px]" : "text-gray-400 hover:text-white hover:bg-dark-800", "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all text-left w-full"])}" data-v-c4744d41><span data-v-c4744d41>${ssrInterpolate(tab.icon)}</span> ${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></nav><div class="p-2" data-v-c4744d41><button class="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-red-400 border border-red-500/20 hover:bg-red-500/10 transition-all" data-v-c4744d41><span data-v-c4744d41>↩</span> Sair </button></div></aside><div class="flex-1 flex flex-col overflow-hidden" data-v-c4744d41><header class="flex items-center justify-between px-6 py-4 border-b border-dark-700 bg-dark-900" data-v-c4744d41><div data-v-c4744d41><h1 class="font-display font-semibold text-base" data-v-c4744d41>${ssrInterpolate(unref(currentTab).label)}</h1><p class="text-xs text-gray-500 mt-0.5" data-v-c4744d41>${ssrInterpolate(unref(currentTab).sub)}</p></div><button class="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-40" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c6aff, #5a4bcc)" })}"${ssrIncludeBooleanAttr(unref(saving)) ? " disabled" : ""} data-v-c4744d41>${ssrInterpolate(unref(saving) ? "Salvando..." : "💾 Salvar")}</button></header><main class="flex-1 overflow-y-auto p-6" data-v-c4744d41>`);
      if (unref(toast)) {
        _push(`<div class="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-green-300 border border-green-500/30 bg-dark-800" data-v-c4744d41> ✓ Salvo com sucesso! </div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(active) === "hero") {
        _push(`<div class="flex flex-col gap-5 max-w-2xl" data-v-c4744d41>`);
        _push(ssrRenderComponent(_component_AdminSection, { title: "Textos principais" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_AdminField, { label: "Tag de boas-vindas" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<input${ssrRenderAttrs((_temp0 = inputClass, mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(hero).welcome_tag))))} data-v-c4744d41${_scopeId2}>`);
                  } else {
                    return [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(hero).welcome_tag = $event
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelDynamic, unref(hero).welcome_tag]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_AdminField, { label: "Título destaque" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<input${ssrRenderAttrs((_temp1 = inputClass, mergeProps(_temp1, ssrGetDynamicModelProps(_temp1, unref(hero).title_highlight))))} data-v-c4744d41${_scopeId2}>`);
                  } else {
                    return [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(hero).title_highlight = $event
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelDynamic, unref(hero).title_highlight]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_AdminField, { label: "Complemento do título" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<input${ssrRenderAttrs((_temp2 = inputClass, mergeProps(_temp2, ssrGetDynamicModelProps(_temp2, unref(hero).title_complement))))} data-v-c4744d41${_scopeId2}>`);
                  } else {
                    return [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(hero).title_complement = $event
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelDynamic, unref(hero).title_complement]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_AdminField, { label: "Descrição" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<textarea${ssrRenderAttrs(mergeProps(inputClass, {
                      rows: "3",
                      class: "resize-none"
                    }), "textarea")} data-v-c4744d41${_scopeId2}>${ssrInterpolate(unref(hero).description)}</textarea>`);
                  } else {
                    return [
                      withDirectives(createVNode("textarea", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(hero).description = $event
                      }, inputClass, {
                        rows: "3",
                        class: "resize-none"
                      }), null, 16, ["onUpdate:modelValue"]), [
                        [vModelText, unref(hero).description]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_AdminField, { label: "Tag de boas-vindas" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("input", mergeProps({
                      "onUpdate:modelValue": ($event) => unref(hero).welcome_tag = $event
                    }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                      [vModelDynamic, unref(hero).welcome_tag]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_AdminField, { label: "Título destaque" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("input", mergeProps({
                      "onUpdate:modelValue": ($event) => unref(hero).title_highlight = $event
                    }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                      [vModelDynamic, unref(hero).title_highlight]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_AdminField, { label: "Complemento do título" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("input", mergeProps({
                      "onUpdate:modelValue": ($event) => unref(hero).title_complement = $event
                    }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                      [vModelDynamic, unref(hero).title_complement]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_AdminField, { label: "Descrição" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("textarea", mergeProps({
                      "onUpdate:modelValue": ($event) => unref(hero).description = $event
                    }, inputClass, {
                      rows: "3",
                      class: "resize-none"
                    }), null, 16, ["onUpdate:modelValue"]), [
                      [vModelText, unref(hero).description]
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_AdminSection, { title: "Botões de ação" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid grid-cols-2 gap-3" data-v-c4744d41${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AdminField, { label: "Botão primário" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<input${ssrRenderAttrs((_temp3 = inputClass, mergeProps(_temp3, ssrGetDynamicModelProps(_temp3, unref(hero).btn_primary))))} data-v-c4744d41${_scopeId2}>`);
                  } else {
                    return [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(hero).btn_primary = $event
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelDynamic, unref(hero).btn_primary]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_AdminField, { label: "Botão secundário" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<input${ssrRenderAttrs((_temp4 = inputClass, mergeProps(_temp4, ssrGetDynamicModelProps(_temp4, unref(hero).btn_secondary))))} data-v-c4744d41${_scopeId2}>`);
                  } else {
                    return [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(hero).btn_secondary = $event
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelDynamic, unref(hero).btn_secondary]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode(_component_AdminField, { label: "Botão primário" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(hero).btn_primary = $event
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelDynamic, unref(hero).btn_primary]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_AdminField, { label: "Botão secundário" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(hero).btn_secondary = $event
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelDynamic, unref(hero).btn_secondary]
                      ])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_AdminSection, { title: "Estatísticas" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid grid-cols-2 gap-3" data-v-c4744d41${_scopeId}><div class="bg-dark-800 rounded-lg p-3 flex items-center gap-3 border border-dark-600" data-v-c4744d41${_scopeId}><input${ssrRenderAttr("value", unref(hero).stat_experience)} class="bg-transparent text-accent font-bold text-xl w-14 outline-none" data-v-c4744d41${_scopeId}><span class="text-xs text-gray-500 font-mono" data-v-c4744d41${_scopeId}>anos de experiência</span></div><div class="bg-dark-800 rounded-lg p-3 flex items-center gap-3 border border-dark-600" data-v-c4744d41${_scopeId}><input${ssrRenderAttr("value", unref(hero).stat_projects)} class="bg-transparent text-accent font-bold text-xl w-14 outline-none" data-v-c4744d41${_scopeId}><span class="text-xs text-gray-500 font-mono" data-v-c4744d41${_scopeId}>projetos entregues</span></div></div>`);
            } else {
              return [
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode("div", { class: "bg-dark-800 rounded-lg p-3 flex items-center gap-3 border border-dark-600" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(hero).stat_experience = $event,
                      class: "bg-transparent text-accent font-bold text-xl w-14 outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(hero).stat_experience]
                    ]),
                    createVNode("span", { class: "text-xs text-gray-500 font-mono" }, "anos de experiência")
                  ]),
                  createVNode("div", { class: "bg-dark-800 rounded-lg p-3 flex items-center gap-3 border border-dark-600" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(hero).stat_projects = $event,
                      class: "bg-transparent text-accent font-bold text-xl w-14 outline-none"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(hero).stat_projects]
                    ]),
                    createVNode("span", { class: "text-xs text-gray-500 font-mono" }, "projetos entregues")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(active) === "about") {
        _push(`<div class="flex flex-col gap-5 max-w-2xl" data-v-c4744d41>`);
        _push(ssrRenderComponent(_component_AdminSection, { title: "Foto de perfil" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-4" data-v-c4744d41${_scopeId}><div class="w-16 h-16 rounded-xl bg-dark-800 border border-dashed border-dark-600 flex items-center justify-content overflow-hidden" data-v-c4744d41${_scopeId}>`);
              if (unref(about).photo_url) {
                _push2(`<img${ssrRenderAttr("src", unref(about).photo_url)} class="w-full h-full object-cover" data-v-c4744d41${_scopeId}>`);
              } else {
                _push2(`<span class="text-2xl m-auto" data-v-c4744d41${_scopeId}>👤</span>`);
              }
              _push2(`</div><div data-v-c4744d41${_scopeId}><input type="file" accept="image/*" class="hidden" data-v-c4744d41${_scopeId}><button class="px-3 py-1.5 text-xs border border-accent/40 text-accent rounded-lg hover:bg-accent/10 transition-all" data-v-c4744d41${_scopeId}>${ssrInterpolate(unref(uploading) ? "Enviando..." : "↑ Escolher foto")}</button><p class="text-xs text-gray-600 mt-1.5" data-v-c4744d41${_scopeId}>JPG, PNG ou WebP</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-4" }, [
                  createVNode("div", { class: "w-16 h-16 rounded-xl bg-dark-800 border border-dashed border-dark-600 flex items-center justify-content overflow-hidden" }, [
                    unref(about).photo_url ? (openBlock(), createBlock("img", {
                      key: 0,
                      src: unref(about).photo_url,
                      class: "w-full h-full object-cover"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-2xl m-auto"
                    }, "👤"))
                  ]),
                  createVNode("div", null, [
                    createVNode("input", {
                      type: "file",
                      ref_key: "fileInput",
                      ref: fileInput,
                      accept: "image/*",
                      class: "hidden",
                      onChange: uploadPhoto
                    }, null, 544),
                    createVNode("button", {
                      class: "px-3 py-1.5 text-xs border border-accent/40 text-accent rounded-lg hover:bg-accent/10 transition-all",
                      onClick: ($event) => unref(fileInput)?.click()
                    }, toDisplayString(unref(uploading) ? "Enviando..." : "↑ Escolher foto"), 9, ["onClick"]),
                    createVNode("p", { class: "text-xs text-gray-600 mt-1.5" }, "JPG, PNG ou WebP")
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_AdminSection, { title: "Textos" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid grid-cols-2 gap-3" data-v-c4744d41${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AdminField, { label: "Título linha 1" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<input${ssrRenderAttrs((_temp5 = inputClass, mergeProps(_temp5, ssrGetDynamicModelProps(_temp5, unref(about).title_line1))))} data-v-c4744d41${_scopeId2}>`);
                  } else {
                    return [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(about).title_line1 = $event
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelDynamic, unref(about).title_line1]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_AdminField, { label: "Título linha 2 (destaque)" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<input${ssrRenderAttrs((_temp6 = inputClass, mergeProps(_temp6, ssrGetDynamicModelProps(_temp6, unref(about).title_line2))))} data-v-c4744d41${_scopeId2}>`);
                  } else {
                    return [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(about).title_line2 = $event
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelDynamic, unref(about).title_line2]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_AdminField, { label: "Parágrafo 1" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<textarea${ssrRenderAttrs(mergeProps(inputClass, {
                      rows: "3",
                      class: "resize-none"
                    }), "textarea")} data-v-c4744d41${_scopeId2}>${ssrInterpolate(unref(about).paragraph1)}</textarea>`);
                  } else {
                    return [
                      withDirectives(createVNode("textarea", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(about).paragraph1 = $event
                      }, inputClass, {
                        rows: "3",
                        class: "resize-none"
                      }), null, 16, ["onUpdate:modelValue"]), [
                        [vModelText, unref(about).paragraph1]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_AdminField, { label: "Parágrafo 2" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<textarea${ssrRenderAttrs(mergeProps(inputClass, {
                      rows: "3",
                      class: "resize-none"
                    }), "textarea")} data-v-c4744d41${_scopeId2}>${ssrInterpolate(unref(about).paragraph2)}</textarea>`);
                  } else {
                    return [
                      withDirectives(createVNode("textarea", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(about).paragraph2 = $event
                      }, inputClass, {
                        rows: "3",
                        class: "resize-none"
                      }), null, 16, ["onUpdate:modelValue"]), [
                        [vModelText, unref(about).paragraph2]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  createVNode(_component_AdminField, { label: "Título linha 1" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(about).title_line1 = $event
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelDynamic, unref(about).title_line1]
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_AdminField, { label: "Título linha 2 (destaque)" }, {
                    default: withCtx(() => [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => unref(about).title_line2 = $event
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelDynamic, unref(about).title_line2]
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_AdminField, { label: "Parágrafo 1" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("textarea", mergeProps({
                      "onUpdate:modelValue": ($event) => unref(about).paragraph1 = $event
                    }, inputClass, {
                      rows: "3",
                      class: "resize-none"
                    }), null, 16, ["onUpdate:modelValue"]), [
                      [vModelText, unref(about).paragraph1]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_AdminField, { label: "Parágrafo 2" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("textarea", mergeProps({
                      "onUpdate:modelValue": ($event) => unref(about).paragraph2 = $event
                    }, inputClass, {
                      rows: "3",
                      class: "resize-none"
                    }), null, 16, ["onUpdate:modelValue"]), [
                      [vModelText, unref(about).paragraph2]
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_AdminSection, { title: "Números" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid grid-cols-2 gap-3" data-v-c4744d41${_scopeId}><!--[-->`);
              ssrRenderList(aboutStats, (stat) => {
                _push2(`<div class="bg-dark-800 border border-dark-600 rounded-lg p-3 flex items-center gap-3" data-v-c4744d41${_scopeId}><input${ssrRenderAttr("value", unref(about)[stat.key])} class="bg-transparent text-accent font-bold text-lg w-12 outline-none" data-v-c4744d41${_scopeId}><span class="text-xs text-gray-500 font-mono" data-v-c4744d41${_scopeId}>${ssrInterpolate(stat.label)}</span></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(aboutStats, (stat) => {
                    return createVNode("div", {
                      key: stat.key,
                      class: "bg-dark-800 border border-dark-600 rounded-lg p-3 flex items-center gap-3"
                    }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => unref(about)[stat.key] = $event,
                        class: "bg-transparent text-accent font-bold text-lg w-12 outline-none"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(about)[stat.key]]
                      ]),
                      createVNode("span", { class: "text-xs text-gray-500 font-mono" }, toDisplayString(stat.label), 1)
                    ]);
                  }), 64))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(active) === "projects") {
        _push(`<div class="flex flex-col gap-5 max-w-2xl" data-v-c4744d41>`);
        _push(ssrRenderComponent(_component_AdminSection, { title: "Projetos" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col gap-2" data-v-c4744d41${_scopeId}><!--[-->`);
              ssrRenderList(unref(projects), (proj, i) => {
                _push2(`<div class="flex items-center gap-3 bg-dark-800 border border-dark-700 rounded-lg px-3 py-2.5" data-v-c4744d41${_scopeId}><span class="text-xl cursor-pointer" data-v-c4744d41${_scopeId}>${ssrInterpolate(proj.emoji)}</span><div class="flex-1 min-w-0" data-v-c4744d41${_scopeId}><input${ssrRenderAttr("value", proj.name)} placeholder="Nome do projeto" class="bg-transparent text-sm text-white w-full outline-none font-medium" data-v-c4744d41${_scopeId}><input${ssrRenderAttr("value", proj.tagsInput)} placeholder="tags separadas por vírgula" class="bg-transparent text-xs text-gray-500 w-full outline-none mt-0.5" data-v-c4744d41${_scopeId}></div><button class="text-red-400/60 hover:text-red-400 text-sm transition-colors px-1" data-v-c4744d41${_scopeId}>✕</button></div>`);
              });
              _push2(`<!--]--></div><button class="mt-2 w-full py-2 border border-dashed border-dark-600 rounded-lg text-xs text-gray-500 hover:text-accent hover:border-accent/40 transition-all" data-v-c4744d41${_scopeId}> + Adicionar projeto </button>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(projects), (proj, i) => {
                    return openBlock(), createBlock("div", {
                      key: proj.id || i,
                      class: "flex items-center gap-3 bg-dark-800 border border-dark-700 rounded-lg px-3 py-2.5"
                    }, [
                      createVNode("span", {
                        class: "text-xl cursor-pointer",
                        onClick: ($event) => changeEmoji(i)
                      }, toDisplayString(proj.emoji), 9, ["onClick"]),
                      createVNode("div", { class: "flex-1 min-w-0" }, [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => proj.name = $event,
                          placeholder: "Nome do projeto",
                          class: "bg-transparent text-sm text-white w-full outline-none font-medium"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, proj.name]
                        ]),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => proj.tagsInput = $event,
                          placeholder: "tags separadas por vírgula",
                          class: "bg-transparent text-xs text-gray-500 w-full outline-none mt-0.5"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, proj.tagsInput]
                        ])
                      ]),
                      createVNode("button", {
                        class: "text-red-400/60 hover:text-red-400 text-sm transition-colors px-1",
                        onClick: ($event) => removeProject(i)
                      }, "✕", 8, ["onClick"])
                    ]);
                  }), 128))
                ]),
                createVNode("button", {
                  class: "mt-2 w-full py-2 border border-dashed border-dark-600 rounded-lg text-xs text-gray-500 hover:text-accent hover:border-accent/40 transition-all",
                  onClick: addProject
                }, " + Adicionar projeto ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(active) === "settings") {
        _push(`<div class="flex flex-col gap-5 max-w-md" data-v-c4744d41>`);
        _push(ssrRenderComponent(_component_AdminSection, { title: "Alterar senha" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_AdminField, { label: "Nova senha" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<input${ssrRenderAttrs((_temp7 = mergeProps({
                      value: unref(newPassword),
                      type: "password",
                      placeholder: "••••••••"
                    }, inputClass), mergeProps(_temp7, ssrGetDynamicModelProps(_temp7, unref(newPassword)))))} data-v-c4744d41${_scopeId2}>`);
                  } else {
                    return [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                        type: "password",
                        placeholder: "••••••••"
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelText, unref(newPassword)]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_AdminField, { label: "Confirmar nova senha" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<input${ssrRenderAttrs((_temp8 = mergeProps({
                      value: unref(confirmPassword),
                      type: "password",
                      placeholder: "••••••••"
                    }, inputClass), mergeProps(_temp8, ssrGetDynamicModelProps(_temp8, unref(confirmPassword)))))} data-v-c4744d41${_scopeId2}>`);
                  } else {
                    return [
                      withDirectives(createVNode("input", mergeProps({
                        "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                        type: "password",
                        placeholder: "••••••••"
                      }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                        [vModelText, unref(confirmPassword)]
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<button class="mt-1 px-4 py-2 text-sm rounded-lg font-medium text-white transition-opacity hover:opacity-80" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c6aff, #5a4bcc)" })}" data-v-c4744d41${_scopeId}> Atualizar senha </button>`);
              if (unref(pwMsg)) {
                _push2(`<p class="${ssrRenderClass([unref(pwMsg).ok ? "text-green-400" : "text-red-400", "text-xs mt-2"])}" data-v-c4744d41${_scopeId}>${ssrInterpolate(unref(pwMsg).text)}</p>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(_component_AdminField, { label: "Nova senha" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("input", mergeProps({
                      "onUpdate:modelValue": ($event) => isRef(newPassword) ? newPassword.value = $event : null,
                      type: "password",
                      placeholder: "••••••••"
                    }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                      [vModelText, unref(newPassword)]
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_AdminField, { label: "Confirmar nova senha" }, {
                  default: withCtx(() => [
                    withDirectives(createVNode("input", mergeProps({
                      "onUpdate:modelValue": ($event) => isRef(confirmPassword) ? confirmPassword.value = $event : null,
                      type: "password",
                      placeholder: "••••••••"
                    }, inputClass), null, 16, ["onUpdate:modelValue"]), [
                      [vModelText, unref(confirmPassword)]
                    ])
                  ]),
                  _: 1
                }),
                createVNode("button", {
                  class: "mt-1 px-4 py-2 text-sm rounded-lg font-medium text-white transition-opacity hover:opacity-80",
                  style: { "background": "linear-gradient(135deg, #7c6aff, #5a4bcc)" },
                  onClick: changePassword
                }, " Atualizar senha "),
                unref(pwMsg) ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: ["text-xs mt-2", unref(pwMsg).ok ? "text-green-400" : "text-red-400"]
                }, toDisplayString(unref(pwMsg).text), 3)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4744d41"]]);

export { index as default };
//# sourceMappingURL=index-Bm7dVfxK.mjs.map
