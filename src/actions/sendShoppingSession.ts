import { IShoppingSessionForApi } from "../@types";
import Http from "../Http";
import shoppingSessionStore from "../store/shoppingSessionStore";


export default async function sendShoppingSession(): Promise<void> {
    try{
        const result = await Http.post('shopping-sessions', buildPayload());
        console.log(result)
    } catch(error: any) {
        console.log(error.message);
    }
}


// build shoppingSession payload
function buildPayload(): IShoppingSessionForApi {
    const user = shoppingSessionStore.getLoggedUser();
    const cart = shoppingSessionStore.shoppingCart();
    const totalPrice = shoppingSessionStore.getTotalPrice();
    const payload: IShoppingSessionForApi = {
        user,
        cart,
        delivery_fee: 0,
        discount: 0,
        active: true,
        total_price: totalPrice,
    };
    return payload;
}
