<script lang>
export default{
    method() {
        document.querySelector(".arrow-cursor").style.opacity = "0";
        document.querySelector(".text-cursor").style.opacity = "0";
    }
}  
</script>
<template>
    
    <main>
        <h1>404</h1>
        <h2>Page Not Found</h2>
    </main>
    
</template>

<style scoped>

    main{
        width: 100%;
        height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        overflow-y: hidden;
    }
    h1{
        font-size: 18rem;
    }
    h2{
        font-size: 6rem;
    }

</style>