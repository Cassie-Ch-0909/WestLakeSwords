<script setup>
import { useRouter } from 'vue-router'

/*
    生态合作媒体的三行数据
*/
const list = ref([
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/ae832a31047749299bd504e6070d487a.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/ae832a31047749299bd504e6070d487a.png',
    title: '希捷科技',
    url: 'https://www.seagate.com/cn/zh/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/94df6244d6b04a91b3e8545844bce830.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/94df6244d6b04a91b3e8545844bce830.png',
    title: '孝道科技',
    url: 'https://www.tcsec.com.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png',
    title: '宝德计算',
    url: 'http://www.powerleader.com.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/73bd035a85dd43a988a928d0557818d4.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/73bd035a85dd43a988a928d0557818d4.png',
    title: '其阳科技',
    url: 'https://www.aewin.cn',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png',
    title: '安恒信息',
    url: 'https://www.dbappsecurity.com.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d86aad180ee14acb95d1df723414aec2.png',
    image2: '',
    title: '乐研科技',
    url: 'https://www.royaltech.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2e88c33068c04d31a5bb9599c22382a0.png',
    image2: '',
    title: '汇志凌云',
    url: 'http://www.51lingyun.com',
  },
])
const list2 = ref([
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png',
    title: '立华科技',
    url: 'https://www.ls-china.com.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8dadce3bcf53474b8141421cbc60f360.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8dadce3bcf53474b8141421cbc60f360.png',
    title: '安博通',
    url: 'http://www.abtnetworks.com/ ',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png',
    title: '联软科技',
    url: 'https://www.leagsoft.com/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png',
    title: '上元信安',
    url: 'http://www.sunyainfo.com/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png',
    title: '兴汉网际',
    url: 'https://www.nexsec.cn',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png',
    title: '中尔网络',
    url: 'http://www.hzzekj.com/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/44e9a8a91d544be4a53b2d5ca7bf6c9a.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/44e9a8a91d544be4a53b2d5ca7bf6c9a.png',
    title: '娃哈哈',
    url: 'https://www.wahaha.com.cn/#/',
  },
])
const list3 = ref([
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png',
    title: '广电五舟',
    url: 'http://www.wuzhoucloud.com',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png',
    title: '网宿科技',
    url: 'https://www.wangsu.com/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png',
    title: '中科可控',
    url: 'https://www.cancon.com.cn/',
  },
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png',
    image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png',
    title: '南京壹进制',
    url: '',
  },
])

/*
    战略合作媒体的一行数据
*/
const strategicCooperativeMediaList = ref([
  {
    image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/60234dda9f664775a5b991bd8412dca1.png',
    image2: '',
    title: '新华网',
    url: '',
  },
])

/*
    新闻媒体的数组
*/
const newsMediaList1 = ref([
  {
    image1: 'https://img2023.gcsis.cn/2023/4/5c64dfd9685d4ea0b48a4df497a28669.png',
    title: '人民日报',
    url: '',
    image3: 'https://img2023.gcsis.cn/2023/4/e0ac725f69aa45229e72e8c451393147.png',
  },
  {
    title: '中央电视台',
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/1ef7fe346f28471a89176ab96cc0f15d.png',
    title: '科技日报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/03bf8c57aff1466ebf866454df40a42d.png',
    title: '光明网',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/0347a02665f84bb58b637fc403b5a047.png',
    title: '经济日报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/77fc901c76c947db8c9e352f2e0bc374.png',
    title: '中国青年报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/11ab86f796b3494098c73e2515bc64e1.png',
    title: '人民政协报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/f03f89c469da43d3a8290d26582f1fdc.png',
    title: '工人日报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/0744a131e3314cbc812996c8b1b4f5c4.png',
    title: '法制日报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/6e9a1e0aa2254b918c24816d67e3adc1.png',
    title: '中国日报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/b9706366768d40afb9c5d3352dbbb3cd.png',
    title: '环球时报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/c9337b3e90e044dba26621055079f877.png',
    title: '经济参考报',
  },

  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/19cf02f5c00e446ba609d7ef66628b10.png',
    title: '中国经济周刊',
  },
])

const newsMediaList = ref([
  {
    image1: 'https://img2023.gcsis.cn/2023/4/5c64dfd9685d4ea0b48a4df497a28669.png',
    title: '人民日报',
    url: '',
    image3: 'https://img2023.gcsis.cn/2023/4/e0ac725f69aa45229e72e8c451393147.png',
  },
  {
    title: '中央电视台',
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/1ef7fe346f28471a89176ab96cc0f15d.png',
    title: '科技日报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/03bf8c57aff1466ebf866454df40a42d.png',
    title: '光明网',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/0347a02665f84bb58b637fc403b5a047.png',
    title: '经济日报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/77fc901c76c947db8c9e352f2e0bc374.png',
    title: '中国青年报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/11ab86f796b3494098c73e2515bc64e1.png',
    title: '人民政协报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/f03f89c469da43d3a8290d26582f1fdc.png',
    title: '工人日报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/0744a131e3314cbc812996c8b1b4f5c4.png',
    title: '法制日报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/6e9a1e0aa2254b918c24816d67e3adc1.png',
    title: '中国日报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/b9706366768d40afb9c5d3352dbbb3cd.png',
    title: '环球时报',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/c9337b3e90e044dba26621055079f877.png',
    title: '经济参考报',
  },

  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/19cf02f5c00e446ba609d7ef66628b10.png',
    title: '中国经济周刊',
  },
  {
    url: '',
    image1: 'https://img2023.gcsis.cn/2023/4/a17f2344c0c34931bc2f87e40f76ad72.png',
    title: '央视网',
  },
])

const newsMediaList2 = ref([
  {
    image1: 'https://img2023.gcsis.cn/2023/4/2933697fbe214fe2aec9457a124ba92f.png',
    title: '学习强国',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/e4d7fcbe27f94fa0a1ecb8b9d9b7aa90.png',
    title: '中国网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/60f609392fc4433f89cefd2f63d7d5e5.png',
    title: '国际在线',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/e162cf72610b44c29b74efd18d6da6f7.jpg',
    title: '中国日报中文网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/41c2ea227acf49a5b3803a2922b75490.png',
    title: '中国经济网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/8daac76e59304a0bbee41d6537fcd1ba.jpg',
    title: '央广网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/f30d1b1fd62b4a0586056ec1a73c3c4b.png',
    title: '中国新闻网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/094ec2c4266444ef9ad9e05dd776ab48.png',
    title: '人民政协网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/e3812cf6537b45b1840fe80041c4930d.png',
    title: '法制网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/3ff1dd6f1d384edfb112c887cb567b10.png',
    title: '中青在线',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/1ad1d205b6f04db0ac2b024bb0fe99bf.png',
    title: '环球网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/8593d6331dd94af8a15b56de0917f557.png',
    title: '中公网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/8daac76e59304a0bbee41d6537fcd1ba.jpg',
    title: '央广网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/3a33bc277a06468bb2b637dba096b92e.jpg',
    title: '中国工业报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/5be8529426e14f1099a907ee94707184.png',
    title: '经济参考',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/b5762949f9b7412491a34e240f4bc019.png',
    title: '人民邮电',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/21b58656fe314b7cae7580a5a22fc889.png',
    title: '中国电子报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/b8876aee5e46482197e2b3959afd0ae6.png',
    title: '消费日报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/a09d7e2c9a24406590e657dd05db24ba.png',
    title: '中国经营报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/f5614f75cfd04ae3aab78418ae159f29.png',
    title: '中国经济时报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/4e2902ffbbe54150936c6c50bd6ea133.png',
    title: '互联网周刊',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/7380e40c2b6446adbbb99e1964d0b253.png',
    title: '浙江卫视',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/d1ccb6efd6dc48a188f04555e5087766.png',
    title: '浙江日报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/9654d149cc66473686f7eff47b161672.png',
    title: '浙江经视',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/f71b79a27b1f4b10b5a5aa721cfdc591.png',
    title: '浙江在线',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/de60782a31c54ebca83b0e2f540156f4.png',
    title: '钱江晚报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/6c0d5a88753e4fcf98ecb627e834c12f.png',
    title: '杭州日报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/b6fa6659a2984e189a6e40fbef24ff5d.png',
    title: '杭州电视台',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/9ebbc120caea4d0aa54a195d3b7a0f72.png',
    title: '杭州网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/0f1d05ce139d402c8e5d7993b8b70d2c.png',
    title: '都市快报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/531ca253c2e74ff1aee1b2a90996c334.png',
    title: '滨江发布',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/c80cbbad0a504fc7a913f4cdd7e1a080.png',
    title: '天目新闻',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/0b0758eb71cd4b84afc72fe55cbadcbc.jpg',
    title: '北京卫视',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/350e554e9ae343a5af00dd6f370f0e43.png',
    title: '北京日报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/d4dbaee8700d48b5aad104c2631895d0.png',
    title: '新京报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/649c4f870006497ca0ad1d3a3be29e70.png',
    title: '新民晚报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/3e0d7b634b594551a732f3ee885ee13e.png',
    title: '南方都市报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/950f41897dd741529c12fec253dd493e.png',
    title: '东方网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/9bc308db40b948f59733006b27196d91.jpg',
    title: '武汉广播电视台',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/1b616bad099e433cb04c6f98ebe182ed.png',
    title: '南方网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/f00ad840236f49afade1935eea4f083d.png',
    title: '澎湃新闻',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/ae296953f8be4b3db5c0ea0f80b8597f.png',
    title: '界面',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/27b5b916292f45eeaf95a36c8f770d0d.png',
    title: '财联社',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/24185edb57ab4437956ba33baa0c7b2b.png',
    title: '第一次财经',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/0f8c91d455ad4d6c816adbfbdec7767a.png',
    title: '21世纪经济报道',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/7202259ad7d9464ab25302ffd9fac710.png',
    title: '每日经济新闻',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/31c259de15114f3ca458d30a11eee1c7.png',
    title: '财经网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/9c2ba9c8f0274eb0ac1226e714a785c9.png',
    title: '金融时报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/e5da1fd8b93d4696b4199dd29803e3dd.png',
    title: '国际金融报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/1778dfdac1a74e98bac88d7ab481150e.png',
    title: '新浪',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/d156c5314e574a98b301d2a796299318.png',
    title: '搜狐',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/92be131e61ec4f11a3fd9eb598d2e79c.png',
    title: '网易',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/ad4af216b1db45dea8b199dceff10d77.png',
    title: '凤凰网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/066a3ee66dbe421c8283e6e77e25f990.jpg',
    title: '优酷',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/424d4917e820477f97d27472309add58.jpg',
    title: '爱奇艺直播',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/a75bb18135544cb59c6ebb3e337b2495.png',
    title: '中国网信网',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/a97524304fb34840b8068575f7811e5f.png',
    title: '中国信息安全',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/6d9ae6df568b4f57a38834a9fbd31773.png',
    title: '信息安全 通讯保密',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/978cbc9dfb2645ad8ec36ae8cf52750c.png',
    title: '信息安全研究',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/82300ba61934470eb9af6b4704739bbd.png',
    title: '安全419',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/b8fecf70416f44daae1fe0e25472e6fb.jpg',
    title: 'LI',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/7cecc931d4a1439889acdff8fec0056c.png',
    title: '安在',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/92cda73a486b41f39bdb29679239664a.jpg',
    title: '数世咨询',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/c0974135ae9448128273fcd90be3f171.jpg',
    title: 'E安全',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/51eb4de4183049aab3ee00055bf48c6d.jpg',
    title: '工业物联网世界',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/9c08408eea49412490370d936e145b18.jpg',
    title: '浅黑',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/f41abeb34797428bb5071c674df84461.jpeg',
    title: '浙样红',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/cd1bf377813f4841b3c392acb7439632.png',
    title: '钱江视频',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/fb914833d31c42df9d8f0a7cf0004597.jpg',
    title: '商密在线',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/6ee6aada69c5408bb5518e4c24b2d256.jpg',
    title: '看雪',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/e1f2d98d9bf84873999bf3d3b9501549.png',
    title: '嘶吼',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/fb846fe99f6242d8a3bd61148005ca60.jpg',
    title: '斗象科技',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/a564a13fa4ca4b07928dfa57bc9783b1.jpeg',
    title: '安全牛',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/65b5f340b9434ec481a4a7fcd4dc3c6a.jpeg',
    title: '大河报',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/3fd4b9705adc4554a45747fa1c068d81.png',
    title: '数说安全',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/e8de6fc9f84f44baae8a948d495566a7.png',
    title: '漏洞银行',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/e143654b36d54e48b1be61525ba00ecf.png',
    title: '商信舆',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/92e3d28d06fa4202981d20e86ba7b92f.png',
    title: 'kk直播',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/c49234f8ee9248cda496d39cd91d34ab.jpg',
    title: '斗鱼',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/9f1ecc5a9785462d8459b43b4221a409.jpg',
    title: '醒目视频',
    url: '',
  },
  {
    image1: 'https://img2023.gcsis.cn/2023/4/4195060025904ad8beff50d730fced44.png',
    title: '亿欧',
    url: '',
  },

])

/*
    移动端合作伙伴
*/
// 生态合作
const phoneList1 = ref(
  [
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/ae832a31047749299bd504e6070d487a.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/ae832a31047749299bd504e6070d487a.png',
      title: '希捷科技',
      url: 'https://www.seagate.com/cn/zh/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/94df6244d6b04a91b3e8545844bce830.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/94df6244d6b04a91b3e8545844bce830.png',
      title: '孝道科技',
      url: 'https://www.tcsec.com.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png',
      title: '宝德计算',
      url: 'http://www.powerleader.com.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/73bd035a85dd43a988a928d0557818d4.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/73bd035a85dd43a988a928d0557818d4.png',
      title: '其阳科技',
      url: 'https://www.aewin.cn',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5739d4caa7214beaa27cc66d10644a62.png',
      title: '安恒信息',
      url: 'https://www.dbappsecurity.com.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d86aad180ee14acb95d1df723414aec2.png',
      image2: '',
      title: '乐研科技',
      url: 'https://www.royaltech.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2e88c33068c04d31a5bb9599c22382a0.png',
      image2: '',
      title: '汇志凌云',
      url: 'http://www.51lingyun.com',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png',
      title: '广电五舟',
      url: 'http://www.wuzhoucloud.com',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/bce6aa664cd44e76af59ba89e4d4f04d.png',
      title: '网宿科技',
      url: 'https://www.wangsu.com/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8d55bacac63a499c9a50c19a996d4cfd.png',
      title: '中科可控',
      url: 'https://www.cancon.com.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/c39a007819cc484e964e9dbcb8e155c2.png',
      title: '南京壹进制',
      url: '',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png',
      title: '立华科技',
      url: 'https://www.ls-china.com.cn/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8dadce3bcf53474b8141421cbc60f360.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8dadce3bcf53474b8141421cbc60f360.png',
      title: '安博通',
      url: 'http://www.abtnetworks.com/ ',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/b93ab5c255cb4830b2c0b7e09aaced8e.png',
      title: '联软科技',
      url: 'https://www.leagsoft.com/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8077d0d14baa4eb9ad78181285b0ee09.png',
      title: '上元信安',
      url: 'http://www.sunyainfo.com/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/5236e6f4e39c49d0ae1b491c735038cf.png',
      title: '兴汉网际',
      url: 'https://www.nexsec.cn',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2cf78591048d49d28414ee2b1426d4f9.png',
      title: '中尔网络',
      url: 'http://www.hzzekj.com/',
    },
    {
      image1: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/44e9a8a91d544be4a53b2d5ca7bf6c9a.png',
      image2: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/44e9a8a91d544be4a53b2d5ca7bf6c9a.png',
      title: '娃哈哈',
      url: 'https://www.wahaha.com.cn/#/',
    },
  ],
)

// 定义一个flag，用来控制是否显示全部
const flag = ref(false)
// 定义一个按钮名称
const buttonName = ref('查看更多')
/*
    定义一个方法来控制flag是否显示以及按钮的名称
*/
function changeFlag() {
  flag.value = !flag.value
  if (flag.value)
    buttonName.value = '收起'

  else
    buttonName.value = '查看更多'
}

/*
    点击合作伙伴的logo跳转到合作伙伴介绍页面
*/
// const router = useRouter()
// function gotoPartnerDetails(index) {
//   const path = list.value[index].url
//   // console.log(gotoPath)
//   router.push({ path })
// }
</script>

<template>
  <!-- PC端合作伙伴 -->
  <div class="mb[50px] mt[50px] w100% max-md:hidden">
    <p class="left-0 ml10% h-[80px] w-80% font-size-[30px] font-bold">
      合作伙伴&nbsp;<span class="font-size-[23px]">Cooperative Partner</span>
    </p>
    <p class="ml10% font-size-[20px] color-[#05BAB3] font-bold">
      生态合作伙伴
    </p>
    <!-- 生态合作媒体 一共三行 -->
    <div class="ml10% mr10% h-[120px] w-80% flex flex-wrap justify-between">
      <a v-for="(item, index) in list" :key="index" :href="item.url" class="inline-block w120px">
        <img class="h120px w120px" :src="item.image1">
      </a>
    </div>
    <div class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <a v-for="(item, index) in list2" :key="index" :href="item.url" class="h-full">
        <img class="h-full w-full" :src="item.image1">
      </a>
    </div>
    <div class="% ml10% mr10% h-[120px] w-80% flex">
      <a v-for="(item, index) in list3" :key="index" :href="item.url" class="h-full" :class="index === 0 ? '' : 'ml5%'">
        <img class="h-full w-full" :src="item.image1">
      </a>
    </div>
    <p class="ml10% font-size-[20px] color-[#05BAB3] font-bold">
      战略合作媒体
    </p>
    <div class="ml10% mr10% h-[120px] w-80% flex flex-wrap justify-between">
      <a
        v-for="(item, index) in strategicCooperativeMediaList" :key="index" :href="item.url"
        class="inline-block w120px flex items-center"
      >
        <img class="w120px" :src="item.image1">
      </a>
    </div>
    <!-- 55+42 -->
    <p class="ml10% font-size-[20px] color-[#05BAB3] font-bold">
      新闻媒体
    </p>
    <div class="ml10% mr10% w-100% flex flex-wrap">
      <a
        v-for="(item, index) in newsMediaList" :key="index" :href="item.url" class="h-full w14%"
        :class="index !== 0 ? 'ml%' : ''"
      >
        <img class="w-150px" :src="item.image1">
      </a>
    </div>
    <div v-if="flag" class="ml10% mr10% w-100% flex flex-wrap">
      <a v-for="(item, index) in newsMediaList2" :key="index" :href="item.url" class="mt30px h-full w14%">
        <img class="w-150px" :src="item.image1">
      </a>
    </div>
    <el-button class="ml47%" @click="changeFlag">
      {{ buttonName }}
    </el-button>
  </div>
  <!-- 移动端合作伙伴 -->
  <div class="mt-[10px] w-full md-hidden">
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">生态合作伙伴</span>&nbsp;
      <span class="font-size-[12px]">Ecological partner</span>
    </div>
    <div class="w-full flex flex-wrap">
      <a
        v-for="(item, index) in phoneList1" :key="index" :href="item.url" class="h-full w-16%"
        :class="index % 5 === 0 ? '' : 'ml4%'"
      >
        <img class="h-full w-full" :src="item.image1">
      </a>
    </div>
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">战略合作媒体</span>&nbsp;
      <span class="font-size-[12px]">Strategic cooperative media</span>
    </div>
    <div class="w-full flex flex-wrap justify-between">
      <a v-for="(item, index) in strategicCooperativeMediaList" :key="index" :href="item.url" class="h-full w-22%">
        <img class="h-full w-full" :src="item.image1">
      </a>
    </div>
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">合作媒体</span>&nbsp;
      <span class="font-size-[12px]">Partner Media</span>
    </div>
    <div class="w-full flex flex-wrap justify-between">
      <a v-for="(item, index) in newsMediaList1" :key="index" :href="item.url" class="h-full w-22%">
        <img class="h-full w-full" :src="item.image1">
      </a>
    </div>
    <div v-if="flag" class="w-full flex flex-wrap justify-between">
      <a v-for="(item, index) in newsMediaList2" :key="index" :href="item.url" class="mt20px h-full w-22%">
        <img class="h-full w-full" :src="item.image1">
      </a>
    </div>
    <el-button class="ml40%" @click="changeFlag">
      {{ buttonName }}
    </el-button>
  </div>
</template>

<style scoped></style>
