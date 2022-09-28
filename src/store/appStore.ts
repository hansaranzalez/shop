import { reactive } from "vue";
import router from "../router";


interface AppStateContract {
    goBackRoute: {
        name: string;
        params?: any;
    };
}

const state = reactive<AppStateContract>({
    goBackRoute: {
        name: 'productSearch',
        params: {}
    },
})

const AppStore = () => ({
    getPreviousRouteName() {
        if(!router.options.history.state.back) return '/'
        return router.options.history.state.back;
    },
    getCurrentRouteName() {
        return router.currentRoute.value.name;
    },
    setGoBackRoute(route: {
        name: string;
        params?: any;
    }) {
        
        if (route.name === 'product' && route.params.id) {
            route.params.id = router.currentRoute.value.params.id;
        }
        state.goBackRoute = route;
    },
    getGoBackRoute() {
        return state.goBackRoute;
    }
})

export default AppStore();