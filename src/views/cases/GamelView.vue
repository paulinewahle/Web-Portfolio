<script>
import Case from "@/components/Case.vue";

export default {
components: {
  Case
},
data() {
  return {
    casename: 'Gamél',
    casetext: 'Flat responsive UI/UX design concept with minimalistic vector line illustrations.',
    casecontent1: '/src/assets/cases/hitech/_Hitech2.mp4'
  }
}
}
</script>
<template>
<div>
  <Case :casename="casename" :casetext="casetext" :casecontent1="casecontent1"/>
</div>
</template>