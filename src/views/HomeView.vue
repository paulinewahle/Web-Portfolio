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
    document.querySelector(".arrow-cursor").style.opacity = "0";
    setTimeout(() => {
      this.isLoading = false;
    }, 15000);

    

    window.onscroll = function() {scrollTransition()};
    function scrollTransition() {
      if (document.documentElement.scrollTop < 300) {
        document.getElementById("home-title").style.opacity = "1";
        document.getElementById("scrollbutton").style.opacity = "1";
      }
      else if (document.documentElement.scrollTop > 300){
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
      let scrollPercentRounded = Math.round(scrollPercent * 123);
      percentLabel.innerHTML = scrollPercentRounded;
    });
  }
}
</script>

<template>

    <main>
      <div class="home-view start-view" id="landing">
        <h1 id="home-title">
          UI/UX <br> Design
          <br class="desktop"> <br>
          <div class="line"> </div>
          <br class="desktop"> 
          Frontend <br> Code
        </h1>
          <a href="#work" class="desktop" id="scrollbutton">Scroll to continue . . .</a>
      
          <p id="scroll-percentage" class="desktop">
            <span id="percent">0</span>%
          </p>

          <div class="responsive">
          <RouterLink to="/work" id="entrance-link"> View Portfolio  </RouterLink>
          <p :style="{ 'font-size': '.5em'}"> Curious to see this site on desktop? </p>
          </div>

      </div>
      
    </main>

    <div id="work" class="desktop">
      <WorkView />
    </div>
    
    <Sphere />
  

</template>

<style scoped>
@media (min-width: 200px) {

  #home-title {
    width: 100%;
    margin: 10vh 0 0 0;
    position: relative;
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
    font-weight: 100;
    z-index: 0;
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
  main{
    max-height: 200vh;
  }
  h1{
    font-size: 3rem;;
  }
  .home-view{
    height: 60vh;
    width: 90vw;
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
    height: 20vh;
    width: auto;
    left: 5vw;
    top: 30vh;
  }
  #scrollbutton{
    position: fixed;
    z-index: 150;
    width: 20vw;
    left: 76vw;
    top: 90vh;
    font-size: 1rem;
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
    font-size: 1rem;
  }
 
}  

</style>