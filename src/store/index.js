import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    meals: [],
  },
  getters: {
    getMeals: (state) => state.meals,
  },
  mutations: {
    SET_MEALS(state, payload) {
      state.meals = payload;
    },
  },
  actions: {
    async getAllMeals({ commit }, foodName) {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
        );
        commit("SET_MEALS", response.data.meals);
        console.log(response.data.meals);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
