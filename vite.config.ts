import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),

  // AutoImport({
  //   resolvers: [ElementPlusResolver()]
  // }),
  // Components({
  //   resolvers: [ElementPlusResolver()]
  // })
  ],
  resolve: {
    alias: {
      // 配置@指向src目录
      '@': path.resolve(__dirname, './src'),
    },
  }
   
})
