import { ICity, ICountry, IState, RoleType } from "../@types";
import Role from "./Role";
import { computed, reactive } from "vue";



interface UserAvatar {
    id: number;
    url: string | undefined;
    name: string;
    size: number;
    type: string;
    created_at: string;
    updated_at: string;
}



interface ShippingAddress {
    id: number
    address_line_1: string
    address_line_2: string
    country: ICountry
    state: IState
    city: ICity
    postal_code: string
    created_at: number
    updated_at: number
}

export interface UserRegistrationPayload {
    name: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
}

export default class User {
    id: number;
    name: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    avatar: UserAvatar;
    shippingAddress: ShippingAddress;
    role: Role;
    isAdmin: boolean;
    isUser: boolean;
    isGuest: boolean;
    created_at: Date;
    updated_at: Date;

    constructor(user?: User) {
        if (user) {
            this.id = user.id;
            this.name = user.name;
            this.lastname = user.lastname;
            this.email = user.email;
            this.password = user.password;
            this.phone = user.phone;
            if (!user.avatar) {
                this.avatar = {
                    id: 0,
                    url: undefined,
                    name: '',
                    size: 0,
                    type: '',
                    created_at: '',
                    updated_at: '',
                }
            } else {
                this.avatar = user.avatar;
            }
            this.shippingAddress = user.shippingAddress;
            this.role = (user.role) ? new Role(user.role) : new Role();
            this.created_at = user.created_at;
            this.updated_at = user.updated_at;
        } else {
            this.id = 0;
            this.name = "";
            this.lastname = "";
            this.email = "";
            this.password = "";
            this.phone = "";
            this.avatar = {
                id: 0,
                url: undefined,
                name: "",
                size: 0,
                type: "",
                created_at: "",
                updated_at: "",
            };
            this.shippingAddress = {
                id: 0,
                address_line_1: '',
                address_line_2: '',
                country: {
                    id: 0,
                    name: '',
                    code: '',
                    created_at: '',
                    updated_at: '',
                },
                state: {
                    id: 0,
                    name: '',
                    countryName: '',
                    country: {
                        id: 0,
                        name: '',
                        code: '',
                        created_at: '',
                        updated_at: '',
                    },
                    cities: [],
                    created_at: '',
                    updated_at: '',
                },
                city: {
                    id: 0,
                    name: '',
                    countryName: '',
                    stateName: '',
                    state: {
                        id: 0,
                        name: '',
                        countryName: '',
                        country: {
                            id: 0,
                            name: '',
                            code: '',
                            created_at: '',
                            updated_at: '',
                        },
                        cities: [],
                        created_at: '',
                        updated_at: '',
                    },
                    created_at: '',
                    updated_at: '',
                },
                postal_code: '',
                created_at: 0,
                updated_at: 0,
            };
            this.role = new Role();
            this.created_at = new Date();
            this.updated_at = new Date();
        }
        this.isUser = computed(() => this.checkRole('USER')).value;
        this.isGuest = computed(() => this.checkRole('GUEST')).value;
        this.isAdmin = computed(() => this.checkRole('ADMIN')).value;
        return this;
    }

    checkRole(role: RoleType): boolean {
        return this.role.name === role;
    }

    getLoginPayload(): { email: string; password: string } {
        return {
            email: this.email,
            password: this.password,
        };
    }

    getRegisterPayload(): UserRegistrationPayload {
        return {
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            phone: this.phone,
        };
    }

    getShippingAddressPayload(): ShippingAddress {
        return {
            id: this.shippingAddress.id,
            address_line_1: this.shippingAddress.address_line_1,
            address_line_2: this.shippingAddress.address_line_2,
            country: this.shippingAddress.country,
            state: this.shippingAddress.state,
            city: this.shippingAddress.city,
            postal_code: this.shippingAddress.postal_code,
            created_at: this.shippingAddress.created_at,
            updated_at: this.shippingAddress.updated_at,
        }
    }

}