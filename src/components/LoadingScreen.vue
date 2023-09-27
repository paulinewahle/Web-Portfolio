<script>
export default {
  name: "LoadingScreen",
  data(){
    return {
      id: 1,
    }
  },
  mounted() {
    let id = 0
    
    const loadingInterval = setInterval(displayIntroItem, 1900)
    function displayIntroItem() {
      id++
      let item = document.getElementById("intro-loop-item"+id)
      item.style.display = "block"
      setTimeout(() => {
        item.style.display = "none"
      }, 1900)

      if (id>=6){
      clearInterval(loadingInterval)
      }
    }
    
  
    
  }
}

</script>

<template>
    <div id="loading">
      <ul>
        <li class="intro-loop-item" id="intro-loop-item1">
          <span class="a">Design</span> <span class="b">Concepts</span>
        </li>
        <li class="intro-loop-item" id="intro-loop-item2">
          <span class="b">Creative</span> <span class="a">Development</span>
        </li>
        <li class="intro-loop-item" id="intro-loop-item3">
          <span class="a">Web</span> <span class="b">Design</span>
        </li>
        <li class="intro-loop-item" id="intro-loop-item4">
          <span class="b">User</span> <span class="a">Experience</span>
        </li>
        <li class="intro-loop-item" id="intro-loop-item5">
          <span class="a">Graphic</span> <span class="b">Design</span>
        </li>
        <li class="intro-loop-item" id="intro-loop-item6">
          <span class="b">Digital</span> <span class="a">Interfaces</span>
        </li>
      </ul>
    </div>
</template>
  
<style scoped>
@media (min-width: 200px) {
  #loading {
    position: fixed;
    z-index: 10000000;
    background-color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
  }
  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: inline;
    text-align: center;
  }
  .intro-loop-item{
    display: none;
    position: relative;
    animation: fade 2s;
  }
  @keyframes fade{
    0%   {
      filter: blur(5px);
      opacity: 0;
    }
    50%  {
      filter: blur(0px);
      opacity: 1;
    }
    100% {
      filter: blur(5px);
      opacity: 0;
    }
  }
  .a{
    font-family: "title";
    src: url('/src/assets/fonts/Ade-Display.otf')  format('opentype');
    text-transform: uppercase;

  }
  .b{
    font-family: "title";
    src: url('/src/assets/fonts/Ade-Display.otf')  format('opentype');
    text-transform: uppercase;

  }
}

@media (min-width: 992px) {
}
  </style>