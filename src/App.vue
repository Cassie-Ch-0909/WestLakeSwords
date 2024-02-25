<script setup>
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import { useGlobalProvide } from '@/hooks/useGlobalContext'

useGlobalProvide()
</script>

<template>
  <main>
    <Header />
    <RouterView />
    <Footer />
  </main>
</template>
