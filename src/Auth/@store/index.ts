import type { UserInfoContract } from "@/entities/User";
import { reactive } from "vue";
import passwordRecoveryVerificationModule, { type PasswordRecoveryVerificationModuleContract } from "./passwordRecoveryVerificationModule";
import registrationModule, { type RegistrationModuleContract } from "./registrationFormModule";

type AuthModule = PasswordRecoveryVerificationModuleContract | RegistrationModuleContract;

type GetModulePropType = 'passwordRecoveryVerificationModule' | 'registrationModule'

interface StoreModulesContract {
    passwordRecoveryVerificationModule: typeof passwordRecoveryVerificationModule;
    registrationModule: typeof registrationModule;
}

interface AuthStateContract {
    user: UserInfoContract;
    modules: StoreModulesContract,
}

const state = reactive<AuthStateContract>({
    user: {} as UserInfoContract,
    modules: {
        passwordRecoveryVerificationModule,
        registrationModule,
    },
});

export default function AuthStore() {

    function setUser(user: UserInfoContract): void {
        user.isAuthenticated = true;
        state.user = user;
    }
    
    function isUserAuthenticated(): boolean {
        return state.user.isAuthenticated;
    }

    function getUser(): UserInfoContract {
        return state.user;
    }

    function getModule(module: GetModulePropType): AuthModule | void {
        if (module === 'registrationModule') return state.modules[module]() as RegistrationModuleContract;
        if (module === 'passwordRecoveryVerificationModule') return state.modules[module]() as PasswordRecoveryVerificationModuleContract;
    }

    return {
        getModule,
        setUser,
        isUserAuthenticated,
        getUser,
    }

}