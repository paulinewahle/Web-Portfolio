<script>

export default {
    props:{
    },
    data(){
    },
    mounted(){
    },
    methods:{
    }
}
</script>

<template>

    <footer class="responsive">
            <a class="small-nav-link" target="_blank" href="https://linkedin.com/in/paulinewahle"> LinkedIn </a>
            <a class="small-nav-link" target="_blank" href="https://www.behance.net/paulinewahle1"> Dribble </a>
            <a class="small-nav-link" target="_blank" href="https://www.behance.net/paulinewahle1"> Behance </a>
            <a class="small-nav-link" target="_blank" href="https://github.com/paulinewahle"> Github </a>
            <a class="small-nav-link" target="_blank" href="https://codepen.io/PaulineWahle"> CodePen </a>
            <a class="small-nav-link" target="_blank" href="https://www.pinterest.de/PaulineWahle/"> Pinterest </a>
        
            <p>Get in touch</p>
            <a class="small-nav-link" target="_blank" to="/work"> pauline.wahle@web.de </a>
    </footer>
        
</template>

<style scoped>
@media (min-width: 200px) {
    #header-bg{
        position: fixed;
        top: 0;
        left: 0;
        height: 10vh;
        width: 100vw;
        background-color: #fafafa;
    }
    .responsive-header{
        position: fixed;
        top: 0;
        left: 0;
        height: 10vh;
        width: 100vw;
        box-sizing: border-box;
        z-index: 160;
        display: flex;
        align-items: center;
        padding: 10% 10vw;
    }
    #header-title{
        font-size: 1.6em;
        font-style: normal;
        font-weight: 100;
        text-align: center;
        text-transform: capitalize;
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
        left: -100vw;
        transition: all .5s ease;
        z-index: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-content{
        position: fixed;        
        top: 10vh;
        height: 80vh;
        width: 80vw;
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
        font-family: "Articulat Thin";
        font-size: 2.5em;
        margin: 10%;
    }
    .small-nav-link, p{
        font-size: 1em;
        line-height: 1.6em;
    } 
}
@media (min-width: 992px) {
    
   .desktop-header{
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
    font-size: 1em;
    text-decoration: none;
    margin: 0;
    text-transform: uppercase;
    font-style: normal;
    padding: 3vh 3vh 3vh 0;
   }
   nav{
    width: 15%;
    display: flex;
    justify-content: flex-end;
   }
   .navlink{
    margin-left: 50%;
    padding: 3vh;
   }
}
</style>