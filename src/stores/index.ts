import { isCollapsible } from "element-plus/es/components/splitter/src/hooks/usePanel.mjs";
import { defineStore } from "pinia";
import { ref } from 'vue'

function initState() { 
    return {
        isCollapse:false
    }
}
export const useAllDataStore = defineStore('allData', () => {
    const state = ref(initState())

    return {
        state
    }
})