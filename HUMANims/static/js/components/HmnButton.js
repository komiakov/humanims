export default {
    props: {
        href: String,
        text: String
    },

    methods: {
       
    },

    template: `
        <a :href="href || '#'" class="hmnButton">
            <slot></slot>
            <span v-if=text>{{text}}</span>
        </a>
    `
}