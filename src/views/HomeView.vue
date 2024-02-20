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
      if (document.documentElement.scrollTop > 100) {
        document.getElementById("home-title").style.opacity = "0";
      }
      else if (document.documentElement.scrollTop < 100){
        document.getElementById("home-title").style.opacity = "1";
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
      <a id="webguru" href="https://www.webguruawards.com/sites/paulinewahle-com" target="_blank"></a>
      <div class="home-view start-view" id="landing">
        <h1 id="home-title" class="desktop">
          UI/UX <br> Design
          <br> <br>
          <div class="line"> </div>
          <br> 
          Frontend <br> Code
        </h1>
          <a href="#work" class="desktop" id="scrollbutton">Scroll to continue . . .</a>
      
          <p id="scroll-percentage" class="desktop">
            <span id="percent">0</span>%
          </p>

          <div class="responsive">
          <h1> UI/UX Design
          <div class="line"> </div>
          Frontend Code
          </h1>
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
  #webguru{
    background: url(http://webguruawards.com/awards/GOTD/img_guru_of_the_day_right.png) no-repeat scroll 0 0 rgba(0, 0, 0, 0);
    background-size: contain;
    width: 10vw; 
    height: 20vh;
    position:fixed;
    top: 1vh;
    left: 90vw;
    z-index:99999;
  }
  h1{
    margin: 15vh 0;
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

}
@media (min-width: 992px) {
  #webguru{
    width: 3vw;
    left: 97vw;
  }
  main{
    max-height: 200vh;
  }
  .home-view{
    height: 80vh;
    width: 90vw;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: -20vh;

  } 
  #home-title{
    position: fixed;
    text-align: left;
    width: auto;
    left: 5vw;
    top: 25vh;
    font-size: 3rem;
  }
  #scrollbutton{
    position: fixed;
    z-index: 150;
    width: 20vw;
    left: 70.8vw;
    top: 90vh;
    font-size: 1rem;
  }
  #scroll-percentage{
    position: fixed;
    width: 10vw;
    top: 90vh;
    left: 85vw;
    z-index: 150;
    text-align: start;
    margin: 0;
    font-size: 1rem;
  }
 
}  

</style>