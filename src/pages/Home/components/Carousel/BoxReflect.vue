<script setup lang="ts">
</script>

<template>
  <!-- <div style="width: 100%"> -->
  <div class="container">
    <div class="content">
      <div class="btn1">
        大会直播
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped lang="scss">
.container {
  height: 600px;
  display: flex;
  flex: 1;
  justify-content: center;
  position: relative;

  .content {
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    $color: #0ebeff;

    @mixin btn {
      z-index: 0;
      width: 180px;
      height: 70px;
      line-height: 70px;
      color: $color;
      font-size: 22px;
      font-weight: bold;
      border-radius: 10px;
      text-align: center;
      margin: auto;
      transform: translateY(-40px);
      overflow: hidden;
      cursor: pointer;
      transition: 0.3s;
      position: relative;
      -webkit-box-reflect: below 10px
        linear-gradient(transparent, rgba(0, 0, 0, 0.4));

      &:hover {
        color: #fff;
        box-shadow:
          0 0 5px $color,
          0 0 25px $color;

        &::after,
        &::before {
          transition: 0.3s;
          background-color: $color;
        }
      }

      &::before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        z-index: -2;
        left: 50%;
        top: 50%;
        width: 150%;
        height: 300%;
        transform: translate(-50%, -50%);
        background-color: #000;
        background-repeat: no-repeat;
        background-size: 50% 50%;
        background-position: 0 0;
        background-image: conic-gradient($color, $color);
        animation: rotate 2s linear infinite;
      }
    }

    .btn1 {
      @include btn;

      &::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        z-index: -1;
        left: 2px;
        top: 2px;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        background-color: #000;
        border-radius: 10px;
      }
    }

    .btn2 {
      @include btn;
      filter: hue-rotate(90deg);
    }

    @keyframes rotate {
      100% {
        transform: translate(-50%, -50%) rotate(1turn);
      }
    }
  }
}
</style>
