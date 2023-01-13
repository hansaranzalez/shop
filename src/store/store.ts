import { computed, reactive } from "vue";
import { ShoppingSession } from "../entities/ShoppingSession";

interface StateContract {
    shoppingSession: ShoppingSession;
}

export default computed(() => reactive<StateContract>({
    shoppingSession: new ShoppingSession(),
})).value;