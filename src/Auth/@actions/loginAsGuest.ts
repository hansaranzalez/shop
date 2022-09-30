import { ElMessage } from "element-plus";
import User from "../../entities/User";
import Http from "../../Http";
import shoppingSessionStore from "../../store/shoppingSessionStore";

export default async function loginAsGuest(): Promise<void> {
    try {
        const result = await Http.get('auth/guest/login');
        if (result.status) throw result;
        localStorage.setItem('cactus-token', result.token);
        Http.setJwtToken();
        shoppingSessionStore.setUser(new User(result.user));
    } catch (error: any) {
        ElMessage.error(error.message);
        console.log(error.message);
    }
}