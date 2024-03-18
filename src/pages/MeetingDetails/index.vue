<script setup>
import NotBlockPeopleBarrage from './components/NotBlockPeopleBarrage.vue'
import RightDetails from './components/RightDetails.vue'
import UserComment from './components/UserComment.vue'
</script>

<template>
  <div class="bg mb50px w-full bg-contain bg-top bg-no-repeat">
    <div class="ml10% mr10% flex justify-between pt20px">
      <NotBlockPeopleBarrage />
      <RightDetails />
    </div>
    <div class="ml10% mr10% flex justify-between pt20px">
      <UserComment />
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('https://www.gcsis.cn/uploadfile/70766e1f103340fd8e48ea8802702caa.jpg');
}
</style>
