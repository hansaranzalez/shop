import { reactive } from "vue";
import Product from "../entities/Product";
import ShoppingSession from "../entities/ShoppingSession";
import User from "../entities/User";

interface IShoppingSessionState {
    shoppingSession: ShoppingSession;
    shoppingSessionSummaryVisible: boolean;
}

const state = reactive<IShoppingSessionState>({
    shoppingSession: new ShoppingSession(),
    shoppingSessionSummaryVisible: false,
});

const ShoppingSessionStore = () => ({
    shoppingSessionSummaryVisible: () => state.shoppingSessionSummaryVisible,
    setShoppingSessionSummaryVisible: (value: boolean) => { state.shoppingSessionSummaryVisible = value },
    shoppingCart: () => state.shoppingSession.cart,
    products: () => state.shoppingSession.cart.products,
    addProduct: (product: Product) => state.shoppingSession.cart.addProduct(product),
    removeProduct: (product: Product) => state.shoppingSession.cart.removeProduct(product),
    getTotalPrice: () => state.shoppingSession.cart.getTotalPrice(),
    getTotalQuantity: () => state.shoppingSession.cart.getTotalQuantity(),
    clear: () => state.shoppingSession.cart.clear(),
    getShoppingCartPayload: () => state.shoppingSession.cart.getShoppingCartPayload(),
    findProductInShoppingCart: (product: Product) => state.shoppingSession.cart.findProductInCart(product),
    getShoppingSession: () => state.shoppingSession,
    setShoppingSession: (shoppingSession: ShoppingSession) => state.shoppingSession = shoppingSession,
    getUserShippingAddressPayload: () => state.shoppingSession.user.getShippingAddressPayload(),
    getLoginPayload: () => state.shoppingSession.user.getLoginPayload(),
    getPasswordRecoveryPayload: () => state.shoppingSession.user.getPasswordRecoveryPayload(),
    getUserRegistrationForm: () => state.shoppingSession.user.getUserRegistrationForm(),
    getUserRegistrationPayload: () => state.shoppingSession.user.getUserRegistrationPayload(),
    setLoginPayload: (payload: { email: string; password: string }) => state.shoppingSession.user.setLoginPayload(payload),
    setUserRegistrationForm: (payload: any) => state.shoppingSession.user.setUserRegistrationForm(payload),
    setUser: (user: User) => state.shoppingSession.user = user,
    getLoggedUser: () => {
        const user = localStorage.getItem('cactus-user');
        if (user) {
            state.shoppingSession.user = new User(JSON.parse(user));
        }
        return state.shoppingSession.user;
    },
    isUserLoggedIn: () => {
        const user = localStorage.getItem('cactus-user');
        if (user) {
            state.shoppingSession.user = new User(JSON.parse(user));
            return true;
        }
        return false;
    },
});

export default ShoppingSessionStore();