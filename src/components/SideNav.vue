<script>


  export default{
    components: {
    },
    props:{
      // links: Array,
      caseNav: Array
    },
    // mounted(){
    //   this.links.push(document.querySelector(".link"))
    // }
  }

</script>
<template>

<aside>
  <nav class="side-nav desktop">
  <div v-if="this.caseNav.length == 0">
    <div id="so-me">
      <a href = "https://linkedin.com/in/paulinewahle" target="_blank">
        LinkedIn
      </a>
      <a href = "https://github.com/paulinewahle" target="_blank">
        Github
      </a>
      <a href = "https://www.behance.net/paulinewahle1">
        Behance
      </a>
      <a href = "https://codepen.io/PaulineWahle" target="_blank">
        Codepen
      </a>
      <a href = "https://www.pinterest.de/PaulineWahle/" target="_blank">
        Pinterest
      </a>
    </div>
  </div>

  <div id="main-nav">
    <a href="/home#nav" id="menu-button" class="">
      Menu
    </a> 
    <h3>
      Get in touch
    </h3>
    <a href = "mailto:pauline.wahle@web.de">
      pauline.wahle@web.de
    </a>
  </div>
  </nav>
</aside>
</template>

<style scoped>
@media (min-width: 992px) {
  aside{
    position: fixed;
    width: 20vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 10vh 0 10vh 5vw;
    z-index: 200;
  }
  nav{
    height: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: end;
  }
  #so-me{
    height: 30vh;
  }
  #main-nav{
    margin-top: 30vh;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  h3{
    width: 100%;
    margin: 35% 0 0 0;
  }
  a{
    text-decoration: none;
    font-weight: light;
    display: block;
    margin: 0 0 .5em 0;
  }
  a:hover{
    font-style: italic;
  }
  #menu-button{
    font-size: 1.5em;
    width: 3.4em;
    height: 1.5em;
    background: none;
    border: none;
    border-bottom: 2px solid #292929;
    padding: 0;
    text-align: start;
    font-family: "Brigade", sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 1s ease;
  }
  #menu-button:hover{
    width: 100%;
    font-style: oblique;
    border-bottom: 1px solid #292929;
  }
}
</style>