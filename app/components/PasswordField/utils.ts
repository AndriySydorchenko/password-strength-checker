import {PasswordStrongEnum} from "@/app/components/PasswordField/enums";

export const getStrength = (password: string): PasswordStrongEnum => {

    if (password.length === 0) {
        return PasswordStrongEnum.Empty
    }

    if (password.length < 8) {
        return PasswordStrongEnum.Short
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
        return PasswordStrongEnum.Strong;
    }

    if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        return PasswordStrongEnum.Medium;
    }

    return PasswordStrongEnum.Easy;
};