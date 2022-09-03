/*
 * @Author: Yumu 945882678@qq.com
 * @Date: 2022-09-03 17:36:34
 * @LastEditors: Yumu 945882678@qq.com
 * @LastEditTime: 2022-09-03 17:36:54
 * @FilePath: /my-vue-admin/build/plugin/unocss.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export function unocss() {
  return Unocss({
    presets: [presetUno(), presetAttributify(), presetIcons()],
  })
}
