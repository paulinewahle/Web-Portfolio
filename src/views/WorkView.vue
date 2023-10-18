<script>
import SideNav from '@/components/SideNav.vue'
import Cursor from '@/components/Cursor.vue'

export default {
  props:{
    links: Array,
    navLinks: Array,
    caseNav: Array
  },

  components: {
      SideNav,
      Cursor, 
  },
  data() {
    return {
      line1: "0",
      text1: "none",
      line2: "0",
      text2: "none",
      line3: "0",
      text3: "none",
      line4: "0",
      text4: "none",
      line5: "0",
      text5: "none",
      line6: "0",
      text6: "none",
      line7: "0",
      text7: "none",
      line8: "0",
      text8: "none"
    }
  },
  mounted(){
    document.querySelector(".arrow-cursor").style.opacity = "0";
  },
  methods:{
    revealCaseImg: (image) => {
      document.querySelector("#case-img").style.backgroundImage = 'url("' + image + '")';
      document.querySelector("#case-img").style.opacity = "1";
      document.querySelector("#case-img").style.filter = "blur(0)";
    },
    hideCaseImg: () => {
      document.querySelector("#case-img").style.opacity = "0";
      document.querySelector("#case-img").style.filter = "blur(10px)";
    },
    revealCaseTitle: (title) => {
      document.querySelector("#case-title").innerHTML = title;
      document.querySelector("#case-title").style.opacity = "1";
    },
    hideCaseTitle: () => {
      document.querySelector("#case-title").style.opacity = "0";
    },
    revealCaseText: (text) => {
      document.querySelector("#case-text").innerHTML = text;
      document.querySelector("#case-text").style.opacity = "1";
    },
    hideCaseText: () => {
      document.querySelector("#case-text").style.opacity = "0";
    }
  }
  
}

</script>

<template>

  <div id="page-wrapper">
    <div id="descr" class="section">
      <h3> Selected Work</h3>
      <div>
        <h1 id="case-title"></h1>
        <p id="case-text"></p>
      </div>
    </div>
    <div class="section">
      <div id="case-img" ></div>
    </div>
    <div id="case-links" class="section">
      <div>
        <router-link to="/nordik" class="work-link" @mouseover=' revealCaseImg("/src/assets/cases/nordik/Nordik.jpg"); revealCaseTitle("Nordik"); revealCaseText("Agency web design")' @mouseleave="hideCaseImg(); hideCaseTitle(); hideCaseText()">
        <h2>Nordik</h2> <p> Webshop design</p>
        </router-link>
        <router-link to="/gamel" class="work-link" @mouseover=' revealCaseImg("/src/assets/cases/gamel/Gamel.jpg"); revealCaseTitle("Gamél"); revealCaseText("Agency web design")' @mouseleave="hideCaseImg(); hideCaseTitle(); hideCaseText()">
          <h2>Gamél</h2> <p> Web design</p>
        </router-link>
        <router-link to="/skilled" class="work-link" @mouseover=' revealCaseImg("/src/assets/cases/skilled/Skilled.jpg"); revealCaseTitle("Skilled"); revealCaseText("Agency web design")' @mouseleave="hideCaseImg(); hideCaseTitle(); hideCaseText()">
          <h2>Skilled</h2> <p> App design</p>
        </router-link>
        <router-link to="/concreate" class="work-link" @mouseover=' revealCaseImg("/src/assets/cases/concreate/Concreate.jpg"); revealCaseTitle("Concreate"); revealCaseText("Agency web design")' @mouseleave="hideCaseImg(); hideCaseTitle(); hideCaseText()">
          <h2>Concreate</h2> <p> Graphic design</p>
        </router-link>
        <router-link to="/hitech" class="work-link" @mouseover=' revealCaseImg("/src/assets/cases/hitech/Hitech.jpg"); revealCaseTitle("HiTech"); revealCaseText("Agency web design")' @mouseleave="hideCaseImg(); hideCaseTitle(); hideCaseText()">
          <h2>HiTech</h2> <p> Web design</p>
        </router-link>
        
      </div>
      <div id="more-links">
        <h4>More Projects </h4> 
        <div>
          <a href="/"> <img src="/src/assets/img/dribble.svg" alt="dribble"   width="40"></a>
          <a href="/"> <img src="/src/assets/img/behance.svg" alt="behance" width="40"></a>
        </div>
      </div>
    </div>
    
    
  </div>


</template>

<style scoped>
@media (min-width: 200px){
  
  #case-links{
    justify-content: space-between;
  }
  .work-link{
    font-style: normal; 
    font-size: 1.5rem;
    border-top: 2px solid #272727;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 5%;
  }
  .work-link:last-child{
    border-bottom: 2px solid;
  }
  p{
    font-size: .5em;
    width: 40%;
    text-align: end;
  }
  
}
@media (min-width: 992px) {
  
  #page-wrapper{
    width: 90vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    z-index: 3;
    position: absolute;
    padding: 20vh 0vw;
    box-sizing: border-box;
  }
  #descr{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #case-links, #more-links{
    padding: 0 0 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #more-links{
    flex-direction: row;
    align-items: center;
    justify-content: start;
  }
  img{
    display: inline;
    padding: 0 0 0 20%;
  }
  #case-text{
    margin-top: 5%;
    font-size: 1rem;
    text-indent: 0;
  }
  #case-img{
    height: 100%;
    width: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    transition: all .5s ease;
    filter: blur(10px);
  }
  #case-title{
    font-size: 5rem;
  }
 
}

</style>
