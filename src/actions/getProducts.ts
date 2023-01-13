import Http from "../Http";
import productsStore from "../store/productsStore";

export default async function getProducts() {
    try {
        productsStore.setLoading(true);
        const page = productsStore.getPaginator().currentPage;
        const search = productsStore.searchQuery();
        const limit = productsStore.getPaginator().itemsPerPage;
        const response = await Http.get(`products/shop?page=${page}&limit=${limit}&search=${search}`);
        if (response.status) throw response;
        productsStore.setProducts(response.items);
        productsStore.setLoading(false);
    } catch (error: any) {
        productsStore.setLoading(false);
        return error;
    }
}