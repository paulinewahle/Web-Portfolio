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
            <a target="_blank" href="https://linkedin.com/in/paulinewahle"> LinkedIn </a>
            <a target="_blank" href="https://www.behance.net/paulinewahle1"> Dribble </a>
            <a target="_blank" href="https://www.behance.net/paulinewahle1"> Behance </a>
            <a target="_blank" href="https://github.com/paulinewahle"> Github </a>
            <a target="_blank" href="https://codepen.io/PaulineWahle"> CodePen </a>
            <a target="_blank" href="https://www.pinterest.de/PaulineWahle/"> Pinterest </a>
        </div>
        
        
        
    </footer>
        
</template>

<style scoped>
@media (min-width: 200px) {
    footer{
        height: 25vh;
        width: 100%;
        justify-content: space-between;
        padding-top: 10vh;
    }
    h2, a, p{
        margin: 0 5%;
    }
    a{
        font-size: 1.4em;
        border: none;
        display: block;
    }
    p{
        text-indent: 0;
    }
    .line{
        margin: 2% 0;
    }
    
}

</style>