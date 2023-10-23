<script>

</script>

<template>

    <footer class="responsive">
      
            <h2> Pauline Wahle</h2>
        <div class="line"></div>
            <RouterLink to="/about"> About </RouterLink>
        <div class="line"></div>
            <RouterLink to="/work"> Work </RouterLink>
        <div class="line"></div>
            <p>Get in touch</p>
            <a target="_blank" to="/work"> pauline.wahle@web.de </a>
        <div class="line"></div>

        <div>
            <a target="_blank" href="https://linkedin.com/in/paulinewahle">  <img src="/src/assets/img/Linkedin.svg" alt="dribble"   width="20">  </a>
            <a target="_blank" href="https://dribbble.com/PaulineWahle">  <img src="/src/assets/img/dribble.svg" alt="dribble"   width="20"> </a>
            <a target="_blank" href="https://www.behance.net/paulinewahle1">  <img src="/src/assets/img/behance.svg" alt="dribble"   width="20"> </a>
            <a target="_blank" href="https://github.com/paulinewahle">  <img src="/src/assets/img/Github.svg" alt="dribble"   width="20">  </a>
            <a target="_blank" href="https://codepen.io/PaulineWahle">  <img src="/src/assets/img/Codepen.svg" alt="dribble"   width="20">  </a>
            <a target="_blank" href="https://www.pinterest.de/PaulineWahle/">  <img src="/src/assets/img/Pinterest.svg" alt="dribble"   width="20">  </a>
        </div>
        
        
        
    </footer>
        
</template>

<style scoped>
@media (min-width: 200px) {
    footer{

        width: 100%;
        justify-content: space-between;
        padding: 10vh 0 1vh 0;
    }
    h2, a, p{
        margin: 0 2%;
    }
    h2{
        font-size: 1em;
    }
    a{
        font-size: 1.4em;
        border: none;
        display: inline;
    }
    p{
        text-indent: 0;
    }
    .line{
        margin: 2% 0;
    }
    img{
        margin-top: 5%;
    }
  
}

</style>