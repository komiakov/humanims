import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", () => {
  const leftPanelIsClose = ref(false);

  const toggleLeftPanel = () => {
    leftPanelIsClose.value = !leftPanelIsClose.value;
  };

  return { leftPanelIsClose, toggleLeftPanel };
});
