<script setup lang="js">
    import { useUIStore } from "@/stores/ui";

    const uiStore = useUIStore();
</script>

<template>
    <div id="leftPanel" :class="{hide: uiStore.leftPanelIsClose}">
        <div id="leftPanelHeader">
            <span id="leftPanelHeaderPageName"><slot name="pageName"></slot></span>
            <slot name="headerButton"></slot>
        </div>
    </div>
</template>

<style lang="scss" >
    #leftPanel{
        position: fixed;
        top: 0; left: 60px;
        height: 100vh;
        padding: 24px 12px;
        background-color: $accent-color;
        transition: .3s;
        #leftPanelHeader{
            display: flex; align-items: center; justify-content: space-between;
            height: 36px;
            #leftPanelHeaderPageName{
                font-size: 20px; font-weight: 400; color: $main-dark-color;
            }
        }
        &.hide{
            left: -600px;
        }
    }

    @media (max-width: 720px) {
        #leftPanel{
            width: calc(100vw - 60px);
        }
    }

    @media (min-width: 721px) {
        #leftPanel{
            width: 320px;
        }
    }
</style>