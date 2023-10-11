<script>
import { RouterLink, RouterView } from 'vue-router'
import WorkView from '@/views/WorkView.vue'
import Sphere from '@/components/Sphere.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import Cursor from '@/components/Cursor.vue'
import HomeView from '@/views/HomeView.vue'
import Header from '@/components/Header.vue'

export default {
    props:{
    },
	components: {
    Cursor,
    HomeView,
    WorkView,
    Header
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
    <!-- <SideNav :links="links" :caseNav="caseNav"/> -->
    
    <Cursor :links="links"/>

    <RouterView>
        
    </RouterView>
        
    
</template>

<style scoped>
</style>
