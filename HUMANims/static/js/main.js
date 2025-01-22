const { createApp, ref, computed } = Vue
import HmnButton from "./components/HmnButton.js";
import HmnInput from "./components/HmnInput.js";
import HmnColumn from "./components/HmnColumn.js";
import HmnNoResultBlock from "./components/HmnNoResultBlock.js";

const app = createApp({
    setup() {
        const isSidebarVisible = ref(true);
        const toggleSidebar = () => {
            isSidebarVisible.value = !isSidebarVisible.value;
        };

        const columnId = ref(1)
        const columnData = ref([{ 
            type: "Text", label: "New column " + columnId.value 
        },]);
        const addColumnData = () => {
            columnId.value = columnId.value + 1
            columnData.value.push({
                type: "Text", label: "New column " + columnId.value  
            })
        }

        const filterSearchCreatedColumn = ref("");
        const filteredColumns = computed(() => {
            return columnData.value.filter(column =>
                column.type.toLowerCase().includes(filterSearchCreatedColumn.value.toLowerCase()) ||
                column.label.toLowerCase().includes(filterSearchCreatedColumn.value.toLowerCase())
            );
        });

        return {
            isSidebarVisible,
            toggleSidebar,
            columnData,
            addColumnData,
            filteredColumns,
            filterSearchCreatedColumn,
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

