<script lang>

export default {
    props: {
        casename: String,
        casetext: String,
        content1: String,
        content2: String,
        content3: String,
        content4: String,
    },
    // props:[
    //     'casename'
    // ],

  components: {
  },
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      currentTransition: '',
    }
  },
  mounted(){

    document.querySelector("#page-container").style.display = "block";
    document.querySelector("#page-container").style.opacity = "1";

    const hideArrowCursor = () => {
      document.querySelector(".arrow-cursor").style.opacity = "0";
      document.querySelector(".cursor").style.scale = "1";
    }
    const showArrowCursor = () => {
      document.querySelector(".arrow-cursor").style.opacity = "1";
      document.querySelector(".cursor").style.scale = "0";
    }

    document.querySelector("#page-container").addEventListener("mouseover", showArrowCursor);
    document.querySelector("#page-container").addEventListener("mouseleave", hideArrowCursor);
    document.querySelector("#page-numbers").addEventListener("mouseover", hideArrowCursor);
    document.querySelector("#page-numbers").addEventListener("mouseleave", showArrowCursor);
    

    const mouseDown = (e) => {
        let x = e.clientX;
        let screenHalf = window.screen.width/2
        if(x < screenHalf){
          this.currentTransition = 'left';
          if(this.show1 === true){
            this.show1 = false,
            this.show7 = true
          }
          else if(this.show2 === true){
            this.show2 = false,
            this.show1 = true
          }
          else if(this.show3 === true){
            this.show3 = false,
            this.show2 = true
          }
          else if(this.show4 === true){
            this.show4 = false,
            this.show3 = true
          }
          else if(this.show5 === true){
            this.show5 = false,
            this.show4 = true
          }
          else if(this.show6 === true){
            this.show6 = false,
            this.show5 = true
          }
          else if(this.show7 === true){
            this.show7 = false,
            this.show6 = true
          }
          else if(this.show8 === true){
            this.show8 = false,
            this.show7 = true
          }
          else if(this.show9 === true){
            this.show9 = false,
            this.show8 = true
          }
        }
        else if(x > screenHalf){
          this.currentTransition = 'right';
          if(this.show1 === true){
            this.show1 = false,
            this.show2 = true
          }
          else if(this.show2 === true){
            this.show2 = false,
            this.show3 = true
          }
          else if(this.show3 === true){
            this.show3 = false,
            this.show4 = true
          }
          else if(this.show4 === true){
            this.show4 = false,
            this.show5 = true
          }
          else if(this.show5 === true){
            this.show5 = false,
            this.show6 = true
          }
          else if(this.show6 === true){
            this.show6 = false,
            this.show7 = true
          }
          else if(this.show7 === true){
            this.show7 = false,
            this.show8 = true
          }
          else if(this.show8 === true){
            this.show8 = false,
            this.show9 = true
          }
          else if(this.show9 === true){
            this.show9 = false,
            this.show1 = true
          }
        }           
    }
    
    const pageContainer = document.getElementById("page-container");
    pageContainer.addEventListener("click", mouseDown);

  },
  methods:{

  }
  
}

</script>

<template>

  <div class="responsive">
  <h1>{{casename}}</h1> 
  <p>{{casetext}}</p>
    <div id="responsive-container">
      <img class="resp-case-img" alt="" src="/src/assets/cases/hitech/_Hitech3.jpg"> 
      <img class="resp-case-img" alt="" src="/src/assets/cases/hitech/_Hitech4.jpg"> 
      <img class="resp-case-img" alt="" src="/src/assets/cases/hitech/_Hitech5.jpg"> 
      <img class="resp-case-img" alt="" src="/src/assets/cases/hitech/_Hitech6.jpg"> 
      <img class="resp-case-img" alt="" src="/src/assets/cases/hitech/_Hitech7.jpg"> 
      <img class="resp-case-img" alt="" src="/src/assets/cases/hitech/_Hitech8.jpg"> 
      <img class="resp-case-img" alt="" src="/src/assets/cases/hitech/_Hitech9.jpg"> 
    </div>
  </div>
  <div class="desktop">
    <router-link to="/home#work" class="back"> Back to selected work</router-link>
    
    <div id="page-container">
        <h1>{{casename}}</h1>
        <p>{{casetext}}</p>
        
        <Transition :name="this.currentTransition">
        <div v-if="show1" class="page" id="page1">
            <img :src="content2" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="show2" class="page" id="page2">
        <video  autoplay loop muted>
            <source :src="content1">
        </video>
        </div>
        </Transition>
        <Transition  :name="this.currentTransition">
        <div v-if="show3" class="page" id="page3">
        <div alt="zine-image" class="img img1"></div>
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="show4" class="page" id="page4">
        <div alt="zine-image" class="img img2"></div>
        </div>
        </Transition>
        <Transition :name="currentTransition">
        <div v-if="show5" class="page" id="page5">
        <div alt="zine-image" class="img img3"></div>
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="show6" class="page" id="page6">
        <div alt="zine-image" class="img img4"></div>
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="show7" class="page" id="page7">
        <div alt="zine-image" class="img img5"></div>
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="show8" class="page" id="page8">
        <div alt="zine-image" class="img img6"></div>
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="show9" class="page" id="page9">
        <div alt="zine-image" class="img img7"></div>
        </div>
        </Transition>
    </div>
    <div id="page-numbers">
      <button @click="show2 = false; show3 = false; show4 = false; show5 = false; show6 = false; show7 = false; show8 = false; show9 = false; show1 = true;" id="page-number-1">1 <div class="line"></div></button>
      <button @click="show1 = false; show3 = false; show4 = false; show5 = false; show6 = false; show7 = false; show8 = false; show9 = false; show2 = true;" id="page-number-2">2</button>
      <button @click="show1 = false; show2 = false; show4 = false; show5 = false; show6 = false; show7 = false; show8 = false; show9 = false; show3 = true;" id="page-number-3">3</button>
      <button @click="show1 = false; show2 = false; show3 = false; show5 = false; show6 = false; show7 = false; show8 = false; show9 = false; show4 = true;" id="page-number-4">4</button>
      <button @click="show1 = false; show2 = false; show3 = false; show4 = false; show6 = false; show7 = false; show8 = false; show9 = false; show5 = true;" id="page-number-5">5</button>
      <button @click="show1 = false; show2 = false; show3 = false; show4 = false; show5 = false; show7 = false; show8 = false; show9 = false; show6 = true;" id="page-number-6">6</button>
      <button @click="show1 = false; show2 = false; show3 = false; show4 = false; show5 = false; show6 = false; show8 = false; show9 = false; show7 = true;" id="page-number-7">7</button>
      <!--<button @click="show1 = false; show2 = false; show3 = false; show4 = false; show5 = false; show6 = false; show7 = false; show9 = false; show8 = true;" id="page-number-8">8</button>
      <button @click="show1 = false; show2 = false; show3 = false; show4 = false; show5 = false; show6 = false; show7 = false; show8 = false; show9 = true;" id="page-number-9">9</button> -->
    </div>
  </div>

</template>

<style scoped>
@media (min-width: 200px) {

}
@media (min-width: 992px) {
  h1, p{
    position: absolute;
    left: 5vw;
  }
  h1{
    top: 50vh;
  }
  p{
    top: 65vh;
    width: 20%;
    text-indent: none;
  }
  #page-container{
    width: 90vw;
    height: 60vh;
    box-sizing: border-box;
    overflow: hidden;
  }
  .page{
    position: absolute;
    box-sizing: border-box;
    height: inherit;
    width: 90vw;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  img, video{
    height: 100%;
    margin: 0;
  }
  #page-numbers{
    position: absolute;
    top: 90vh;
    left: 73vw;
    width: 50%;
    display: flex;
  }
  button{
    border: none;
    margin: 1%;
    width: 2vw;
    display: flex;
    align-items: center;
  }
  .line{
    width: 0;
  }
  .back{
    position: absolute;
    top: 15vh;
  }
  

}

</style>
