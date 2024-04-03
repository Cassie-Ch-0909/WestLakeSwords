<script setup>
import Content from './Content/index.vue'
import LeftMenu from './LeftMenu/index.vue'
</script>

<template>
  <div class="h1400px w-full bg-#EEF1F8">
    <div class="ml5% mr5% w-90% flex">
      <div class="fixed bottom-0 left-5% top-90px w200px">
        <LeftMenu />
      </div>
      <div class="ml16% mt10px w-full">
        <Content />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
