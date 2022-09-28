import Product from "./Product";


export default class ShoppingCart {
    public id: number | null;
    public products: Product[];
    public total_price: number;

    constructor(shoppingCart?: ShoppingCart) {
        if (shoppingCart) {
            this.id = shoppingCart.id;
            this.products = shoppingCart.products;
            this.total_price = shoppingCart.total_price;
        } else {
            this.id = null;
            this.products = [];
            this.total_price = 0;
        }
    }

    public addProduct(product: Product) {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index === -1) {
            this.products.push(product);
        } else {
            this.products[index].quantity++;
            this.products[index].totalPrice = this.products[index].price ? this.products[index].price * this.products[index].quantity : 0;
        }
    }

    public removeProduct(product: Product) {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }

    public getTotalPrice() {
        return this.products.reduce((total, product) => total + product.totalPrice, 0);
    }

    public getTotalQuantity() {
        return this.products.reduce((total, product) => total + product.quantity, 0);
    }

    public clear() {
        this.products = [];
    }

    public getShoppingCartPayload() {
        return {
            products: this.products.map(product => {
                return {
                    id: product.id,
                    quantity: product.quantity,
                    total_price: product.totalPrice
                }
            }),
            total_price: this.getTotalPrice(),
        }
    }

    findProductInCart(product: Product) {
        return this.products.find(p => p.id === product.id);
    }
}