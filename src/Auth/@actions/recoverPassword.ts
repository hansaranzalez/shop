
import State from "@/State";

export default async function recoverPassword(email: string): Promise<any> {
    try {
        const http = State().getHttp();
        await http.post('recover-password', {email});
    } catch (error: any) {
       console.log(error.message);
    }
}