export interface ExeptionContract {
    status: number;
    title: string;
    message: string;
}

export type RoleType = 'ADMIN' | 'USER' | 'GUEST';

export interface PaginationMetaContract {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
}

export type ListType = 'countries' | 'states' | 'cities';

export interface ICountry {
    id: number;
    name: string;
    code: string;
    created_at: string;
    updated_at: string;
}

export interface IState {
    id: number;
    name: string;
    countryName: string;
    country: ICountry;
    cities: ICity[];
    created_at: string;
    updated_at: string;
}

export interface ICity {
    id: number;
    name: string;
    countryName: string;
    stateName: string;
    state: IState;
    created_at: string;
    updated_at: string;
}