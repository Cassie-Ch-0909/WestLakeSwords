<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface Props {
  i18nTitle: string
}

const { i18nTitle = '' } = defineProps<Props>()

const { t } = useI18n()
</script>

<template>
  <div class="moduleTitle">
    {{ t(i18nTitle) }}
  </div>
</template>

<style scoped lang="scss">
.moduleTitle {
  font-size: 24px;
  font-family: 'SourceHanSansCN-Bold' !important;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  z-index: 11;
}
</style>
