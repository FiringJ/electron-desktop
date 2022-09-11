import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: path.resolve(__dirname, './dist/'),
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    Pages({
      dirs: 'src/views',  // 需要生成路由的文件目录
      exclude: ['**/components/*.vue']  // 排除在外的目录，即不将所有 components 目录下的 .vue 文件生成路由
    })
  ]

})
