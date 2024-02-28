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
    let container = document.querySelector("#container");
    document.querySelector(".arrow-cursor").style.display = "none";
    document.querySelector(".text-cursor").style.display = "none"
  },
  methods:{
 
  }
  
}

</script>

<template>

  <main class="responsive">

      <div>
        <!-- <div id="profile-img" >
        </div> -->

        <h1>About</h1>
        
        <p id="about-text"> Hello, I’m Pauline Wahle - user experience designer and frontend developer.
Coming from a degree in graphic design, and a following degree focusing on digital spaces with studies in user experience and front-end development, I draw from a wholistic view on design, usability and technology. Always considering the usability aspect, I find it fascinating to explore and reimagine digital spaces in new ways that surprise, simplify and create lasting impressions. By taking opportunities to establish original ideas, each design can get a unique look and feel. My basis for both design and development is creative thinking, to stay flexible, keep moving and find alternative paths.</p>

        <p>
        About this site<br> 
        This is a Vue.js project designed and developed by ©Pauline Wahle, 2023. <br>No content is used for commercial purposes.
    </p>
    <i ><a target="_blank" href="https://github.com/paulinewahle/WebPortfolio"> View the code on Github </a></i>

    

        <div id="wrapper">
            <h2> Design </h2>
            <div>
              <a href="https://www.behance.net/paulinewahle1" target="_blank"> Behance </a>
              <a href="https://dribbble.com/PaulineWahle" target="_blank"> Dribble </a>
              <a href="https://www.pinterest.de/PaulineWahle/" target="_blank"> Pinterest </a>
            </div>
        </div>
        <div id="wrapper">
              <h2> Code </h2>
              <div>
                <a target="_blank" href="https://github.com/paulinewahle"> Github </a>
                <a target="_blank" href="https://codepen.io/PaulineWahle"> Codepen </a>
              </div>
        </div>
        <div id="wrapper">
            <h2> Experience </h2>
            <a target="_blank" href="https://www.linkedin.com/in/paulinewahle/"> LinkedIn </a>
        </div>
        <div id="wrapper">
            <h2> Recognition </h2>
            <a href="https://www.webguruawards.com/sites/paulinewahle-com" style="background: url(http://webguruawards.com/awards/GOTD/img_guru_of_the_day_gray.png) no-repeat; background-position: center right; background-size: contain; width:80px; height:80px; margin-top: 10%; " target="_blank" class="about-link"></a>
        </div>
        
      </div>
      
  </main>

  <main class="desktop">
    <div class="section"> 
      <h1>About</h1>
    </div>
    <div id="about" class="section">
      <p id="about-text"> Hello, I’m Pauline Wahle - user experience designer and frontend developer. <br>
      Coming from a degree in graphic design, and a following degree focusing on digital spaces with studies in user experience and front-end development, I draw from a wholistic view on design and technology. Always considering the usability aspect, I find it fascinating to explore and reimagine digital spaces in new ways that stand out, simplify and create lasting impressions. By taking opportunities to establish original ideas, each design can get a unique look and feel. My basis for both design and development is creative thinking, to stay flexible, keep moving and find alternative paths.</p>
    <div id="about-site">
        <p :style="{ 'font-size': '.7rem' }">
        About this site<br> 
        No content is used for commercial purposes.
        This is a Vue.js project designed and developed by ©Pauline Wahle, 2023. <br>
        </p>
        <i ><a :style="{ 'margin': '0'  }" target="_blank" href="https://github.com/paulinewahle/WebPortfolio"> View the code on Github </a></i>
    </div>    
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
          <div class="line"></div>
        <div @mouseover="width1 = '80%'" @mouseleave="width1 = '40%'" class="link-container">
          <h2> Recognition </h2>
          <div class="so-me-link">
            <a href="https://www.webguruawards.com/sites/paulinewahle-com" style="background: url(http://webguruawards.com/awards/GOTD/img_guru_of_the_day_gray.png) no-repeat; background-position: center right; background-size: contain; width:80px; height:80px; margin-top: 10%; " target="_blank" class="about-link"></a>
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
  #bg{
    height: 100vh;
    width: 200vw;
    position: absolute;
    z-index: -10;
    object-fit: cover;
    top: 0;
    left: 0;
    opacity: .5;
  }
  #wrapper{
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-top: 10%;
    width: 70%;
  }
  #profile-img{
    background-image: url('/src/assets/img/profile.jpg');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    width: 100%;
    height: 50vh;
    margin: 5% 0 10vh;
  }
  a{
    font-style: italic;
    display: block;
    border: none;
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
    font-style: normal;
    margin: 0 5%;
  }
  a:hover{
    font-style: oblique;
  }

  #about{
    height: 100%;
    padding: 0 5% 0 0;
    display: flex;
    flex-direction: column;
  }
  #about-site{
    width: 100%;
  }
}

</style>
