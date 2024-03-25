<script setup>
import LeftNav from './components/LeftNav.vue'
import Main from './components/Main.vue'
import Right from './components/Right.vue'
</script>

<template>
  <div class="w-full bg-#F2F3F5">
    <div class="ml10% mr10% h-full w-80% flex justify-between">
      <LeftNav class="fixed left-10%" />
      <Main class="ml210px" />
      <Right class="" />
    </div>
  </div>
</template>

<style scoped>

</style>
