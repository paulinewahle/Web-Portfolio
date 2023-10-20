<script lang>

export default {
    props: {
        casename: String,
        casetext: String,
        content1: String,
        content2: String,
        content3: String,
        content4: String,
        content5: String,
        content6: String,
        content7: String,
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
            this.show7 = true,
            document.querySelector('#page-number-1').classList.add("active-page-btn");
          }
          else if(this.show2 === true){
            this.show2 = false,
            this.show1 = true,
            document.querySelector('#page-number-2').classList.add("active-page-btn");
          }
          else if(this.show3 === true){
            this.show3 = false,
            this.show2 = true,
            document.querySelector('#page-number-3').classList.add("active-page-btn");
          }
          else if(this.show4 === true){
            this.show4 = false,
            this.show3 = true,
            document.querySelector('#page-number-4').classList.add("active-page-btn");
          }
          else if(this.show5 === true){
            this.show5 = false,
            this.show4 = true,
            document.querySelector('#page-number-5').classList.add("active-page-btn");
          }
          else if(this.show6 === true){
            this.show6 = false,
            this.show5 = true,
            document.querySelector('#page-number-6').classList.add("active-page-btn");
          }
          else if(this.show7 === true){
            this.show7 = false,
            this.show6 = true,
            document.querySelector('#page-number-7').classList.add("active-page-btn");
          }
        }
        else if(x > screenHalf){
          this.currentTransition = 'right';
          if(this.show1 === true){
            this.show1 = false,
            this.show2 = true,
            document.querySelector('#page-number-1').classList.remove("active-page-btn");
          }
          else if(this.show2 === true){
            this.show2 = false,
            this.show3 = true,
            document.querySelector('#page-number-2').classList.remove("active-page-btn");
          }
          else if(this.show3 === true){
            this.show3 = false,
            this.show4 = true,
            document.querySelector('#page-number-3').classList.remove("active-page-btn");
          }
          else if(this.show4 === true){
            this.show4 = false,
            this.show5 = true,
            document.querySelector('#page-number-4').classList.remove("active-page-btn");
          }
          else if(this.show5 === true){
            this.show5 = false,
            this.show6 = true,
            document.querySelector('#page-number-5').classList.remove("active-page-btn");
          }
          else if(this.show6 === true){
            this.show6 = false,
            this.show7 = true,
            document.querySelector('#page-number-6').classList.remove("active-page-btn");
          }
          else if(this.show7 === true){
            this.show7 = false,
            this.show1 = true,
            document.querySelector('#page-number-7').classList.remove("active-page-btn");
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

  <router-link to="/work" class="work-link">BACK</router-link>
  <h1>{{casename}}</h1> 
  <p>{{casetext}}</p>
  
    <div class="responsive">
      <video  autoplay loop muted>
        <source :src="content1">
      </video>
      <img :src="content1" alt="">

      <video  autoplay loop muted>
        <source :src="content2">
      </video>
      <img :src="content2" alt="">

      <video  autoplay loop muted>
        <source :src="content3">
      </video>
      <img :src="content3" alt="">

      <video  autoplay loop muted>
        <source :src="content4">
      </video>
      <img :src="content4" alt="">

      <video  autoplay loop muted>
        <source :src="content5">
      </video>
      <img :src="content5" alt="">

      <video  autoplay loop muted>
        <source :src="content6">
      </video>
      <img :src="content6" alt="">

      <video  autoplay loop muted>
        <source :src="content7">
      </video>
      <img :src="content7" alt="">
    </div>
  </div>
  <div class="desktop">
    <router-link to="/home#work" class="back"> Back to selected work</router-link>
    
    <div id="page-container">
        <h1>{{casename}}</h1>
        <p>{{casetext}}</p>
        <a :href="caselink" download></a>

        <Transition :name="this.currentTransition">
        <div v-if="show1" class="page" id="page1">
          <video  autoplay loop muted>
            <source :src="content1">
          </video>
          <img :src="content1" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="show2" class="page" id="page2">
          <video  autoplay loop muted>
            <source :src="content2">
          </video>
          <img :src="content2" alt="">
        </div>
        </Transition>
        <Transition  :name="this.currentTransition">
        <div v-if="show3" class="page" id="page3">
          <video  autoplay loop muted>
            <source :src="content3">
          </video>
          <img :src="content3" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="show4" class="page" id="page4">
          <video  autoplay loop muted>
            <source :src="content4">
          </video>
          <img :src="content4" alt="">
        </div>
        </Transition>
        <Transition :name="currentTransition">
        <div v-if="show5" class="page" id="page5">
          <video  autoplay loop muted>
            <source :src="content5">
          </video>
          <img :src="content5" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="show6" class="page" id="page6">
          <video  autoplay loop muted>
            <source :src="content6">
          </video>
          <img :src="content6" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="show7" class="page" id="page7">
          <video  autoplay loop muted>
            <source :src="content7">
          </video>
          <img :src="content7" alt="">
        </div>
        </Transition>
    </div>
    <div id="page-numbers">
      <button @click="show2 = false; show3 = false; show4 = false; show5 = false; show6 = false; show7 = false; show1 = true;" id="page-number-1">1</button>
      <button @click="show1 = false; show3 = false; show4 = false; show5 = false; show6 = false; show7 = false; show2 = true;" id="page-number-2">2</button>
      <button @click="show1 = false; show2 = false; show4 = false; show5 = false; show6 = false; show7 = false; show3 = true;" id="page-number-3">3</button>
      <button @click="show1 = false; show2 = false; show3 = false; show5 = false; show6 = false; show7 = false; show4 = true;" id="page-number-4">4</button>
      <button @click="show1 = false; show2 = false; show3 = false; show4 = false; show6 = false; show7 = false; show5 = true;" id="page-number-5">5</button>
      <button @click="show1 = false; show2 = false; show3 = false; show4 = false; show5 = false; show7 = false; show6 = true;" id="page-number-6">6</button>
      <button @click="show1 = false; show2 = false; show3 = false; show4 = false; show5 = false; show6 = false; show7 = true;" id="page-number-7">7</button>
    </div>
  </div>

</template>

<style scoped>
@media (min-width: 200px) {
  img, video{
    width: 100%;
    height: auto;
  }
  h1{
    margin-top: 10vh;
  }
}
@media (min-width: 992px) {
  h1, p{
    position: absolute;
    left: 5vw;
    z-index: 100;
    margin: 0;
  }
  h1{
    top: 40vh;
    left: 0;
    margin: 0;
  }
  p{
    top: 55vh;
    left: 0;
    width: 20%;
    text-indent: none;
  }
  #page-container{
    /* width: 90vw;
    height: 90vh; */
    box-sizing: border-box;
    overflow: hidden;
    top: 10vh;
    height: 80vh;
    width: 90vw;
    position: absolute;
  }
  .page{
    position: absolute;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 80vh;
    width: 90vw;
  }
  img, video{
    height: 100%;
    width: auto;
    margin: 0;
  }

  #page-numbers{
    position: absolute;
    top: 92vh;
    left: 70vw;
    width: 20%;
    display: flex;
    justify-content: end;

  }
  button{
    border: none;
    margin: 1%;
    width: 1vw;
    display: flex;
    align-items: center;
    font-size: 1.2em;
    transition: 1s all ease;
  }
  .active-page-btn{
    width: 2.5vw;
    color: red;
    border: 1px solid;
    font-weight: 900;
  }
  .active-page-btn::before{
    height: 5px;
    width: 5px;
    border: 3px solid;
    position: absolute;
  }

  .back{
    position: absolute;
    top: 92vh;
    text-decoration: underline;
  }
  

}

</style>
