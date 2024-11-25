import {StrengthSectionProps} from "@/app/components/PasswordField/intefaces";
import {Typography} from "@mui/material";
import React from "react";
import {PasswordStrongEnum} from "@/app/components/PasswordField/enums";

const strengthMessages = {
    [PasswordStrongEnum.Empty]: 'Enter a password',
    [PasswordStrongEnum.Short]: 'Password too short',
    [PasswordStrongEnum.Easy]: `Password strength: ${PasswordStrongEnum.Easy}`,
    [PasswordStrongEnum.Medium]: `Password strength: ${PasswordStrongEnum.Medium}`,
    [PasswordStrongEnum.Strong]: `Password strength: ${PasswordStrongEnum.Strong}`,
}

export const StrengthExplanation = ({strength}: StrengthSectionProps) =>
    <Typography variant="body2" align="center" className="mt-2 text-gray-500">
        {strengthMessages[strength]}
    </Typography>