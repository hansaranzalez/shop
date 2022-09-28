import { computed, reactive } from "vue";
import { PaginationMetaContract } from "../@types";
import getProducts from "../actions/getProducts";
import Product from "../entities/Product";

interface ExeptionContract {
    status: number;
    message: string;
}

interface ProductsStoreStateContract {
    products: Product[];
    searchQuery: string;
    paginationMeta: PaginationMetaContract;
    product: Product;
    loading: boolean;
    error: ExeptionContract;
}

const state = reactive<ProductsStoreStateContract>({
    products: [],
    searchQuery: "",
    paginationMeta: {
        totalItems: 0,
        itemCount: 0,
        itemsPerPage: 10,
        totalPages: 0,
        currentPage: 1,
    },
    product: new Product(),
    loading: false,
    error: {
        status: 0,
        message: "",
    },
});

const ProducstStore = () => ({
    loading: () => state.loading,
    setLoading: (loading: boolean) => (state.loading = loading),
    products: () => state.products,
    numberOfProducts: () => state.products.length,
    setProducts: (products: any[]) => (state.products = products.map((product) => new Product(product))),
    product: computed(() => state.product).value,
    setProduct: (product: Product) => (state.product = product),
    error: computed(() => state.error).value,
    setError: (error: ExeptionContract) => (state.error = error),
    setPaginationMeta: (paginationMeta: PaginationMetaContract) => (state.paginationMeta = paginationMeta),
    getPaginator: () => state.paginationMeta,
    setSearchQuery: (searchQuery: string) => {
        state.searchQuery = searchQuery
        setTimeout(async () => {
            await getProducts();
        }, 500);
    },
    searchQuery: () => state.searchQuery,
});

export default ProducstStore();