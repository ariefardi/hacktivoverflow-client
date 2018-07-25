<template>
    <div>
        <Navbar/>
        <LoginPage class="marginLogin"/>
    </div>
</template>

<script>
import LoginPage from '@/components/LoginPage'
import Navbar from '@/components/Navbar.vue'

export default {
    components: {
        LoginPage,
        Navbar
    }
}
</script>

<style scoped>
.marginLogin {
    margin-top: 13.35%
}
</style>
