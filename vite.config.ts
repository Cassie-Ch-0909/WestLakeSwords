/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export default defineConfig({
  // server: {
  //   host: '0.0.0.0',
  //   public: '10.171.4.29:3333',
  //   port: 3333,
  // },
  resolve: {
    alias: {
      //
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      script: {
        propsDestructure: true,
        defineModel: true,
      },
    }),

    // https://github.com/posva/unplugin-vue-router
    VueRouter(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        // 不需要直接引入 import ... from 'vue'/'vueuse'
        'vue',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      // 自动生成auto-imports.d.ts
      dts: true,
      // 自动引入composables
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    // 自动引入Components组件
    Components({
      dts: true,
    }),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/global.scss";`,
      },
    },
  },
  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
