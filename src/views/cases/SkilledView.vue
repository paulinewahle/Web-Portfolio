<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},
data() {
  return {
    casename: 'Skilled',
    casetext: 'Flat responsive UI/UX design concept with minimalistic vector line illustrations.',
    content1: '/src/assets/cases/skilled/Skilled_1.mp4',
    content2: '/src/assets/cases/skilled/Skilled_2.jpg',
    content3: '/src/assets/cases/skilled/Skilled_3.jpg',
    content4: '/src/assets/cases/skilled/Skilled_4.jpg',
    content5: '/src/assets/cases/skilled/Skilled_5.mp4',
    content6: '/src/assets/cases/skilled/Skilled_6.jpg',
    content7: '/src/assets/cases/skilled/Skilled_7.jpg'
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