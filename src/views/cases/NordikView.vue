<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},

data() {
  return {
    casename: 'Nordik',
    casetext: 'Nordik is a webshop concept created in the course of the dailyUI challenge. See more its projects on Dribble.',
    content1: '/src/assets/cases/gamel/_Gamel1.mp4',
    content2: '/src/assets/cases/nordik/Nordik Landing.png',
    content3: '/src/assets/cases/nordik/Nordik Product.png',
    content4: 'src/assets/cases/nordik/Nordik Landing.png',
    content6: 'src/assets/cases/nordik/Nordik Landing.png',
    content7: 'src/assets/cases/nordik/Nordik Landing.png',
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