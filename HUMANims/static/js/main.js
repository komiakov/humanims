const { createApp, ref, computed } = Vue
import HmnButton from "./components/HmnButton.js";
import HmnInput from "./components/HmnInput.js";
import HmnColumn from "./components/HmnColumn.js";
import HmnNoResultBlock from "./components/HmnNoResultBlock.js";

const app = Vue.createApp({
    setup() {
        const columnId = ref(1)
        const isSidebarVisible = ref(true);
        const toggleSidebar = () => {
            isSidebarVisible.value = !isSidebarVisible.value;
        };
        const columnData = ref([{ 
            type: "Text", label: "New column " + columnId.value 
        },]);
        const addColumnData = () => {
            columnId.value = columnId.value + 1
            columnData.value.push({
                type: "Text", label: "New column " + columnId.value  
            })
        }
        const filterText = ref("");

        const filteredColumns = computed(() => {
            return columnData.value.filter(column =>
                column.type.toLowerCase().includes(filterText.value.toLowerCase()) ||
                column.label.toLowerCase().includes(filterText.value.toLowerCase())
            );
        });

        return {
            isSidebarVisible,
            toggleSidebar,
            columnData,
            addColumnData,
            filteredColumns,
            filterText,
        };
    },
    components: {
        "hmn-button": HmnButton,
        "hmn-input": HmnInput,
        "hmn-column": HmnColumn,
        "hmn-no-result-block": HmnNoResultBlock,
    }
});

app.mount("#app");

