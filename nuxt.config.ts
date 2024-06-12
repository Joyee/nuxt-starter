import type { NuxtPage } from 'nuxt/schema';
import { createRuntimeConfig } from './build';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  runtimeConfig: createRuntimeConfig(),
  srcDir: 'src/',
  components: [
    // {
    //   path: '~/components/',
    //   pathPrefix: false, // 如果只想根据组件的名称而不是路径自动导入组件，那么需要在 nuxt.config.ts 文件中将 pathPrefix 选项设置为false，此时与Nuxt2的命名策略相同
    // },
    // {
    //   path: '~/components/public', // 默认为 ~/components 只有 public 目录下的组件将被注册，且自动注册的组件名为 MyImg (非 PublicMyImg)；business 目录下的组件将被忽略。
    // }
    {
      path: '@/components/public',
      extensions: ['.vue'],
    },
  ],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  hooks: {
    'pages:extend'(pages: NuxtPage[]) {
      pages.push({
        name: 'error',
        path: '/error',
        file: '~/error.vue',
        props: {
          error: {
            statusCode: '500',
            statusMessage: '服务器开小差了，请稍后重试~',
          },
        },
      });
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/styles/index.less";',
        },
      },
    },
  },
});
