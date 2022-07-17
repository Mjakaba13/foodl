<template>
    <nav>
        <router-link to="/"><img src="@/assets/Group3.svg" alt=""></router-link>
        <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/search">Search</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
nav {
    padding: 20px 118px 94px 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav a {
    width: 56px;
    height: 23px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 130%;
    color: #000000;
    text-decoration: none;
}



nav a.router-link-exact-active {
    width: 48px;
    height: 23px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    letter-spacing: -0.04em;
    color: #000000;
}

.links {
    display: flex;
    gap: 72px;
}

@media screen and (max-width: 420px) {
    nav {
        display: block;
        /* margin-left: 20px; */
        padding: 20px 288px 80px 20px;
    }

    .links {
        display: none;
    }
}
</style>