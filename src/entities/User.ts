import { ElMessage } from "element-plus";
import { RoleType } from "../@types";
import Http from "../Http";
import { Address } from "./Address";
import { Avatar } from "./Avatar";
import Role from "./Role";
import router from "../router";

export default class User {
    id: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    is_verified: boolean;
    avatar: Avatar;
    addresess: Address[];
    role: Role;

    constructor(user?: User) {
        if (user) {
            this.id = user.id;
            this.name = user.name;
            this.lastname = user.lastname;
            this.email = user.email;
            this.password = user.password;
            this.phone = user.phone;
            this.is_verified = user.is_verified;
            this.avatar = new Avatar(user.avatar);
            this.addresess = user.addresess.map((address: Address) => new Address(address));
            this.role = new Role(user.role);
        } else {
            this.id = "";
            this.name = "";
            this.lastname = "";
            this.email = "";
            this.password = "";
            this.phone = "";
            this.is_verified = false;
            this.avatar = new Avatar();
            this.addresess = [];
            this.role = new Role();
        }
        return this;
    }

    checkRole(role: RoleType): boolean {
        return this.role.name === role;
    }

    isLogged(): boolean {
        return localStorage.getItem('cactus-token') !== null;
    }

    async login() {
        try {
            const result = await Http.post('auth/login', {
                email: this.email,
                password: this.password
            });
            if (result.status) throw result;
            localStorage.setItem('cactus-token', result.token);
            localStorage.setItem('cactus-user', JSON.stringify(result.user));
            router.push("/");
        } catch (error: any) {
            ElMessage.error(error.message);
            console.log(error.message);
        }
    }

    logout() {
        localStorage.removeItem('cactus-token');
        localStorage.removeItem('cactus-user');
        router.push("/login");
    }

}