export default {
    props: {
        href: String,
        text: String
    },

    methods: {
        handleClick(event) {
            event.preventDefault();
            console.log("Кнопка нажата!");
        }
    },

    template: `
        <a :href="href || '#'" @click="handleClick">
            <span v-if=text>{{text}}</span>
        </a>
    `
}