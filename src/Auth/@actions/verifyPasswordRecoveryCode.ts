
import State from "@/State";

export default async function verifyPasswordRecoveryCode(email: string, code: string): Promise<any> {
    try {
        const http = State().getHttp();
        return await http.post('verify-password-recovery-code', {email,code});
    } catch (error: any) {
        console.log(error.message)
    }
}