<script setup>
import { ref } from 'vue'

const htmlDetails = ref(`
<div class="ax-article"><p class="color-red">央广网杭州5月8日消息(记者 
姜頔)自山下而仰山巅谓之高远，自山前而窥山后谓之深远，自近山而望远山谓之平远。5月7日，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会在杭州成功举办。</p> <p>在大会主论坛上，安恒信息董事长范渊发表《构筑可信可控的数字安全屏障》主题演讲指出，在数字中国建设的时代背景下，要建立高远、平远、深远的数字安全观，厘清数据治理、数据安全、数据要素的关系，构建可信可控的数字安全基础设施，与数字生态共绘数字中国时代的“富春山居图”，共建共享数字中国建设成果。</p><p style="text-align: center;"><img src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/15d0f956397444c3ad5d8c2c14b2f800.jpg" style="width: 800px;"><br></p> <p style="text-align: center;">2023西湖论剑·数字安全大会现场(央广网记者 姜頔 摄)</p> <p><b>新十年助推数字中国建设，助力百城打造数字城市标杆</b></p> <p>2023年初，《数字中国建设整体布局规划》(以下简称《规划》)的发布，为数字中国建设锚定了新时期发展方位，《规划》将数字安全屏障、数字技术创新并列为强化数字中国的“两大能力”，彰显了数字安全对建设数字中国的关键作用。</p><p style="text-align: center;"><img src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/57e7c03b6c2c41de8e6beb4f1c1c5255.jpg" style="width: 800px;"><br></p> <p style="text-align: center;">《西湖论剑·数字安全大会新十年规划》发布(央广网发 安恒信息供图)</p> <p>为更好助推数字中国建设，作为国内首个成功举办十届的网络安全大会，西湖论剑·网络安全大会在迎来新十年之际，正式升级为西湖论剑·数字安全大会。</p> <p>会上，发布了西湖论剑·数字安全大会新十年规划——推出“产业、人才、科技”三大计划——将在未来十年助力百座城市打造数字城市标杆，以数字安全助推数字中国建设。2023年内，该计划将率先在杭州、北京、广州等地落地实施。</p><p style="text-align: center;"><img src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/70c1f2a5e98449459bd9deab49ed1108.jpg" style="width: 800px;"><br></p> <p style="text-align: center;">网络安全标准化人才实训基地揭牌仪式(央广网发 安恒信息供图)</p> <p>作为西湖论剑·数字安全大会新十年规划的首批落地成果，中国电子技术标准化研究院党委书记、副院长杨建军和范渊共同为国内首个网络安全标准化人才实训基地揭牌。随后，中国电子信息产业发展研究院总工程师高炽扬和安恒信息董事长范渊共同发布了《2023数字安全能力洞察报告》。</p> <p><b>纵论数字中国安全建设，数字安全助力高质量发展</b></p> <p>当前背景下，数字中国建设的战略化、体系化布局，带来了安全形势的重大变化，为数字安全产业赋予多重驱动力，安全理念、安全体系、安全技术亟待变革，直面数字安全的新威胁、新变化、新挑战。大会主论坛上，嘉宾围绕数字中国建设的多个重要话题展开分享和讨论，涵盖数字经济、数据要素、数据安全、数字安全、数字城市等方面内容。</p><p style="text-align: center;"><img src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/1c183d7f832e43c2977a73f0d6ae0972.png" style="width: 800px;"><br></p> <p style="text-align: center;">安恒信息董事长范渊作主题演讲(央广网发 安恒信息供图)</p> <p><b>助力智能安全亚运，数字安全助推千行百业</b></p> <p>数字安全作为一个新的概念，比网络安全、数据安全拥有更为广泛的内涵和应用场景，从而保障全社会各领域数字化全过程、全方位、全链条的安全。</p><p style="text-align: center;"><img src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/470b82e3d3884a98aaa7c99748fff9a7.jpg" style="width: 800px;"><br></p> <p style="text-align: center;">安恒信息赛事重保成果展区(央广网记者 姜頔 摄)</p> <p>作为典型数字安全场景之一，杭州2022年第19届亚运会的安全守护至关重要。西湖论剑·数字安全大会主论坛举行了“守护每一分荣耀，保障每一份安全——亚运赛事网络安全保护联合启动仪式”。同时，通过网络安全新技术、新理念构建的“天穹新一代安全运营中心”正式亮相，为杭州亚运提供全天候、全场景、全过程、全闭环的安全运营保障服务，打造亚运网络安全的“铜墙铁壁”。</p> <p>据了解，5月7日下午大会同步举办6场平行论坛，并在5月8日全天举办4场平行论坛。同期还举办了2023西湖论剑数字安全创新成果展。</p></div>
`)
</script>

<template>
  <div class="ml20% mr20% w-full flex flex-col items-center justify-center" v-html="htmlDetails" />
</template>

<style scoped>
p {
  text-align: center;
}
</style>
