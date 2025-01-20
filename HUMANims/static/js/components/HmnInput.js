export default {
    props: {
        label: String,
        placeholder: String,
        modelValue: String,
    },

    methods: {
        updateValue(event) {
            this.$emit("update:modelValue", event.target.value); // Обновляем `v-model`
        }
    },

    template: `
        <div class="hmnInput">
            <label v-if="label"><span>{{ label }}</span></label>
            <slot></slot>
            <input type="text" v-bind:placeholder="placeholder" v-bind:value="modelValue" @input="updateValue">
        </div>
    `
}