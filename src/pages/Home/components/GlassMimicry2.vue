<template>
  <div style="width: 100%">
    <div class="container">
      <div class="cardd flex flex-col justify-evenly">
        <slot />
      </div>
      <div class="circle" />
      <div class="rect" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 560px;
  // background: radial-gradient(
  //     circle at 60% 90%,
  //     rgba(46, 103, 161, 1),
  //     transparent 60%
  //   ),
  //   radial-gradient(
  //     circle at 20px 20px,
  //     rgba(46, 103, 161, 0.8),
  //     transparent 25%
  //   ),
  //   #182336;
  position: relative;

  .cardd {
    width: 260px;
    height: 360px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 10;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    border-right: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow:
      -10px -10px 20px rgba(0, 0, 0, 0.2),
      10px 10px 20px rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    transform: rotate(20deg);
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 20px;
      background-image: linear-gradient(
        to top left,
        rgba(35, 139, 201, 0.7),
        rgba(45, 177, 186, 0.9)
      );
      z-index: -1;
      filter: blur(10px);
      margin: -20px;
    }

    h1 {
      margin-top: 50px;
    }

    h2 {
      margin-top: 160px;
    }

    h3,
    h4 {
      padding-left: 60px;
      text-align: left;
    }

    h3 {
      margin-top: 20px;
      text-transform: uppercase;
    }

    h4 {
      margin-top: 10px;
    }
  }

  .circle {
    width: 120px;
    height: 120px;
    position: absolute;
    left: 50%;
    bottom: 20px;
    background-image: linear-gradient(
      to top left,
      rgb(135, 116, 249),
      rgb(75, 162, 237)
    );
    border-radius: 80px;
  }

  .rect {
    width: 120px;
    height: 120px;
    position: absolute;
    right: 50%;
    top: 20px;
    background-image: linear-gradient(
      to top left,
      rgba(135, 116, 249, 0.9),
      rgba(75, 162, 237, 0.9)
    );
    border-radius: 20px;
  }
}
</style>
