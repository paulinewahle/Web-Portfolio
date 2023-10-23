<script lang>

export default {
    props: {
        casename: String,
        casetext: String,
        caselink: String,
        caselinktext: String,
        content1: String,
        content2: String,
        content3: String,
        content4: String,
        content5: String,
        content6: String,
        content7: String,
    },
  data() {
    return {
      page1: true,
      page2: false,
      page3: false,
      page4: false,
      page5: false,
      page6: false,
      page7: false,
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
    const pageArrowCursor = () => {
      document.querySelector(".arrow-cursor").style.opacity = "1";
      document.querySelector(".cursor").style.scale = "0";
    }

    document.querySelector("#page-container").addEventListener("mouseover", pageArrowCursor);
    document.querySelector("#page-container").addEventListener("mouseleave", hideArrowCursor);
    document.querySelector("#page-numbers").addEventListener("mouseover", hideArrowCursor);
    document.querySelector("#page-numbers").addEventListener("mouseleave", pageArrowCursor);


    const mouseDown = (e) => {
        let x = e.clientX;
        let screenHalf = window.screen.width/2
        if(x < screenHalf){
          this.currentTransition = 'left';
          if(this.page1 === true){
            this.page1 = false,
            this.page7 = true
          }
          else if(this.page2 === true){
            this.page2 = false,
            this.page1 = true
          }
          else if(this.page3 === true){
            this.page3 = false,
            this.page2 = true
          }
          else if(this.page4 === true){
            this.page4 = false,
            this.page3 = true
          }
          else if(this.page5 === true){
            this.page5 = false,
            this.page4 = true
          }
          else if(this.page6 === true){
            this.page6 = false,
            this.page5 = true
          }
          else if(this.page7 === true){
            this.page7 = false,
            this.page6 = true
          }
        }
        else if(x > screenHalf){
          this.currentTransition = 'right';
          if(this.page1 === true){
            this.page1 = false,
            this.page2 = true
          }
          else if(this.page2 === true){
            this.page2 = false,
            this.page3 = true
          }
          else if(this.page3 === true){
            this.page3 = false,
            this.page4 = true
          }
          else if(this.page4 === true){
            this.page4 = false,
            this.page5 = true
          }
          else if(this.page5 === true){
            this.page5 = false,
            this.page6 = true
          }
          else if(this.page6 === true){
            this.page6 = false,
            this.page7 = true
          }
          else if(this.page7 === true){
            this.page7 = false,
            this.page1 = true
          }
        }    
             
    }
    
  
    const pageContainer = document.getElementById("page-container");
    pageContainer.addEventListener("click", mouseDown);

  },
  methods:{ 
    // pageNumber(e) {
    //   if (this.page1 === true ){
    //   console.log("page1")
    //   document.querySelector('#page-number-1').classList.add("active-page-btn");
    // }
    // else if(this.page2 === true){
    //   console.log("page2")
    //   document.querySelector('#page-number-2').classList.remove("active-page-btn");
    // }
    //   }
    
  }
  
}

</script>

<template>

  <div class="responsive">

  
  <h1>{{casename}}</h1> 
  <p>{{casetext}}</p>
  <a :href="caselink" download> {{caselinktext}}</a>
  <router-link to="/work" class="work-link">BACK</router-link>

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
      <div id="descr">
        <h1>{{casename}}</h1>
        <p>{{casetext}}</p>
        <a :href="caselink" download> {{caselinktext}} </a>
      </div>
        
        <Transition :name="this.currentTransition">
        <div v-if="page1" class="page" id="page1">
          <video  autoplay loop muted>
            <source :src="content1">
          </video>
          <img :src="content1" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page2" class="page" id="page2">
          <video  autoplay loop muted>
            <source :src="content2">
          </video>
          <img :src="content2" alt="">
        </div>
        </Transition>
        <Transition  :name="this.currentTransition">
        <div v-if="page3" class="page" id="page3">
          <video  autoplay loop muted>
            <source :src="content3">
          </video>
          <img :src="content3" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page4" class="page" id="page4">
          <video  autoplay loop muted>
            <source :src="content4">
          </video>
          <img :src="content4" alt="">
        </div>
        </Transition>
        <Transition :name="currentTransition">
        <div v-if="page5" class="page" id="page5">
          <video  autoplay loop muted>
            <source :src="content5">
          </video>
          <img :src="content5" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page6" class="page" id="page6">
          <video  autoplay loop muted>
            <source :src="content6">
          </video>
          <img :src="content6" alt="">
        </div>
        </Transition>
        <Transition :name="this.currentTransition">
        <div v-if="page7" class="page" id="page7">
          <video  autoplay loop muted>
            <source :src="content7">
          </video>
          <img :src="content7" alt="">
        </div>
        </Transition>
    </div>
    <div id="page-numbers">
      <button @click="page2 = false; page3 = false; page4 = false; page5 = false; page6 = false; page7 = false; page1 = true;" id="page-number-1">1</button>  <div v-if="page1" class="number-line"></div>
      <button @click="page1 = false; page3 = false; page4 = false; page5 = false; page6 = false; page7 = false; page2 = true;" id="page-number-2">2 </button> <div v-if="page2" class="number-line"></div>
      <button @click="page1 = false; page2 = false; page4 = false; page5 = false; page6 = false; page7 = false; page3 = true;" id="page-number-3">3</button> <div v-if="page3" class="number-line"></div>
      <button @click="page1 = false; page2 = false; page3 = false; page5 = false; page6 = false; page7 = false; page4 = true;" id="page-number-4">4</button> <div v-if="page4" class="number-line"></div>
      <button @click="page1 = false; page2 = false; page3 = false; page4 = false; page6 = false; page7 = false; page5 = true;" id="page-number-5">5</button> <div v-if="page5" class="number-line"></div>
      <button @click="page1 = false; page2 = false; page3 = false; page4 = false; page5 = false; page7 = false; page6 = true;" id="page-number-6">6</button> <div v-if="page6" class="number-line"></div>
      <button @click="page1 = false; page2 = false; page3 = false; page4 = false; page5 = false; page6 = false; page7 = true;" id="page-number-7">7</button>
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

  #descr{
    position: absolute;
    z-index: 100;
    margin: 0;
    top: 30vh;
    width: 20vw;
  }
  h1{
    margin: 0 0 5vh 0;
  }
  a{
    font-style: italic;
    text-decoration: underline;
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
    left: 75vw;
    width: 20%;
    display: flex;
    justify-content: start;
    align-items: center;
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
  .number-line{
    width: 10%;
    height: 1px;
    background-color: #272727;
    animation: expand 1s;
  }
  @keyframes expand{
    from{
      width: 0%;
    }
    to{
      width: 10%;
    }
  }
  .back{
    position: absolute;
    top: 92vh;
    text-decoration: underline;
  }

  

}

</style>
