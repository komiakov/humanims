export default {
    props: {
        label: String,
        placeholder: String,
    },

    methods: {
        
    },

    template: `
        <div class="hmnInput">
            <label v-if="label"><span>{{ label }}</span></label>
            <slot></slot>
            <input type="text" v-bind:placeholder="placeholder">
        </div>
    `
}