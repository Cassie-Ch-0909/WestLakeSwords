<script setup lang="ts">
</script>

<template>
  <div style="width: 100%">
    <div class="container">
      <!-- <ModuleTitle i18n-title="page.cssDynamicEffect.richDynamicEffect.wavyText" /> -->
      <h2 class="firstText">
        西湖论剑·引领网络安全新趋势
      </h2>
      <h2 class="lastText">
        西湖论剑·引领网络安全新趋势
      </h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100px;
  display: flex;
  flex: 1;
  position: relative;
  // padding-top: 180px;

  @mixin text {
    position: absolute;
    top: calc(50% + 20px);
    left: 45%;
    font-size: 45px;
    font-weight: 800;
    transform: translate(-50%, -50%);
  }

  .firstText {
    @include text;
    color: transparent;
    -webkit-text-stroke: 1px #03a9f4;
  }

  .lastText {
    @include text;
    color: #03a9f4;
    animation: wave 3s ease-in-out infinite;
  }

  @keyframes wave {
    0%,
    100% {
      clip-path: polygon(
        0% 47%,
        10% 48%,
        28% 54%,
        54% 50%,
        50% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }

    50% {
      clip-path: polygon(
        0% 60%,
        16% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
}
</style>
