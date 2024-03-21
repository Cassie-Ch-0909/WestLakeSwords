<script setup>
import { ref } from 'vue'

const htmlDetails = ref(`
<p><video controls="controls" src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/25d087261f2045159407df795d2954fd.mp4" class="videoarea" style="display: inline-block;"></video><br></p>`)
</script>

<template>
  <div class="ml23.5% mr23.5%" v-html="htmlDetails" />
</template>

<style scoped>
p {
  text-align: center;
}
</style>
