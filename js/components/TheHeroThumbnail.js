export default {
    name: "TheHerothumb",

    emits: ['loadbdata'],

    props: {
        hero: Object
    },

    template: 
    `
    <li @click="loadBData">
        <img :src='"images/"+ hero.biopic' alt="hero image" style="width: 150px">
        <!--<div class="sprite" id="cap"></div>-->
        <div class="red-bumper"></div>
        <h5>{{hero.name}}</h5>
    </li>
    `,

    methods: {
        loadBData() {
            //pass the individual object back to the main VM
            this.$emit('loadbdata', this.hero);
        }
    }

}