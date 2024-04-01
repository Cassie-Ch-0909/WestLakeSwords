<script lang="ts" setup>
import html2canvas from 'html2canvas'
import { reactive, ref } from 'vue'

// const dialogVisible = ref(true)
const from = reactive({
  list: ['模板1', '模板2', '模板3'],
  activeIndex: 0,
  posterImg: '',

})
function actvieFuntion(num: any) {
  from.activeIndex = num
}
// function createPoster() {
//   // 生成海报
//   const domObj = document.getElementById('CodeImgBase64')
//   // 显示海报
//   html2canvas(domObj, {
//     useCORS: true,
//     allowTaint: false,
//     logging: false,
//     letterRendering: true,
//     onclone(doc: any) {
//       const e = doc.querySelector('#CodeImgBase64')
//       e.style.display = 'block'
//       console.log(doc)
//     },
//   }).then((canvas: any) => {
//     // 在微信里,可长按保存或转发
//     const a = canvas.toDataURL('image/png')
//     console.log(a)
//   })
// }
</script>

<template>
  <div class="flex-box">
    <div>
      <div v-for="(item, index) in from.list" :key="index" @click="actvieFuntion(index)">
        <div>{{ item }}</div>
        <div :class="from.activeIndex === index ? 'box' : 'box-1'" />
      </div>
    </div>
    <div class="left">
      <div class="">
        模板-{{ from.activeIndex + 1 }}
      </div>
      <div class="border-mo">
        <div id="CodeImgBase64">
          <div class="b-p-i">
            <div class="bg">
              <div class="tutle">
                <div class="text">
                  iQOO 11S 16GB+1TB 传奇版超算独显芯片|2K 144Hz E6 全感屏|第二代骁龙8|200W 超快闪充|索尼定制 VCS IMX866
                </div>
              </div>
              <div class="to-moeny">
                <span class="c-o">￥</span><span>8999.00</span><span class="y-m">原价9999.00</span>
              </div>
              <div class="img-w-h">
                <img src=".././../../static/code.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="b-l">
        <el-button type="primary" @click="createPoster">
          下载海报
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dialog-footer button:first-child {
  margin-right: 10px;
}

.flex-box {
  display: flex;

  .box {
    width: 200px;
    height: 300px;
    border-radius: 10px;
    border: 3px solid #00aa00;
  }

  .box-1 {
    width: 200px;
    height: 300px;
    border-radius: 10px;
    border: 3px solid #aaaaaa;
  }

  .left {
    margin-left: 100px;

    .border-mo {
      width: 400px;
      height: 600px;
      border: 3px solid #aaaaaa;
      border-radius: 10px;
    }

    .b-l {
      width: 400px;
      text-align: center;
      margin-top: 30px;
    }
  }

  #CodeImgBase64 {
    width: 400px;
    height: 600px;
    background-color: #ffffff;
    border-radius: 10px;
  }

  .b-p-i {
    width: 350px;
    height: 550px;
    background-color: #dcdcdc;
    margin: auto;
    border-radius: 10px;
    position: relative;
    top: 10px;
  }

  .bg {
    background-image: url('../../../static/phone.png');
    background-repeat: no-repeat;
    width: 350px;
    height: 400px;
    background-size: cover;
    margin: auto;
    border-radius: 10px;

    .tutle {
      position: relative;
      top: 328px;
      background: rgba(#000, 0.4);
      margin: auto;
      color: #fff;
      border-radius: 0px 0px 10px 10px;

      .text {
        width: 340px;
        margin: auto;
        font-size: 13px;
      }
    }

    .to-moeny {
      position: relative;
      top: 338px;
      left: 20px;
      font-size: 20px;
      font-weight: bold;
      color: red;

      .c-o {
        font-size: 12px;
        color: red;
        margin-right: 2px;
      }
    }

    .y-m {
      font-size: 10px;
      margin-left: 5px;
      color: #aaaaaa;
      text-decoration: line-through;
      font-weight: 400;
    }

    .img-w-h {
      position: relative;
      top: 358px;
      width: 70px;
      margin: auto;

      img {
        width: 70px;
        height: 70px;
      }
    }
  }
}
</style>
