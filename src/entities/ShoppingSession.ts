import { Address } from "./Address";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import User from "./User";

type ShoppingSessionStatus = 'pending' | 'completed' | 'cancelled';

export class ShoppingSession {
    public user: User;
    public shopping_cart: ShoppingCart;
    public shipping_address: Address;
    public delivery_fee: number;
    public discount: number;
    public status: ShoppingSessionStatus;
    public total_price: number;

    constructor(shoppingSession?: ShoppingSession) {
        if (shoppingSession) {
            this.user = new User(shoppingSession.user);
            this.shopping_cart = new ShoppingCart(shoppingSession.shopping_cart);
            this.shipping_address = new Address(shoppingSession.shipping_address);
            this.delivery_fee = shoppingSession.delivery_fee;
            this.discount = shoppingSession.discount;
            this.status = shoppingSession.status;
            this.total_price = shoppingSession.total_price;
        } else {
            this.user = new User();
            this.shopping_cart = new ShoppingCart();
            this.shipping_address = new Address();
            this.delivery_fee = 0;
            this.discount = 0;
            this.status = 'pending';
            this.total_price = 0;
        }

        return this;
    }
    
    //Shopping cart methods
    addProductInShoppingCart(product: Product) {
        this.shopping_cart.addProduct(product);
    }

    removeProductFromShoppingCart(product: Product) {
        this.shopping_cart.removeProduct(product);
    }

    getTotalPriceInShoppingCart() {
        return this.shopping_cart.getTotalPrice();
    }

    getTotalQuantityInShoppingCart() {
        return this.shopping_cart.getTotalQuantity();
    }

    clearShoppingCart() {
        this.shopping_cart.clear();
    }

    //Shipping address methods
    setShippingAddress(address: Address) {
        this.shipping_address = address;
    }

    getShippingAddress() {
        return this.shipping_address;
    }

    //Delivery fee methods
    setDeliveryFee(deliveryFee: number) {
        this.delivery_fee = deliveryFee;
    }

    getDeliveryFee() {
        return this.delivery_fee;
    }

    //Discount methods
    setDiscount(discount: number) {
        this.discount = discount;
    }

    getDiscount() {
        return this.discount;
    }

    //Status methods
    setStatus(status: ShoppingSessionStatus) {
        this.status = status;
    }

    getStatus() {
        return this.status;
    }

    //Total price methods
    getTotalPrice(): number {
        return this.getTotalPriceInShoppingCart() + this.getDeliveryFee() - this.getDiscount();
    }

    //User methods
    setUser(user: User) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    //Payload methods
    getShoppingSessionPayload() {
        return {
            user: this.user,
            shopping_cart: this.shopping_cart.getShoppingCartPayload(),
            shipping_address: this.shipping_address.getAddressPayload(),
            delivery_fee: this.delivery_fee,
            discount: this.discount,
            status: this.status,
            total_price: this.getTotalPrice(),
        }
    }
}