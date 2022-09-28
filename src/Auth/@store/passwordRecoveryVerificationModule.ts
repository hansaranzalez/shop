import { reactive } from "vue";

export interface PasswordRecoveryVerificationModuleContract {
    setVerificationEmail: (verificationEmail: string) => void,
    getVerificationEmail: () => string,
    setVerificationCodeId: (verificationCodeId: string) => void,
    getVerificationCodeId: () => string,
}

interface VerificationCodeFormState {
    verificationEmail: string,
    verificationCodeId: string,
}

const state = reactive<VerificationCodeFormState>({
    verificationEmail: '',
    verificationCodeId: '',
});

export default function passwordRecoveryVerificationModule(): PasswordRecoveryVerificationModuleContract {
    function setVerificationEmail(verificationEmail: string): void {
        state.verificationEmail = verificationEmail;
    }

    function getVerificationEmail(): string {
        return state.verificationEmail;
    }

    function setVerificationCodeId(verificationCodeId: string): void {
        state.verificationCodeId = verificationCodeId;
    }

    function getVerificationCodeId(): string {
        return state.verificationCodeId;
    }

    return {
        setVerificationEmail,
        getVerificationEmail,
        setVerificationCodeId,
        getVerificationCodeId
    }
}