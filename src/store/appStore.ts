import { reactive } from "vue";
import router from "../router";
import i18n from "../i18n";
import { I18nType } from "../i18n/i18nContract";


interface AppStateContract {
    goBackRoute: {
        name: string;
        params?: any;
    };
    notLoggedInMessageOnCheckout: boolean;
}

const state = reactive<AppStateContract>({
    goBackRoute: {
        name: 'productSearch',
        params: {}
    },
    notLoggedInMessageOnCheckout: false,
})

const AppStore = () => ({
    i18n() {
        const locale = localStorage.getItem("cactus-locale") || "es";
        return i18n[locale as I18nType];
    },
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
    },
    setNotLoggedInMessageOnCheckout(value: boolean) {
        state.notLoggedInMessageOnCheckout = value;
    },
    getNotLoggedInMessageOnCheckout() {
        return state.notLoggedInMessageOnCheckout;
    }
})


localStorage.setItem('cactus-locale', 'es');

export default AppStore();