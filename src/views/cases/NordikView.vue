<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},

data() {
  return {
    casename: 'Nordik',
    casetext: 'Nordik is a webshop concept in minimalistic grid design. With a compact top-down deep information structure the design is user intuitive according to the sites hierarchical task analysis. The Figma project is part of the DailyUI Challenge, more of which to see on Dribble.',
    content1: '/cases/nordik/Nordik_1.mp4',
    content2: '/cases/nordik/Nordik_2.jpg',
    content3: '/cases/nordik/Nordik_3.jpg',
    content4: '/cases/nordik/Nordik_4.jpg',
    content5: '/cases/nordik/Nordik_5.jpg',
    content6: '/cases/nordik/Nordik_6.jpg',
    content7: '/cases/nordik/Nordik_7.jpg',
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