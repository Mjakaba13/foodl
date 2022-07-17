<template>
    <section class="top">
        <Navbar></Navbar>
        <div class="side">
            <h2>{{ single.strMeal }}</h2>
            <div class="chiq">
                <div class="back">
                    <div class="same">
                        <img src='@/assets/bxs_category.svg' alt="">
                        <p>CATEGORY</p>
                    </div>
                    <h4>{{ single.strCategory }}</h4>
                </div>
                <div class="back">
                    <div class="same">
                        <img src='@/assets/ci_location.svg' alt="">
                        <p>AREA</p>
                    </div>
                    <h4>{{ single.strArea }}</h4>
                </div>
                <div class="back">
                    <div class="same">
                        <img src='@/assets/fa6-solid_tags.svg' alt="">
                        <p>TAGS</p>
                    </div>
                    <h6>{{ single.strTags }}</h6>
                </div>
            </div>
        </div>
        <img :src="single.strMealThumb" alt="" id="single-image">
    </section>

    <section class="bottom">
        <div class="ingredients">
            <h1>Ingredients.</h1>
            <div class="ingre">
                <div>
                    <span>{{ single.strIngredient1 }}</span>
                    <span>{{ single.strIngredient2 }}</span>
                    <span>{{ single.strIngredient3 }}</span>
                    <span>{{ single.strIngredient4 }}</span>
                    <span>{{ single.strIngredient5 }}</span>
                </div>
            </div>
        </div>

        <div class="under">
            <h5>Instructions</h5>
            <div id="instruction-holder">
                <!-- <div> -->
                <!-- <h3>{{ index++ }}. {{ ins }}</h3> -->
                <ul v-for="(ins, index) in instructions" :key="index">
                    <li>{{ ins }}</li>
                </ul>
                <!-- </div> -->
            </div>
        </div>

    </section>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: "SingleView",

    components: { Navbar },
    data() {
        return {
            id: this.$route.params.id,
            single: {},
            result: [],
            instructions: []
        }
    },

    created() {
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.id)
            .then((response) => response.json())
            .then((response) => {
                console.log(response.meals[0]);
                this.single = response.meals[0];
                this.result = response.meals[0].strInstructions.split('.')
                this.instructions = this.result.filter(Boolean)
                console.log(this.instructions)
            });
    }
}
</script>

<style scoped>
.ingredients {
    /* width: 590px; */
    height: 219px;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 24px 64px -16px rgba(0, 0, 0, 0.1), inset 0px 4px 2px rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    padding: 28px 32px;
    padding-right: 0;
    margin: 122px 425px 72px;
}

.under {
    margin-left: 425px;
}

#instruction-holder {
    margin-top: 32px;
    margin-bottom: 84px;
}

h5 {
    width: 178px;
    height: 32px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #000000;
}

/* .ingre {
    display: flex;
    gap: 20px;
} */

span {
    width: 74px;
    height: 16px;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    text-transform: capitalize;
    color: #919191;
    border: 1px solid #919191;
    border-radius: 30px;
    padding: 11px 16px;
}

/* .ingre {
    width: 75px;
    height: 33px;
    border: 1px solid #919191;
    border-radius: 30px;
} */

h1 {
    width: 169px;
    height: 32px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 32px;
}

li {
    width: 489px;
    height: 70px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 165%;
    text-transform: capitalize;
    color: #000000;
}

.same {
    display: flex;
    column-gap: 4px;
    padding-bottom: 8px;
    align-items: center;
}

#single-image {
    position: absolute;
    width: 260px;
    height: 241px;
    left: 322px;
    top: 136px;
    background: #FBFBFB;
    box-shadow: 0px 32px 48px -16px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
}

p {
    width: 56px;
    height: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: #954F1D;
}

.side {
    margin-left: 622px;
}

.chiq {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
}

.back {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 24px;
    /* width: 124px; */
    /* height: 68px; */
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.05), inset 1px 1px 2px rgba(255, 255, 255, 0.37);
    backdrop-filter: blur(94px);
    border-radius: 4px;
}

.top {
    background-image: url("@/assets/SIngleback.svg");
    background-repeat: no-repeat;
    padding-bottom: 78px;
}

h2 {
    width: 483px;
    height: 40px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 24px;
}

h4,
h6 {
    /* width: 70px; */
    /* height: 20px; */
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #000000;
}

/* h6 {
    width: 140px;
} */
</style>

