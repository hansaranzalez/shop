interface ProductContract {
    id: number | null;
    name: string;
    description: string;
    price: number | null;
    in_stock: number | null;
    created_at?: string;
    updated_at?: string;
    calculateTotalPrice(): void;
}

interface ImagesContract {
    name: string;
    url: string;
}

export default class Product implements ProductContract {

    public id: number | null;
    public name: string;
    public description: string;
    public price: number | null;
    public in_stock: number | null;
    public created_at: string;
    public updated_at: string;
    public images: ImagesContract[];

    // for the shopping cart
    public quantity: number = 1;
    public totalPrice: number = 0;


    constructor(product?: Product) {

        if (product) {
            this.id = product.id;
            this.name = product.name;
            this.description = product.description;
            this.price = product.price;
            this.in_stock = product.in_stock;
            this.images = product.images;
            this.quantity = product.quantity || 1;
            this.totalPrice = product.price ? product.price * this.quantity : 0;
            this.created_at = product.created_at;
            this.updated_at = product.updated_at;
        } else {
            this.id = null;
            this.name = "";
            this.description = "";
            this.price = null;
            this.in_stock = null;
            this.images = [];
            this.quantity = 1;
            this.totalPrice = this.price ? this.price * this.quantity : 0;
            this.created_at = "";
            this.updated_at = "";
        }

        return {
            id: this.id,
            name: this.name,
            description: this.description,
            price: this.price,
            in_stock: this.in_stock,
            images: this.images,
            quantity: this.quantity,
            totalPrice: this.totalPrice,
            created_at: this.created_at,
            updated_at: this.updated_at,
            calculateTotalPrice: this.calculateTotalPrice,
            increateQuantity: this.increateQuantity,
            decreaseQuantity: this.decreaseQuantity
        };

    }

    calculateTotalPrice(): void {
        if (!this.price || !this.quantity) return;
        this.totalPrice = this.price * this.quantity;
    }

    increateQuantity(): void {
        this.quantity++;
        this.calculateTotalPrice();
    }

    decreaseQuantity(): void {
        if (this.quantity <= 1) return;
        this.quantity--;
        this.calculateTotalPrice();
    }

}
