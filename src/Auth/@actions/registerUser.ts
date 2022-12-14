import { ElMessage } from "element-plus";
import User from "../../entities/User";
import Http from "../../Http";
import router from "../../router";
import shoppingSessionStore from "../../store/shoppingSessionStore";

export default async function registerUser(): Promise<any> {
    try {
        const user = shoppingSessionStore.getUserRegistrationPayload();
        const result = await Http.post('auth/register', user);
        if (result.status) throw result;
        localStorage.setItem('cactus-token', result.token);
        localStorage.setItem('cactus-user', JSON.stringify(result.user));
        Http.setJwtToken();
        shoppingSessionStore.setUser(new User(result.user));
        router.push("/");
    } catch (error: any) {
        ElMessage.error(error.message);
        console.log(error.message)
    }
}