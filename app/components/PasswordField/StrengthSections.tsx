import {PasswordStrongEnum, SectionColors} from "@/app/components/PasswordField/enums";
import {Box} from "@mui/material";
import React from "react";
import {StrengthSectionProps} from "@/app/components/PasswordField/intefaces";

const strengthColors = {
    [SectionColors.Red]: 'bg-red-500',
    [SectionColors.Grey]: 'bg-gray-300',
    [SectionColors.Yellow]: 'bg-yellow-500',
    [SectionColors.Green]: 'bg-green-500',
};

const colorSections = {
    [PasswordStrongEnum.Empty]: [SectionColors.Grey, SectionColors.Grey, SectionColors.Grey],
    [PasswordStrongEnum.Short]: [SectionColors.Red, SectionColors.Red, SectionColors.Red],
    [PasswordStrongEnum.Easy]: [SectionColors.Red, SectionColors.Grey, SectionColors.Grey],
    [PasswordStrongEnum.Medium]: [SectionColors.Yellow, SectionColors.Yellow, SectionColors.Grey],
    [PasswordStrongEnum.Strong]: [SectionColors.Green, SectionColors.Green, SectionColors.Green],
}

export const StrengthSections = ({strength}: StrengthSectionProps) =>
    <Box className="flex justify-between mt-2">
        {strength && colorSections[strength]?.map((color: SectionColors, index) => (
            <div
                key={index}
                className={`flex-1 h-2 mx-1 rounded-full ${strengthColors[color]}`}
            />
        ))}
    </Box>