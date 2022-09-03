import vue from '@vitejs/plugin-vue'

import VueSetupExtend from 'vite-plugin-vue-setup-extend' // 扩展setup插件，支持script标签上使用name属性
import { visualizer } from 'rollup-plugin-visualizer' // 打包分析体积插件
import { configHtmlPlugin } from './html' // 为html提供ejs能力
import { unocss } from './unocss'

export function createVitePlugins(viteEnv, isBuild) {
  const plugins = [vue(), VueSetupExtend(), configHtmlPlugin(viteEnv, isBuild), unocss()]
  if (isBuild) {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    )
  }
  return plugins
}
