import { reactive } from "vue";
import Product from "../entities/Product";
import ShoppingSession from "../entities/ShoppingSession";

interface IShoppingSessionState {
    shoppingSession: ShoppingSession;
}

const state = reactive<IShoppingSessionState>({
    shoppingSession: new ShoppingSession(),
});

const ShoppingSessionStore = () => ({
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
});

export default ShoppingSessionStore();