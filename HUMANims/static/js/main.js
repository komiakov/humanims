const { createApp, ref } = Vue
import HmnButton from "./components/HmnButton.js"; // Импорт компонента

const app = Vue.createApp({
    setup() {
        const isSidebarVisible = ref(true);
        const toggleSidebar = () => {
            isSidebarVisible.value = !isSidebarVisible.value;
        };
        return {
            isSidebarVisible,
            toggleSidebar,
        };
    },
    components: {
        "hmn-button": HmnButton
    }
});

app.mount("#app");

