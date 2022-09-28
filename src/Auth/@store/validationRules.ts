import type { FormRules } from "element-plus";
import { computed, reactive } from "vue";
import AuthStore from "./index";
import type { RegistrationModuleContract } from "./registrationFormModule";
import State from "@/State";

const i18n = computed(() => State().getI18n());

export default {
    loginForm: reactive<FormRules>({
        email: [
            {
                required: true,
                message: i18n.value.formValidationMessages.pleaseEnterEmailAddress,
                trigger: "blur",
            },
            {
                type: "email",
                message: i18n.value.formValidationMessages.pleaseInputCorrectEmail,
                trigger: ["blur", "change"],
            },
        ],
        password: [
            {
                required: true,
                message: i18n.value.formValidationMessages.pleaseEnterYourPassword,
            },
            { min: 6, message: i18n.value.formValidationMessages.minSixCharacters, trigger: "blur" },
        ],
    }),
    passwordRecoveryVerificationCode: reactive<FormRules>({
        code: [
            {
                required: true,
                message: i18n.value.formValidationMessages.required,
                trigger: "blur",
            },
        ],
    }),
    passwordRecovery: reactive<FormRules>({
        email: [
            {
                required: true,
                message: i18n.value.formValidationMessages.pleaseEnterEmailAddress,
                trigger: "blur",
            },
            {
                type: "email",
                message: i18n.value.formValidationMessages.pleaseInputCorrectEmail,
                trigger: ["blur", "change"],
            },
        ],
    }),
    registration: reactive<FormRules>({
        name: [{
          required: true,
          message: i18n.value.formValidationMessages.pleaseEnterYourName,
          trigger: "blur",
        },],
        lastname: [{
          required: true,
          message: i18n.value.formValidationMessages.pleaseEnterYourLastname,
          trigger: "blur",
        },],
        email: [
          {
            required: true,
            message: i18n.value.formValidationMessages.pleaseEnterEmailAddress,
            trigger: "blur",
          },
          {
            type: "email",
            message: i18n.value.formValidationMessages.pleaseInputCorrectEmail,
            trigger: ["blur", "change"],
          },
        ],
        phone: [{ min: 7, message: i18n.value.formValidationMessages.minSevenCharacters, trigger: "blur" },],
        password: [
          {
            required: true,
            message: "Please enter your password",
            trigger: "blur",
          },
          { min: 6, message: i18n.value.formValidationMessages.minSixCharacters, trigger: "blur" },
        ],
        repeatPassword: [
          {
            required: true,
            message: i18n.value.formValidationMessages.pleaseEnterYourPassword,
            trigger: "blur",
          },
          {
            validator: validateRepeatePassword,
            trigger: "blur"
          }
        ]
      })
}

// CUSTOM VALIDATIONS

function validateRepeatePassword(rule: any, value: any, callback: any) {
    const registrationFormStore = AuthStore().getModule('registrationModule');
    if (!registrationFormStore) return callback(new Error('Store not set'));
    const payload = computed(() => (registrationFormStore as RegistrationModuleContract).getPayload());
    if (value === '') {
      callback(new Error(i18n.value.formValidationMessages.pleaseInputPasswordAgain))
    } else if (value !== payload.value.password) {
      callback(new Error(i18n.value.formValidationMessages.twoPasswordsDontMatch))
    } else {
      callback()
    }
  }