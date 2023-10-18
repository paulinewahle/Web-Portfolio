<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},

data() {
  return {
    casename: 'HiTech',
    casetext: 'Nordik is a webshop concept created in the course of the dailyUI challenge. See more its projects on Dribble.',
    content1: '/src/assets/cases/hitech/Hitech_1.jpg',
    content2: '/src/assets/cases/hitech/Hitech_2.mp4',
    content3: '/src/assets/cases/hitech/Hitech_3.jpg',
    content4: '/src/assets/cases/hitech/Hitech_4.jpg',
    content5: '/src/assets/cases/hitech/Hitech_5.jpg',
    content6: '/src/assets/cases/hitech/Hitech_6.jpg',
    content7: '/src/assets/cases/hitech/Hitech_7.mp4',
  }
}
}
</script>
<template>
<div>
  <Case 
  :casename="casename" 
  :casetext="casetext" 
  :content1="content1"
  :content2="content2"
  :content3="content3"
  :content4="content4"
  :content5="content5"
  :content6="content6"
  :content7="content7"
  />
</div>
</template>