<script>
import { RouterLink, RouterView } from 'vue-router'
import WorkView from '@/views/WorkView.vue'
import Sphere from '@/components/Sphere.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import Cursor from '@/components/Cursor.vue'
import SideNav from '@/components/SideNav.vue'
import HomeView from '@/views/HomeView.vue'
import Header from '@/components/Header.vue'

export default {
    props:{
    caseNav: false
    },
	components: {
    Cursor,
    SideNav,
    HomeView,
    WorkView,
    Header
    },
    data(){
        return{
            links: [],
            sideNav: [],
            caseNav: []
        }
    },
    mounted(){
    }
}

</script>

<template>
    
    <body>
    <Header :links="links"></Header>    
    <!-- <SideNav :links="links" :caseNav="caseNav"/> -->
    
    <Cursor :links="links"/>

    <RouterView :sideNav="sideNav" :caseNav="caseNav">
        
    </RouterView>
        
    </body>
</template>

<style scoped>
</style>
