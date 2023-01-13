import { Category } from "./Category";
import { ProductImage } from "./Productimage";

export default class Product {

    public id: string | null;
    public name: string;
    public description: string;
    public price: number;
    public cost_per_unit: number;
    public quantity: number;
    public allow_purchase_when_out_of_stock: boolean;
    public active: boolean;
    public created_at: string;
    public updated_at: string;
    public images: ProductImage[];
    public category: Category | null;
    // for shopping cart
    public totalPrice: number;
    public quantityInCart: number;

    constructor(product?: Product) {

        if (product) {
            this.id = product.id;
            this.name = product.name;
            this.description = product.description;
            this.price = product.price;
            this.cost_per_unit = product.cost_per_unit;
            this.quantity = product.quantity;
            this.allow_purchase_when_out_of_stock = product.allow_purchase_when_out_of_stock;
            this.active = product.active;
            this.images = product.images;
            this.category = product.category ? new Category(product.category) : null;
            this.created_at = product.created_at;
            this.updated_at = product.updated_at;
            // for shopping cart
            this.totalPrice = product.price;
            this.quantityInCart = 1;

        } else {
            this.id = null;
            this.name = "";
            this.description = "";
            this.price = 0;
            this.cost_per_unit = 0;
            this.quantity = 0;
            this.allow_purchase_when_out_of_stock = false;
            this.active = false;
            this.images = [];
            this.category = null;
            this.created_at = "";
            this.updated_at = "";
            // for shopping cart
            this.totalPrice = 0;
            this.quantityInCart = 1;
        }

        return this;

    }

    calculateTotalPrice(): void {
        if (!this.price || !this.quantityInCart) return;
        this.totalPrice = this.price * this.quantityInCart;
    }

    increateQuantity(): void {
        this.quantityInCart++;
        this.calculateTotalPrice();
    }

    decreaseQuantity(): void {
        if (this.quantityInCart <= 1) return;
        this.quantityInCart--;
        this.calculateTotalPrice();
    }

    getImages(): ProductImage[] {
        return this.images.sort((a, b) => a.order - b.order);
    }

}
