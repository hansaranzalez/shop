import User, { type UserInfoContract } from "@/entities/User";
import router from "@/router";
import State from "@/State";
import { ElMessage } from "element-plus";

export default async function registerUser(newUser: UserInfoContract): Promise<any> {
    try {
        const http = State().getHttp();
        const user = User(newUser).getInfo();
        delete user.repeatPassword;
        await http.post('register-user', user);
        const exeption = State().getExeption();
        if (exeption) return false;
        return true;
    } catch (error: any) {
        console.log(error.message)
    }
}