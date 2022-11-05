import TheHerothumb from "./components/TheHeroThumbnail.js";
import TheLightbox from "./components/TheLightbox.js";

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
        //get remote data
            fetch('./data.json')//get json file
                .then(res => res.json())//turn to a js object
                .then(data => this.heroData = data)//transform into a element that can be used in js
            .catch(error => console.error(error));//if something wrong happens, catch the error            
        },

        data() {
            return {
                heroData: {},
                loadBData: {}
            }
        },

        components:{
          theherothumb: TheHerothumb,
          theLightbox: TheLightbox
        },

        methods: {
            loadLightbox(hero) {
                this.loadBData = hero;
            }
        }
    }).mount('#app')
})()