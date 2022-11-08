export default {
    name: 'TheLightboxComponent',

    props: ['hero'],


    template: 
    `   <section class="lightbox">
            <pre>{{ hero }}</pre>
            <img @click="closeLB" src="images/closeIcon.png" class="lightbox_close">
            <!-- hero image on the left, text on the right -->
            <!-- her image is a background image -->
            <article>
                <h3 class="lb_heading">Captain America - the First Avenger</h3>
                <p class="lb_text"> <pre>{{ hero.bio }}</pre></p>
                <p class="lb_text">
                 <pre>{{ hero.name }}</pre>
                </p>
            </article>
        </section>
        
    `,
    methods: {
        closeLB() {
            this.$emit('closeLB');
        }
    }
    
}