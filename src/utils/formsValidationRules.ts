import { reactive } from "vue";
import { FormRules } from "element-plus";
import appStore from "../store/appStore";



const formValidationRules = () => {
    const trans = appStore.i18n();

    // CUSTOM VALIDATIONS

    return {
        loginForm: reactive<FormRules>({
            email: [
                {
                    required: true,
                    message: trans.formValidationMessages.pleaseEnterEmailAddress,
                    trigger: "blur",
                },
                {
                    type: "email",
                    message: trans.formValidationMessages.pleaseInputCorrectEmail,
                    trigger: ["blur", "change"],
                },
            ],
            password: [
                {
                    required: true,
                    message: trans.formValidationMessages.pleaseEnterYourPassword,
                },
                { min: 6, message: trans.formValidationMessages.minSixCharacters, trigger: "blur" },
            ],
        }),
        passwordRecoveryVerificationCode: reactive<FormRules>({
            code: [
                {
                    required: true,
                    message: trans.formValidationMessages.required,
                    trigger: "blur",
                },
            ],
        }),
        passwordRecovery: reactive<FormRules>({
            email: [
                {
                    required: true,
                    message: trans.formValidationMessages.pleaseEnterEmailAddress,
                    trigger: "blur",
                },
                {
                    type: "email",
                    message: trans.formValidationMessages.pleaseInputCorrectEmail,
                    trigger: ["blur", "change"],
                },
            ],
        }),
        registration: reactive<FormRules>({
            name: [{
                required: true,
                message: trans.formValidationMessages.pleaseEnterYourName,
                trigger: "blur",
            },],
            lastname: [{
                required: true,
                message: trans.formValidationMessages.pleaseEnterYourLastname,
                trigger: "blur",
            },],
            email: [
                {
                    required: true,
                    message: trans.formValidationMessages.pleaseEnterEmailAddress,
                    trigger: "blur",
                },
                {
                    type: "email",
                    message: trans.formValidationMessages.pleaseInputCorrectEmail,
                    trigger: ["blur", "change"],
                },
            ],
            phone: [{ min: 7, message: trans.formValidationMessages.minSevenCharacters, trigger: "blur" },],
            password: [
                {
                    required: true,
                    message: "Please enter your password",
                    trigger: "blur",
                },
                { min: 6, message: trans.formValidationMessages.minSixCharacters, trigger: "blur" },
            ],
            // repeatPassword: [
            //     {
            //         required: true,
            //         message: trans.formValidationMessages.pleaseEnterYourPassword,
            //         trigger: "blur",
            //     },
            //     {
            //         validator: validateRepeatePassword,
            //         trigger: "blur"
            //     }
            // ]
        }),
        shippingAddress: reactive<FormRules>({
            address_line_1: [
                {
                    required: true,
                    message: 'Please enter your address',
                    trigger: "blur",
                },
            ],
            address_line_2: [
                {
                    required: true,
                    message: 'Please enter your address',
                    trigger: "blur",
                },
            ],
            city: [
                {
                    required: true,
                    message: 'Please enter your city',
                    trigger: "blur",
                },
            ],
            state: [
                {
                    required: true,
                    message: 'Please enter your state',
                    trigger: "blur",
                },
            ],
            postal_code: [
                {
                    required: true,
                    message: 'Please enter your zip',
                    trigger: "blur",
                },
            ],
            country: [
                {
                    required: true,
                    message: 'Please enter your country',
                    trigger: "blur",
                },
            ],
        }),
    }
};

export default formValidationRules;


