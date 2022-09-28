import type { AuthenticationSuccessResponseContract } from '@/@types';

import AuthStore from '../@store';
import State from '@/State';

const store = AuthStore();

interface AuthenticatePayloadContract {
    email: string;
    password: string;
}

export default async function authenticate({email, password}: AuthenticatePayloadContract): Promise<void> {
    try {
        const http = State().getHttp();
        const result: AuthenticationSuccessResponseContract = await http.post('login', {email, password});
        store.setUser(result.user);
        State().setJwtToken(result.token);
    } catch (error: any) {
        console.log(error.message);
    }
}