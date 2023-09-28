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

  
  <main>
    
    <div id="about-links" class="section">
      
      <div id="links-wrapper">
        <div class="line"></div>
        <div @mouseover="width2 = '80%'" @mouseleave="width2 = '40%'">
          <h3> Design </h3>
          <a target="_blank" class="about-link"><p> Behance <p class="responsive arrow">&#8227;</p> </p></a>
          <a target="_blank" class="about-link"><p> Pinterest <p class="responsive arrow">&#8227;</p> </p></a>
        </div>
        <div class="line"></div>
        <div>
          <h3> Code </h3>
          
          <a target="_blank" href="https://codepen.io/PaulineWahle" class="about-link" @mouseover="width3 = '80%'" @mouseleave="width3 = '40%'"><p> Github <p class="responsive arrow">&#8227;</p> </p></a>
          <a target="_blank" href="https://codepen.io/PaulineWahle" class="about-link"><p> CodePen<p class="responsive arrow">&#8227;</p> </p></a>
        </div>
        <div class="line"></div>
        <div @mouseover="width1 = '80%'" @mouseleave="width1 = '40%'">
          <h3> Experience <br>& Education </h3>
          <a  target="_blank" href="https://www.linkedin.com/in/paulinewahle/" class="about-link"><p> LinkedIn<p class="responsive arrow">&#8227;</p> </p></a>
        </div>
      </div>

      
      <div target="_blank" href = "mailto:pauline.wahle@web.de" @mouseover="width1 = '80%'" @mouseleave="width1 = '40%'">
        <div class="line"></div>  
        <h3> Get In Touch<span class="responsive">:</span></h3>
          <a class="about-link"><p> Pauline.wahle@web.de<p class="responsive arrow">&#8227;</p> </p></a>
      </div>


    </div>
    <div class="section">
      <div id="about-img"></div>
    </div>

    <div id="about-text" class="section">
      <p>
        Hello, I’m Pauline Wahle - creative designer and developer.<br> Coming from a German degree in graphic and object design, I continued to focus on digital spaces with studies in user experience and front-end development. Always considering usability aspects, I find it fascinating to explore and reimagine digital spaces in new ways that surprise, entertain, simplify and create lasting impressions. By taking opportunities to establish original ideas, each design can get a unique look and feel. With a wholistic design sense of shape and space from experience in both disciplines, the lines between conventional and interactive design are blurry, both can profit from each other. My basis for both design and development is creative thinking, to stay flexible, keep moving and find alternative paths. 
      </p> 
    </div>

      <div id="about-site" :style="{ 'font-size': '.7em' }">
        <div class="line"></div>
          <p>
          <b>About this site</b> <br> 
          This is a Vue.js project designed and developed by ©Pauline Wahle, 2023. 
          </p>
          <i><a target="_blank" href="https://github.com/paulinewahle/WebPortfolio"> View the code on Github </a></i>
      </div>
  </main>

</template>

<style scoped>

@media (min-width: 200px) {
  
}
@media (min-width: 992px) {
  main{
    height: 60vh;
    width: 90vw;
    display: flex;
  }
  #about-links{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 5% 0 0;
  }
  #about-img{
    height: 100%;
    width: 100%;
    background-image: url('/src/assets/img/profile.jpg');
    background-position: center top;
    background-size: cover;
    transition: all .5s ease;
  }
  #about-text{
    height: 100%;
    padding: 0 0 0 5%;
  }
  #about-site{
    position: absolute;
    top: 90vh;
    left: 70vw;
  }
}

</style>
