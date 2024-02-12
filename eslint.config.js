import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // 所有的class都按一定顺序排列
    unocss: true,
    // prettier格式化css等文件
    formatters: true,
  },
)
