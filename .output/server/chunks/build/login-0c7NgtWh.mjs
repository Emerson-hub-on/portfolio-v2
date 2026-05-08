import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle } from 'vue/server-renderer';
import { u as useSupabaseClient } from './useSupabaseClient-H06rCZGb.mjs';
import './server.mjs';
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

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useSupabaseClient();
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-dark-950 flex items-center justify-center" }, _attrs))}><div class="w-full max-w-sm p-8 rounded-2xl border border-dark-700 bg-dark-900"><p class="text-xs font-mono text-accent tracking-widest uppercase mb-1">Portfolio CMS</p><h1 class="font-display text-2xl font-bold text-white mb-8">Acesso admin</h1><form class="flex flex-col gap-4"><div><label class="text-xs text-gray-500 mb-1.5 block">Email</label><input${ssrRenderAttr("value", unref(email))} type="email" placeholder="seu@email.com" class="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-accent/60 transition-colors"></div><div><label class="text-xs text-gray-500 mb-1.5 block">Senha</label><input${ssrRenderAttr("value", unref(password))} type="password" placeholder="••••••••" class="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-2.5 text-white text-sm outline-none focus:border-accent/60 transition-colors"></div>`);
      if (unref(error)) {
        _push(`<p class="text-red-400 text-xs flex items-center gap-1.5"><span>⚠</span> ${ssrInterpolate(unref(error))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="mt-2 py-2.5 rounded-lg font-medium text-white text-sm transition-opacity disabled:opacity-50" style="${ssrRenderStyle({ "background": "linear-gradient(135deg, #7c6aff, #5a4bcc)" })}">${ssrInterpolate(unref(loading) ? "Entrando..." : "Entrar")}</button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-0c7NgtWh.mjs.map
