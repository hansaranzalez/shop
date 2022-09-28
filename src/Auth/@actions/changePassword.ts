
import State from "@/State";

export default async function changePassword({email,password,codeid}: any): Promise<any> {
    try {
        const http = State().getHttp();
        const result = await http.post('change-password', {email,password,codeid});
        return result.message;
    } catch (error: any) {
        console.log(error.message)
    }
}