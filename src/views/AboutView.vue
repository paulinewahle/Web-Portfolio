<script>


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
    
    <div class="section">
      
    </div>
    
    <div id="about" class="section">
      <div class="line"></div>
      <div id="about-img"></div>
      <p id="about-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div id="about-links" class="section">
      <div id="links-wrapper">
        <div class="line"></div>
        <div class="link-container">
          <h2> Design </h2>
          <div class="so-me-link">
            <a target="_blank" class="about-link"><p> Behance <p class="responsive arrow">&#8227;</p> </p></a>
            <a target="_blank" class="about-link"><p> Dribble <p class="responsive arrow">&#8227;</p> </p></a>
            <a target="_blank" class="about-link"><p> Pinterest <p class="responsive arrow">&#8227;</p> </p></a>
          </div>
        </div>
        <div class="line"></div>
        <div  class="link-container">
          <h2> Code </h2>
          <div class="so-me-link">
            <a target="_blank" href="https://codepen.io/PaulineWahle" class="about-link" @mouseover="width3 = '80%'" @mouseleave="width3 = '40%'"><p> Github <p class="responsive arrow">&#8227;</p> </p></a>
            <a target="_blank" href="https://codepen.io/PaulineWahle" class="about-link"><p> CodePen<p class="responsive arrow">&#8227;</p> </p></a>
          </div>
        </div>
        <div class="line"></div>
        <div @mouseover="width1 = '80%'" @mouseleave="width1 = '40%'" class="link-container">
          <h2> Experience </h2>
          <div class="so-me-link">
            <a  target="_blank" href="https://www.linkedin.com/in/paulinewahle/" class="about-link"><p> LinkedIn<p class="responsive arrow">&#8227;</p> </p></a>
          </div>
          </div>
      </div>

      <div  href = "mailto:pauline.wahle@web.de">
        <div class="line"></div>  
        <div  class="link-container">
          <h2> Get In Touch<span class="responsive">:</span></h2>
          <div class="so-me-link">
            <a target="_blank" class="about-link"><p>Pauline.wahle@web.de<p class="responsive arrow">&#8227;</p> </p></a>
          </div>
        </div>
      </div>
    </div>

    <div id="about-site" :style="{ 'font-size': '.7em' }">
      
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
    padding: 0 0 0 0;
  }
  .link-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
  }
  .so-me-link{
    display: flex;
    width: 50%;
    justify-content: flex-end;
  }
  a{
    margin: 0 5%;
  }
  #about-img{
    height: 38%;
    width: 40%;
    background-image: url('/src/assets/img/profile.jpg');
    background-position: center top;
    background-size: cover;
  }
  #about{
    height: 100%;
    padding: 0 0 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #about-text{
    padding: 0 20% 0 0;
  }
  #about-site{
    position: absolute;
    top: 90vh;
    left: 65vw;
    width: 25vw;
  }
}

</style>
