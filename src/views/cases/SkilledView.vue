<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},
data() {
  return {
    casename: 'Skilled',
    casetext: 'Skilled is the concept of an educational platform app with all aspects reduced to the optimal usability. The user experience is build on a brand identity in flat primary blue duotone design with an icon category system in vector line style. ',
    content1: '/cases/skilled/Skilled_1.mp4',
    content2: '/cases/skilled/Skilled_2.jpg',
    content3: '/cases/skilled/Skilled_3.jpg',
    content4: '/cases/skilled/Skilled_4.jpg',
    content5: '/cases/skilled/Skilled_5.mp4',
    content6: '/cases/skilled/Skilled_6.jpg',
    content7: '/cases/skilled/Skilled_7.jpg'
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