<script setup>
import MoudleHeader from './MoudleHeader.vue'
import EveryActivity from './EveryActivity.vue'
</script>

<template>
  <!-- 原始高度是h600px -->
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="已报名的活动" />
    <EveryActivity />
  </div>
</template>

<style scoped></style>
