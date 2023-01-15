import { computed, reactive } from "vue";


const state = reactive({
    checkoutFormVisible: false,
});



export default computed(() => ({
    checkoutFormVisible: {
        get: () => state.checkoutFormVisible,
        set: (value: boolean) => state.checkoutFormVisible = value,
    }
})).value