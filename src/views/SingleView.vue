<template>
    <section class="top">
        <Navbar></Navbar>
        <div class="side">
            <h2>{{ single.strMeal }}</h2>
            <div class="chiq">
                <div class="back">
                    <div class="same">
                        <img src='@/assets/bxs_category.svg' alt="">
                        <p class="tabs">CATEGORY</p>
                    </div>
                    <h4>{{ single.strCategory }}</h4>
                </div>
                <div class="back">
                    <div class="same">
                        <img src='@/assets/ci_location.svg' alt="">
                        <p class="tabs">AREA</p>
                    </div>
                    <h4>{{ single.strArea }}</h4>
                </div>
                <div class="back">
                    <div class="same">
                        <img src='@/assets/fa6-solid_tags.svg' alt="">
                        <p class="tabs">TAGS</p>
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
            <div class="wrap">
                <div class="ingre" v-for="ingmea in measingre" :key="ingmea">
                    <div class="hold">
                        <p id="par">{{ ingmea.ingredient }}</p>
                        <div id="chis">
                            <p id="chi">{{ ingmea.measure }}</p>
                        </div>
                    </div>
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
            single: [],
            result: [],
            instructions: [],
            ingredients: [],
            measurements: [],
            measingre: []
        }
    },

    // updated() {
    //     this.ingre()
    // },

    created() {
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + this.id)
            .then((response) => response.json())
            .then((response) => {
                // console.log(response.meals[0]);
                this.single = response.meals[0];
                this.result = response.meals[0].strInstructions.split('.')
                this.instructions = this.result.filter(Boolean)
                // console.log(this.instructions)
                console.log(this.single)

                Object.entries(this.single).forEach(([key, value]) => {
                    if (key.startsWith("strIngredient") && value !== null && value.trim() !== "") {

                        this.ingredients.push(value);
                    }

                    if (key.startsWith("strMeasure") && value !== null && value.trim() !== "") {
                        this.measurements.push(value)
                    }
                })
                this.ingredients.forEach((ing, index) => {
                    this.measingre.push({
                        ingredient: ing,
                        measure: this.measurements[index],
                    })
                })
                console.log(this.ingredients)
                console.log(this.measurements)
                console.log(this.measingre)
            });
    },

    // created() {
    //     this.single.forEach(([key, value]) => {
    //         if (key.startsWith("strIngredient") && value.trim() !== "") {
    //             this.ingredients.push(value);
    //         }
    //         console.log(this.ingredients)
    //     })
    // }

    // methods: {
    //     ingre() {
    //         Object.entries(this.single).forEach(([key, value]) => {
    //             if (key.startsWith("strIngredient") && value.trim() !== "") {
    //                 this.ingredients.push(value);
    //             }

    //             if (key.startsWith("strMeasure") && value.trim()) {
    //                 this.measurements.push(value)
    //             }
    //         })
    //         console.log('ingredients:', this.ingredients)
    //         console.log('measurements:', this.measurements)
    //     }

    // }

}
</script>

<style scoped>
.hold {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    border: 1px solid #919191;
    border-radius: 30px;
}

.hold:hover {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    gap: 10px;
    background: #FF9F59;
    border: 1px solid #FF9F59;
    box-shadow: 0px 4px 14px rgba(250, 139, 58, 0.4), inset 1px 2px 2px rgba(255, 255, 255, 0.29);
    border-radius: 30px;
    background: #FF9F59;
}

.wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
}

#par {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    text-transform: capitalize;
    color: #919191;
}

#chis {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 2px 8px;
    gap: 10px;
    background: #AAAAAA;
    border-radius: 30px;
}

#chi {
    height: 13px;
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 105%;
    text-transform: capitalize;
    color: #FFFFFF;
}

.ingredients {
    width: 590px;
    /* height: 219px; */
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 24px 64px -16px rgba(0, 0, 0, 0.1), inset 0px 4px 2px rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    padding: 28px 100px 28px 32px;
    /* padding-right: 0; */
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

.tabs {
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
    margin-top: 33px;
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

