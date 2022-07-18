<template>
  <div class="top">
    <Navbars class="bun"></Navbars>
    <p>What ingredients do you have?</p>

    <form class="search" @submit.prevent>
      <input class="search" type="search" placeholder="Search..." v-model="foodName">
    </form>
  </div>

  <div class="bottom">
    <div class="wrapper">
      <div class="cards" v-for="meal in meals" :key="meal">
        <router-link :to="'/search/' + meal.idMeal">
          <div id="img-holder">
            <img :src="meal.strMealThumb" alt="">
          </div>
          <h6>{{ meal.strMeal }}</h6>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbars from '@/components/Navbar.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Search',
  components: {
    Navbars
  },

  data() {
    return {
      foodName: "",
    }
  },

  mounted() {
    this.getAllMeals(this.foodName)
  },
  computed: {
    ...mapGetters({
      meals: "getMeals"
    }),

  },
  methods: {
    ...mapActions({
      getAllMeals: "getAllMeals"
    }),
  },
  watch: {
    foodName(newValue) {
      this.getAllMeals(newValue);
    }
  }
}
</script>
<style scoped>
.top {
  background-image: url("@/assets/Searchback.svg");
  background-repeat: no-repeat;
  padding-bottom: 78px;

}

.bottom {
  padding: 104px 120px 292px 120px;
}

.wrapper {
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
}

form.search {
  border: none;
  display: flex;
  width: 590px;
  align-items: center;
  justify-content: center;
  height: 64px;
  box-shadow: 0px 32px 40px -16px rgba(182, 84, 14, 0.4);
  border-radius: 16px;
  background: #FFFFFF;
  margin-left: auto;
  margin-right: auto;
}

h6 {
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  margin-top: 22px;
  color: #000000;
}

a {
  text-decoration: none;

}

#img-holder {
  margin-left: auto;
  margin-right: auto;
  width: 248px;
  height: 229px;
  box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

#img-holder img {
  width: 248px;
  height: 229px;
  border-radius: 8px;
}

.cards {
  width: 285px;
  height: 296px;
  background: #FFFFFF;
  box-shadow: 0px 24px 64px -16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
}

/* input.nosubmit {
} */
.bun {
  padding-bottom: 67px;
}

input.search {
  padding: 9px 4px 9px 55px;
  width: 576px;
  border: none;
  height: 52px;
  background: #FBFBFB url("@/assets/searchicon.svg") no-repeat 20px center;
  box-shadow: 0px 14px 24px -8px rgba(182, 84, 14, 0.11);
  border-radius: 11px;
}

p {
  /* width: 425px; */
  height: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.04em;
  color: #000000;
  margin-bottom: 24px;
  text-align: center;
}

@media screen and (max-width: 420px) {
  p {
    /* width: 329px; */
    height: 29px;
    font-size: 24px;
    line-height: 120%;
  }

  form.search {
    width: 380px;
    height: 64px;
    background: #FBFBFB;
    box-shadow: 0px 32px 40px -16px rgba(182, 84, 14, 0.4);
    border-radius: 16px;
  }

  input.search {
    width: 370px;
    height: 52px;
    background: #FFFFFF;
    box-shadow: 0px 14px 24px -8px rgba(182, 84, 14, 0.11);
    background: #FBFBFB url("@/assets/searchicon.svg") no-repeat 15px center;

    border-radius: 11px;
  }

  /* .cards {
    display: block;
    margin-left: auto;
    margin-right: auto;
  } */
  .bottom {
    padding: 86px 67px 126px 68px;
  }
}
</style>