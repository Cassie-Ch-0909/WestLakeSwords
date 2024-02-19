<script setup>
import Header from '@/components/Header/index.vue'
</script>

<template>
  <main>
    <div v-animate="'animate__animated animate__fadeInUp'" />
    <Header />
    <RouterView />
  </main>
</template>
