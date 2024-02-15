<script setup>
import Header from '@/components/Header/index.vue'
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <h1 class="animate__animated animate__fadeIn">
      An animated element
    </h1>
    <!-- <TheFooter /> -->
  </main>
</template>
