import { x as executeAsync } from '../_/nitro.mjs';
import { d as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useSupabaseClient } from './useSupabaseClient-H06rCZGb.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';
import '@supabase/ssr';

const auth = defineNuxtRouteMiddleware(async () => {
  let __temp, __restore;
  const { data } = ([__temp, __restore] = executeAsync(() => useSupabaseClient().auth.getSession()), __temp = await __temp, __restore(), __temp);
  if (!data.session) return navigateTo("/admin/login");
});

export { auth as default };
//# sourceMappingURL=auth-CObCcnaA.mjs.map
