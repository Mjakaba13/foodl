<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="mid">
      <div id="right-side">
        <p>Find recipes for the ingredients you have on hand</p>
        <router-link to="/search"><Button class="button"></Button></router-link>
      </div>
      <img src="@/assets/image1.svg" alt="">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Button from '@/components/Button.vue'
export default {
  name: 'HomeView',
  components: {
    Navbar, Button
  }
}
</script>
<style scoped>
.home {
  background-image: url("@/assets/Group10.png");
  /* width: 1440px; */
  /* height: 1024px; */
  background-repeat: no-repeat;
  background-size: cover;
}

.mid {
  display: flex;
  gap: 138px;
  padding: 0px 120px 180px 120px;
  align-items: center;
}

p {
  width: 442px;
  height: 186px;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 130%;
  letter-spacing: -0.04em;
  color: #000000;
  text-align: left;
}

.button {
  width: 244px;
  height: 72px;
  background: #000000;
  box-shadow: 0px 16px 40px rgba(192, 86, 10, 0.4);
  border-radius: 8px;
  float: left;
  margin-top: 32px;

}

.mid img {
  width: 50%;
}
</style>