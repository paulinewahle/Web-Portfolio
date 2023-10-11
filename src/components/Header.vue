
<script>
export default {
    props:{
      links: Array,
    },
    data(){
        navActive: false
    },
    mounted(){
      this.links.push(document.querySelector('.work'))
      this.links.push(document.querySelector('.about'))
    },
    methods:{
        responsiveNav(){
            if(this.navActive === false){
                this.navActive = true
                document.querySelector(".header").style.backgroundColor = "rgba(0,0,0,0)"
                document.querySelector("#responsive-nav").style.left = "-20vw"
                document.querySelector(".nav-content").style.left = "10vw"
                document.querySelector("#header-title").style.color = "white"
                const hamburger = document.getElementById("hamburger").children;
                hamburger[0].style.backgroundColor = "white";
                hamburger[1].style.backgroundColor = "white";
                hamburger[2].style.backgroundColor = "white";
                hamburger[0].style.transform = "rotate(45deg)";
                hamburger[1].style.width = "0";
                hamburger[2].style.transform = "rotate(-45deg)";
                hamburger[0].style.marginTop = "-.6em";
                hamburger[2].style.marginTop = "1em";
                
            }
            else{
                this.navActive = false
                document.querySelector(".header").style.backgroundColor = "white"
                document.querySelector("#responsive-nav").style.left = "-150vw";
                document.querySelector(".nav-content").style.left = "-150vw";
                document.querySelector("#header-title").style.color = "#292929"
                const hamburger = document.getElementById("hamburger").children;
                hamburger[0].style.backgroundColor = "#292929";
                hamburger[1].style.backgroundColor = "#292929";
                hamburger[2].style.backgroundColor = "#292929";
                hamburger[0].style.transform = "rotate(0deg)";
                hamburger[1].style.width = "100%";
                hamburger[2].style.transform = "rotate(0deg)";
                hamburger[0].style.marginTop = "0";
                hamburger[2].style.marginTop = "0";
            }
        }
    }
}
</script>

<template>
    <header class="header">
        <RouterLink to="/home">Pauline Wahle</RouterLink>
        <nav>
            <RouterLink to="/home#work" class="work navlink"> Work </RouterLink>
            <RouterLink to="/about" class="about navlink"> About </RouterLink>
        </nav>
    </header>
    <header class="responsive header">
            <div id="hamburger" @click="responsiveNav()">
                <span />
                <span />
                <span />
            </div>
            <RouterLink id="header-title" to="/home">P - W</RouterLink>
    </header>

    <div id="responsive-nav" class="responsive">
    </div>
    <div class="nav-content responsive">
        <div>
            <a class="small-nav-link" target="_blank" href="https://linkedin.com/in/paulinewahle"> LinkedIn </a>
            <a class="small-nav-link" target="_blank" href="https://www.behance.net/paulinewahle1"> Behance </a>
            <a class="small-nav-link" target="_blank" href="https://github.com/paulinewahle"> Github </a>
            <a class="small-nav-link" target="_blank" href="https://codepen.io/PaulineWahle"> CodePen </a>
            <a class="small-nav-link" target="_blank" href="https://www.pinterest.de/PaulineWahle/"> Pinterest </a>
        </div>
        <div>
            <RouterLink class="big-nav-link" to="/work" @click="responsiveNav()"> WORK </RouterLink>
            <RouterLink class="big-nav-link" to="/about" @click="responsiveNav()"> ABOUT </RouterLink>
        </div>
        <div>
            <p>Get in touch</p>
            <a class="small-nav-link" target="_blank" to="/work"> pauline.wahle@web.de </a>
        </div>
    </div>
    
</template>

<style scoped>
@media (min-width: 200px) {
    /* .header{
        position: fixed;
        top: 0;
        left: 0;
        height: 10vh;
        width: 100vw;
        box-sizing: border-box;
        z-index: 150;
        display: flex;
        align-items: center;
        background-color: white;
        padding: 10% 10vw;
    }
    #header-title{
        font-family: 'title';
        font-size: 1.6em;
        font-style: normal;
        font-weight: 100;
        text-align: center;
        text-transform: capitalize;
        z-index: 100000;
        border: 0;
        text-decoration: none;
    }
    #hamburger{
        width: 3em;
        height: 2em;
        margin: 0 10% 0 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    span{
        height: 2px; 
        width: 100%;
        background-color: #292929;
        transition: transform .5s ease;
        transform-origin: top left;
    }
    #responsive-nav{
        background-color: #292929;        
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: -150vw;
        transition: all .5s ease;
        z-index: 140;
        filter: blur(20px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-content{
        position: fixed;        
        top: 10vh;
        height: 80vh;
        width: 50vw;
        z-index: 160;
        left: -100vw;
        transition: all .5s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .big-nav-link, .small-nav-link, p{
        display: block;
        color: white;
        text-decoration: none;
        border: none;
        text-align: center;
    }
    .big-nav-link{
        font-family: "serif";
        font-weight: 100;
        font-size: 2.5em;
        margin: 10%;
    }
    .small-nav-link, p{
        font-size: 1em;
    } */
}
@media (min-width: 992px) {
    
   .header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 2vh 10vw 0 5vw;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    z-index: 4;
    
   }
   h1, a{
    font-family: 'Articulat', sans-serif;
    font-size: 1em;
    text-decoration: none;
    margin: 0;
    text-transform: uppercase;
    font-style: normal;
    padding: 3vh;
   }
   nav{
    width: 15%;
    display: flex;
    justify-content: flex-end;
   }
   .navlink{
   
    margin-left: 50%;
   }
}
</style>