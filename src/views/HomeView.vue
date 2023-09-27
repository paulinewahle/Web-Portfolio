<script lang>
import Sphere from '@/components/Sphere.vue'
import WorkView from '@/views/WorkView.vue'

export default{
  props:{
    sideNav: Array
  },
  components: {
    Sphere,
    WorkView
  },
  mounted() {
    document.querySelector(".text-cursor").style.opacity = "0";
    setTimeout(() => {
      this.isLoading = false;
    }, 15000);

    

    window.onscroll = function() {scrollTransition()};
    function scrollTransition() {
      if (document.documentElement.scrollTop < 5) {
        document.getElementById("home-title").style.opacity = "1";
        document.getElementById("scrollbutton").style.opacity = "1";
      }
      else if (document.documentElement.scrollTop > 700){
        document.getElementById("scroll-percentage").style.opacity = "1";
        document.getElementById("scrollbutton").style.opacity = "0";
        document.getElementById("home-title").style.opacity = "0";
      }
      else{

      }
    }

    const percentLabel = document.querySelector("#percent");
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let scrollPercent = scrollTop / docHeight;
      let scrollPercentRounded = Math.round(scrollPercent * 200);
      percentLabel.innerHTML = scrollPercentRounded;
    });
  }
}
</script>

<template>
  
  <body>
    <main>
      <div class="home-view start-view" id="scroll-top">
        <h1 id="home-title">
          UI/UX <br> Design
          <br> <br>
          <div id="home-title-line"> </div>
          <br> 
          Frontend <br> Code
        </h1>
          <a href="#nav" class="desktop" id="scrollbutton">Scroll to continue . . .</a>
          
          <p id="scroll-percentage" class="desktop">
            <span id="percent">0</span>%
          </p>
          <div class="responsive">
          <RouterLink to="/work" id="entrance-link"> View Portfolio  </RouterLink>
          <p :style="{ 'font-size': '.5em'}"> Curious to see this site on desktop? </p>
          </div>
      </div>

      
      <!-- <div class="home-view desktop" id="nav">
        <div id="nav-links-home" class="desktop">
          <router-link to="/work" class="desktop">
            work
          </router-link>
          <a class="desktop">-</a>
          <router-link to="/about" class="desktop">
            about
          </router-link>
          </div>
      </div> -->
    </main>
    <WorkView />
    <Sphere />
  </body>

</template>

<style scoped>
@media (min-width: 200px) {
  body{
    max-height: 100vh;
  }
  main{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .home-view{
    height: 80vh;
    width: 80vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    display: flex !important;
  }
  #home-bg{
    position: relative;
    opacity: .7;
    height: 50vh;
    width: 100vw;
  }
  h1{
    position: relative;
    font-size: 2rem;
    font-weight: 100;
  }
  #entrance-link{
    width: 80vw;
    text-align: center;
    border-bottom: 1px solid #292929;
    text-decoration: none;
    display: block;
    font-size: 1.5em;
  }
  p{
    text-indent: 0;
    text-align: center;
  }
  #scroll-up{
    opacity: 0;
  }
}
@media (min-width: 992px) {
  
  body{
    max-height: 200vh;
    background-color: #fafafa;
  }
  .home-view{
    height: 100vh;
    width: 100vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  } 
  #home-title{
    position: fixed;
    text-align: left;
    left: 5vw;
  }
  #home-title-line{
    height: 2px;
    width: 100%;
    background-color: black;
  }
  #scrollbutton{
    position: fixed;
    z-index: 150;
    width: 20vw;
    left: 76vw;
    top: 90vh;
  }
  #scroll-percentage{
    position: fixed;
    width: 10vw;
    top: 90vh;
    left: 88vw;
    z-index: 150;
    text-align: start;
    margin: 0;
    opacity: 0;
  }
 
}  
</style>