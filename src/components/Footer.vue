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
        <div>
            <h3> Pauline Wahle</h3>
            <p>Get in touch</p>
            <a target="_blank" to="/work"> pauline.wahle@web.de </a>
        </div>
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
        display: flex;
        justify-content: space-between;
        padding-top: 10vh;
    }
    a{
        font-size: .7em;
        border: none;
        display: block;
    }
    h3{
        font-size: 1em;
        font-family: 'Articulat Regular', sans-serif;
    }
    p{
        text-indent: none;
        margin: 10% 0 0 0;
    }
    
}

</style>