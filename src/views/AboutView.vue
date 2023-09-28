<script>
import PageNumberStyle from '@/assets/pagenumbers.css'

export default {
  props:{
    caseNav: Array
  },
  components: {
  },
  data() {
    return {
      show1: true,
      show2: false,
      width1: "40%",
      width2: "40%",
      width3: "40%",
      width4: "40%",
      width5: "40%",
    }
  },
  mounted(){
    let container = document.querySelector("#container")
    document.querySelector(".text-cursor").style.opacity = "0"
    this.caseNav.push("hideSoMe")
  },
  methods:{
 
  }
  
}

</script>

<template>

  
  <div id="container">
    
    <div id="about-links" class="section">
      
      <div id="links-wrapper">
        <div @mouseover="width2 = '80%'" @mouseleave="width2 = '40%'">
          <h2> Design </h2>
          <div target="_blank" class="about-link"><div class="line" :style="{ 'width': width4 }"></div><p> Behance <p class="responsive arrow">&#8227;</p> </p></div>
          <div target="_blank" class="about-link"><div class="line" :style="{ 'width': width5 }"></div><p> Pinterest <p class="responsive arrow">&#8227;</p> </p></div>
        </div>
        <div @mouseover="width3 = '80%'" @mouseleave="width3 = '40%'">
          <h2> Code </h2>
          <div class="about-link"><div class="line" :style="{ 'width': width2 }"></div><p> Github <p class="responsive arrow">&#8227;</p> </p></div>
          <a target="_blank" href="https://codepen.io/PaulineWahle" class="about-link"><div class="line" :style="{ 'width': width3 }"></div><p> CodePen<p class="responsive arrow">&#8227;</p> </p></a>
        </div>
        <div @mouseover="width1 = '80%'" @mouseleave="width1 = '40%'">
          <h2> Experience <br>& Education </h2>
          <a  target="_blank" href="https://www.linkedin.com/in/paulinewahle/" class="about-link"><div class="line" :style="{ 'width': width1 }"></div><p> LinkedIn<p class="responsive arrow">&#8227;</p> </p></a>
        </div>
      </div>
      <a target="_blank" href = "mailto:pauline.wahle@web.de" @mouseover="width1 = '80%'" @mouseleave="width1 = '40%'">
          <h2> Get In Touch<span class="responsive">:</span></h2>
          <div class="about-link"><div class="line" :style="{ 'width': width1 }"></div><p> Pauline.wahle@web.de<p class="responsive arrow">&#8227;</p> </p></div>
        </a>
    </div>

    <div id="about-img" class="section">
      <div class="center-img"></div>
    </div>

    <div id="about-text" class="section">
      
      <p>
        Hello, I’m Pauline Wahle - creative designer and developer.<br> Coming from a German degree in graphic and object design, I continued to focus on digital spaces with studies in user experience and front-end development. Always considering usability aspects, I find it fascinating to explore and reimagine digital spaces in new ways that surprise, entertain, simplify and create lasting impressions. By taking opportunities to establish original ideas, each design can get a unique look and feel. With a wholistic design sense of shape and space from experience in both disciplines, the lines between conventional and interactive design are blurry, both can profit from each other. My basis for both design and development is creative thinking, to stay flexible, keep moving and find alternative paths. 
      </p> 
      <br> 
      <p>
        <b>About this site</b> <br> 
        This is a Vue.js project designed and developed by ©Pauline Wahle, 2023. </p><i><a target="_blank" href="https://github.com/paulinewahle/WebPortfolio"> View the code on Github </a></i>
    </div>

  </div>

</template>

<style scoped>

@media (min-width: 200px) {
  
}
@media (min-width: 992px) {
  #container{
    width: 90vw;
    height: 80vh;
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
  }
  .center-img{
    height: 100%;
    width: 100%;
    background-position: center center;
    background-size: cover;
    transition: all .5s ease;
    background-image: url("src/assets/img/profile.jpg");
  }
  p{
    font-size: .9rem;
  }
  
}

</style>
