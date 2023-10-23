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
    document.querySelector(".arrow-cursor").style.opacity = "0"
  },
  methods:{
 
  }
  
}

</script>

<template>

  <main class="responsive">
    
     
      <div>
        <h1>About</h1>
        <img src="src\assets\img\profile.jpg" alt="">
        <p id="about-text"> Hello, I’m Pauline Wahle - user experience designer and frontend developer.
Coming from a degree in graphic design, and a following degree focusing on digital spaces with studies in user experience and front-end development, I draw from a wholistic view on design, usability and technology. Always considering the usability aspect, I find it fascinating to explore and reimagine digital spaces in new ways that surprise, simplify and create lasting impressions. By taking opportunities to establish original ideas, each design can get a unique look and feel. My basis for both design and development is creative thinking, to stay flexible, keep moving and find alternative paths.</p>

        <p>
        About this site<br> 
        This is a Vue.js project designed and developed by ©Pauline Wahle, 2023. <br>No content is used for commercial purposes.
    </p>
    <i ><a :style="{ 'font-size': '.7rem' }" target="_blank" href="https://github.com/paulinewahle/WebPortfolio"> View the code on Github </a></i>

    <div id="wrapper">
          <div>
            <h2> Design </h2>
            <a href="https://www.behance.net/paulinewahle1" target="_blank"> Behance </a>
            <a href="https://dribbble.com/PaulineWahle" target="_blank"> Dribble </a>
            <a href="https://www.pinterest.de/PaulineWahle/" target="_blank"> Pinterest </a>
          </div>
          <div>
            <h2> Code </h2>
            <a target="_blank" href="https://github.com/paulinewahle"> Github </a>
            <a target="_blank" href="https://codepen.io/PaulineWahle"> Codepen </a>
            <h2> Experience </h2>
            <a target="_blank" href="https://www.linkedin.com/in/paulinewahle/"> LinkedIn </a>
          </div>
        </div>
      </div>
      
    

  </main>

  <main class="desktop">
    <div class="section" :style="{ 'justify-content': 'space-between' }"> 
      <div class="line"></div>
      <h1>About</h1>
      <div id="about-site">
        <p :style="{ 'font-size': '.7rem' }">
        About this site<br> 
        This is a Vue.js project designed and developed by ©Pauline Wahle, 2023. <br>No content is used for commercial purposes.
        </p>
        <i ><a :style="{ 'font-size': '.7rem' }" target="_blank" href="https://github.com/paulinewahle/WebPortfolio"> View the code on Github </a></i>
    </div>
    </div>
    <div id="about" class="section">
      <div class="line"></div>
      <div id="about-img"></div>
      <p id="about-text"> Hello, I’m Pauline Wahle - user experience designer and frontend developer.
Coming from a degree in graphic design, and a following degree focusing on digital spaces with studies in user experience and front-end development, I draw from a wholistic view on design, usability and technology. Always considering the usability aspect, I find it fascinating to explore and reimagine digital spaces in new ways that surprise, simplify and create lasting impressions. By taking opportunities to establish original ideas, each design can get a unique look and feel. My basis for both design and development is creative thinking, to stay flexible, keep moving and find alternative paths.</p>
    </div>
    <div id="about-links" class="section">
      <div id="links-wrapper">
        <div class="line"></div>
        <div class="link-container">
          <h2> Design </h2>
          <div class="so-me-link">
            <a href="https://www.behance.net/paulinewahle1" target="_blank" class="about-link"><p> Behance <p class="responsive arrow">&#8227;</p> </p></a>
            <a href="https://dribbble.com/PaulineWahle" target="_blank" class="about-link"><p> Dribble <p class="responsive arrow">&#8227;</p> </p></a>
            <a href="https://www.pinterest.de/PaulineWahle/" target="_blank" class="about-link"><p> Pinterest <p class="responsive arrow">&#8227;</p> </p></a>
          </div>
        </div>
        <div class="line"></div>
        <div  class="link-container">
          <h2> Code </h2>
          <div class="so-me-link">
            <a target="_blank" href="https://github.com/paulinewahle" class="about-link" ><p> Github <p class="responsive arrow">&#8227;</p> </p></a>
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
            <a target="_blank" href="mailto:pauline.wahle@web.de" class="about-link"><p>Pauline.wahle@web.de</p></a>
          </div>
        </div>
      </div>
    </div>
  </main>

</template>

<style scoped>

@media (min-width: 200px) {
  #wrapper{
    display: flex;
    justify-content: space-around;
    margin-top: 20%;
  }
  img{
    height: 100%;
    width: 40%;
    margin: 5%;
  }
  a{
    font-style: italic;
    display: block;
    margin: 2% 0;
    border: none;
  }
  h2{
    margin: 10% 10% 10% 0;
  }
  
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
    height: 5rem;
  }
  h2{
    margin: 0;
  }
  .so-me-link{
    display: flex;
    width: 50%;
    justify-content: flex-end;
  }
  a{
    margin: 0 5%;
  }

  #about{
    height: 100%;
    padding: 0 0 0 0%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #about-text{
    padding: 0 10% 0 0;
  }
  #about-site{
    width: 50%;
  }
}

</style>
