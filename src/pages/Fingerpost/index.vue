<script setup>
import { ref } from 'vue'
import Venue from './components/Venue.vue'
import Traffic from './components/Traffic.vue'
import Hotel from './components/Hotel.vue'
import SignIn from './components/SignIn.vue'
import Relationship from './components/Relationship.vue'

// from-[#2B77BC] to-[#2DB1BA] bg-gradient-to-r
const titleList = ref([
  '大会场馆',
  '大会交通',
  '酒店住宿',
  '大会签到',
  '联系我们',
])

const activeIndex = ref(0)

function changeActiveIndex(index) {
  activeIndex.value = index
}
</script>

<template>
  <!-- PC端关于大会 -->
  <div class="bg [#98EAF7] w-full bg-contain bg-left bg-no-repeat pb50px max-md:hidden">
    <div class="ml10% mr10% h-full w-80%">
      <p class="h50% w-full flex items-center justify-center pb30px pt30px font-size-[35px] color-[#2C80BE] font-bold">
        参会指南&nbsp;&nbsp;·&nbsp;&nbsp;<span class="color-[#00B4BC] font-bold">{{ titleList[activeIndex] }}</span>
      </p>
      <div class="h-50px w-full flex">
        <ul class="h-full w-full flex items-center justify-around">
          <li
            v-for="(item, index) in titleList" :key="index"
            :class="activeIndex === index ? 'from-[#2B77BC] to-[#2DB1BA] bg-gradient-to-r color-[#fff]' : ''"
            class="hoverTitleLi h-60% w-135px flex items-center justify-center border-1px border-[#2DB1BA] rounded-15px border-solid font-size-13px color-[#2DB1BA]"
            @click="changeActiveIndex(index)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
      <Venue v-if="activeIndex === 0" />
      <Traffic v-if="activeIndex === 1" />
      <Hotel v-if="activeIndex === 2" />
      <SignIn v-if="activeIndex === 3" />
      <Relationship v-if="activeIndex === 4" />
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('/public/bg/3.png');
}

.hoverTitleLi:hover {
  color: #fff;
  background: linear-gradient(to right, #2b77bc, #2db1ba);
}
</style>
