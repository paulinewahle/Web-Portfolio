<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},
data() {
  return {
    casename: 'Gamél',
    casetext: 'The web presence of the danish production agency Gamél centralises its photo- and videographic content in the modern minimalist grid style design in muted tones and with attention to detail elements in the animation of user interaction points such as buttons, cursor, sliders and overlays. The project build in CMS with custom code and launched July 2022. ',
    content1: '/src/assets/cases/gamel/Gamel_1.mp4',
    content2: '/src/assets/cases/gamel/Gamel_2.mp4',
    content3: '/src/assets/cases/gamel/Gamel_3.mp4',
    content4: '/src/assets/cases/gamel/Gamel_4.jpg',
    content5: '/src/assets/cases/gamel/Gamel_5.mp4',
    content6: '/src/assets/cases/gamel/Gamel_6.mp4',
    content7: '/src/assets/cases/gamel/Gamel_7.mp4'
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