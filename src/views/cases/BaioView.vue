<script lang>

export default {
  props:{
    caseNav: Array,
  },
  components: {
  },
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      currentTransition: ''
    }
  },
  mounted(){
    this.caseNav.push("hideSoMe")
    
    document.querySelector("#turn-page-container").style.display = "block";
    document.querySelector("#turn-page-container").style.opacity = "1";

    const hideTextCursor = () => {
      document.querySelector(".text-cursor").style.opacity = "0";
    }
    const showTextCursor = () => {
      document.querySelector(".text-cursor").style.opacity = "1";
    }
    document.querySelector("#turn-page-container").addEventListener("mouseover", showTextCursor);
    document.querySelector("#turn-page-container").addEventListener("mouseleave", hideTextCursor);
    document.querySelector("#page-numbers").addEventListener("mouseover", hideTextCursor);
    document.querySelector("#page-numbers").addEventListener("mouseleave", showTextCursor);
    

    const mouseDown = (e) => {
        let x = e.clientX;
        let screenHalf = window.screen.width/2
        if(x < screenHalf){
          this.currentTransition = 'left';
          if(this.show1 === true){
            this.show1 = false,
            this.show5 = true
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
            this.show1 = true
          }
        }           
    }
    //window.addEventListener("click", mouseDown);
    const pageContainer = document.getElementById("turn-page-container");
    pageContainer.addEventListener("click", mouseDown);

  },
  methods:{

  }
  
}

</script>

<template>
<body>
  <div class="responsive">
    <h1>BAIO</h1>
    <div id="responsive-container">
      <div class="resp-case-img img1"/>
      <div class="resp-case-img img2"/>
      <div class="resp-case-img img6"/>
      <div class="resp-case-img img3"/>
      <div class="resp-case-img img4"/>
      <div class="resp-case-img img5"/>

      <p>Flat responsive UI/UX design concept with minimalistic vector line illustrations.   
      </p>
      <a href="https://www.figma.com/proto/w21iGzusDZSJmnCyTEZFDr/BAIO-web?node-id=113-75&scaling=scale-down&page-id=0%3A1&starting-point-node-id=113%3A75&show-proto-sidebar=1" :style="{'z-index':'100'}"> 
        TRY PROTOTYPE
      </a>
    </div>
  </div>
  <div class="desktop">
    <div id="turn-page-container">
    <h1>BAIO</h1>
    <Transition :name="this.currentTransition">
    <div v-if="show1" class="page" id="page1">
      <div id="descr">
      <p>Flat responsive UI/UX design concept with minimalistic vector line illustrations. 
      </p>
      <a target="_blank" href="https://www.figma.com/proto/w21iGzusDZSJmnCyTEZFDr/BAIO-web?node-id=113-75&scaling=scale-down&page-id=0%3A1&starting-point-node-id=113%3A75&show-proto-sidebar=1" :style="{'z-index':'100'}"> 
        TRY PROTOTYPE
      </a>
    </div>
      <video class="cover-video" autoplay loop>
        <source src="/src/assets/cases/baio/Komp1.mp4" type="video/mp4">
      </video>
    </div>
    </Transition>
    <Transition :name="this.currentTransition">
    <div v-if="show2" class="page" id="page2">
      <div alt="zine-image" class="img landscape-img"></div>
      <div alt="zine-image" class="img profile-img"></div>
    </div>
    </Transition>
    <Transition  :name="this.currentTransition">
    <div v-if="show3" class="page" id="page3">
      <div alt="zine-image" class="img cover-img"></div>
    </div>
    </Transition>
    <Transition :name="this.currentTransition">
    <div v-if="show4" class="page" id="page4">
      <div alt="zine-image" class="img landscape-img"></div>
      <div alt="zine-image" class="img profile-img"></div>
    </div>
    </Transition>
    <Transition :name="currentTransition">
    <div v-if="show5" class="page" id="page5">
      <video autoplay loop>
        <source src="/src/assets/cases/baio/baioclip.mp4" type="video/mp4">
      </video>
    </div>
    </Transition>
    </div>
    <div id="page-numbers">
      <button @click="show2 = false; show3 = false; show4 = false; show5 = false; show6 = false; show7 = false; show1 = true;" id="page-number-1">1</button>
      <button @click="show1 = false; show3 = false; show4 = false; show5 = false; show6 = false; show7 = false; show2 = true;" id="page-number-2">2</button>
      <button @click="show1 = false; show2 = false; show4 = false; show5 = false; show6 = false; show7 = false; show3 = true;" id="page-number-3">3</button>
      <button @click="show1 = false; show2 = false; show3 = false; show5 = false; show6 = false; show7 = false; show4 = true;" id="page-number-4">4</button>
      <button @click="show1 = false; show2 = false; show3 = false; show4 = false; show6 = false; show7 = false; show5 = true;" id="page-number-5">5</button>
    </div>
  </div>

</body>
</template>

<style scoped>
@media (min-width: 200px) {

  body{
    overflow-y: scroll;
    overflow-x: hidden;
  }
  #responsive-container{
    margin: 10vh 0;
  }
  #page-numbers{
    display: none;
  }
  h1{
    position: fixed;
    z-index: 100;
    top: 50vh;
    text-align: center;
    width: 84vw;
  }
  .resp-case-img, video{
    width: 100%;
    height: 50vh;
    margin: 10% 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  /*case images*/
  .img1{
    background-image: url('/src/assets/cases/baio/graphical_guide_BAIO2.jpg');
  }
  .img2{
    background-image: url('/src/assets/cases/baio/baio0.jpg');
  }
  .img3{
    background-image: url('/src/assets/cases/baio/PSD_01-1536x1024.png');
  }
  .img4{
    background-image: url('/src/assets/cases/baio/graphical guide BAIO.jpg');
  }
  .img5{
    background-image: url('/src/assets/cases/baio/iMac - 3 (1) (2).jpg');
  }
  .img6{
    background-image: url('/src/assets/cases/baio/mobile-baio1.jpg');
  }
  
}
@media (min-width: 992px) {
  #turn-page-container{
    height: 80vh;
    width: 80vw;
    box-sizing: border-box;
    margin: 10vh 0 10vh 20vw;
  }
  .page{
    position: absolute;
    display: flex;
    box-sizing: border-box;
  }
  h1{
    top: 10vh;
    left: 5vw;
    font-size: 10rem;
    z-index: 500;
    text-align: start;
  }
  #descr{
    margin: 20vh 0 0 -15vw;
    width: 30vw;
    position: absolute;
    z-index: 500;
  }
  p,a {
    font-size: 1.4em;
    text-decoration: none;
    text-indent: 0;
  }
  a:hover{
    font-style: italic;
  }
  .img{
    height: 80vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .cover-img{
    width: 80vw;
  }
  .landscape-img{
    width: 60vw;
  }
  .profile-img{
    width: 20vw;
    margin-left: 1vw;
  }
  video{
    height: 80vh;
    padding: 0;
    margin: 0;
  }
  .cover-video{
    width: 80vw;
    object-fit: cover;
  }
  #page-numbers{
    display: block;
  }


}

</style>
