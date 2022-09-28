import type { UserInfoContract } from "@/entities/User";
import { reactive } from "vue";

export interface RegistrationModuleContract {
    setPayload: (payload: UserInfoContract) => void,
    getPayload: () => UserInfoContract,
}

interface RegistrationFormState {
    payload: UserInfoContract,
}


const state = reactive<RegistrationFormState>({
    payload: {} as UserInfoContract,
});


export default function registrationFormStore(): RegistrationModuleContract {
    function setPayload(payload: UserInfoContract): void {
        state.payload = payload;
    }

    function getPayload(): UserInfoContract {
        return state.payload;
    }

    return {
        setPayload,
        getPayload
    }
}