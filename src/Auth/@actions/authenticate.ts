import Http from '../../Http'
import router from '../../router';
import shoppingSessionStore from '../../store/shoppingSessionStore';
import User from '../../entities/User';
import { ElMessage } from 'element-plus';


export default async function authenticate(payload: {email:string, password: string}): Promise<void> {
    try {
        const result = await Http.post('auth/login', payload);
        if (result.status) throw result;
        localStorage.setItem('cactus-token', result.token);
        localStorage.setItem('cactus-user', JSON.stringify(result.user));
        Http.setJwtToken();
        shoppingSessionStore.setUser(new User(result.user));
        router.push("/");
    } catch (error: any) {
        ElMessage.error(error.message);
        console.log(error.message);
    }
}