<script lang="js" setup>
    defineProps(["to", "label"])
</script>

<template>
    <NuxtLink :to="to" class="hmnButton">
        <slot name="leftIcon"></slot>
        <span v-if="label">{{ label }}</span>
        <slot name="rightIcon"></slot>
    </NuxtLink>
</template>

<style lang="scss">
    .hmnButton{
        display: inline-flex; align-items: center;
        height: 36px;
        padding: 0 9px;
        border: none; outline: none;
        border-radius: 6px;
        cursor: pointer;
        span{
            padding: 0 9px;
            font-size: 14px; font-weight: 400;
        }
        svg{width: 18px; height: 18px;}
        &.primary{
            background-color: $main-dark-color;
            svg{path{fill: $accent-color}}
        }
    }
</style>