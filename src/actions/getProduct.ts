import Product from "../entities/Product";
import Http from "../Http";

export default async function getProduct(id: number) {
    try {
        const response = await Http.get(`products/${id}`);
        if (response.status) throw response;
        return new Product(response);
    } catch (error: any) {
        return error;
    }
}