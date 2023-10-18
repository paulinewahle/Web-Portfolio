<script>
import { RouterLink, RouterView } from 'vue-router'
import WorkView from '@/views/WorkView.vue'
import Sphere from '@/components/Sphere.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import Cursor from '@/components/Cursor.vue'
import HomeView from '@/views/HomeView.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    props:{
    },
	components: {
    Cursor,
    HomeView,
    WorkView,
    Header,
    Footer
    },
    data(){
        return{
            links: [],
        }
    },
    mounted(){
    }
}

</script>

<template>
    
    
    <Header :links="links"></Header>    
    
    <Cursor :links="links"/>

    <RouterView>
        
    </RouterView>
    <Footer> </Footer>
    
</template>

<style scoped>
</style>
