<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},
data() {
  return {
    casename: 'Concreate',
    casetext: 'The CONCREATE zine is an exploration of brutalist style across graphic design, architecture, art, typography and web design. The one-time project was completed by five students from Jönköping University in 2021. ',
    caselink: '/cases/concreate/concreate.epub',
    caselinktext: 'Get the e-Publication',
    content1: '/cases/concreate/Concreate_1.jpg',
    content2: '/cases/concreate/Concreate_2.jpg',
    content3: '/cases/concreate/Concreate_3.jpg',
    content4: '/cases/concreate/Concreate_4.jpg',
    content5: '/cases/concreate/Concreate_5.mp4',
    content6: '/cases/concreate/Concreate _6.jpg',
    content7: '/cases/concreate/Concreate _7.jpg',
  }
}
}
</script>
<template>
<div>
  <Case 
  :casename="casename" 
  :casetext="casetext" 
  :caselink="caselink" 
  :caselinktext="caselinktext"
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