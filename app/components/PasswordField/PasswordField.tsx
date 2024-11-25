'use client'
import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';

const PasswordStrengthMeter: React.FC = () => {
    const [password, setPassword] = useState('');

    const getStrength = (pwd: string) => {
        if (pwd.length < 8) return 'short';
        const hasLetters = /[a-zA-Z]/.test(pwd);
        const hasDigits = /\d/.test(pwd);
        const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

        if (hasLetters && hasDigits && hasSymbols) return 'strong';
        if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) return 'medium';
        return 'weak';
    };

    const strength = getStrength(password);

    const strengthLevels = ['short', 'weak', 'medium', 'strong'];
    const strengthColors: { [key: string]: string } = {
        short: 'bg-red-500',
        weak: 'bg-red-500',
        medium: 'bg-yellow-500',
        strong: 'bg-green-500',
        default: 'bg-gray-300',
    };

    return (
        <Box className="max-w-md mx-auto mt-20 p-4 shadow-lg rounded-lg bg-white">
            <TextField
                label="Enter Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4"
            />
            <Box className="flex justify-between mt-2">
                {strengthLevels.slice(1).map((level, index) => (
                    <div
                        key={index}
                        className={`flex-1 h-2 mx-1 rounded-full ${
                            password.length === 0
                                ? strengthColors.default
                                : password.length < 8
                                    ? strengthColors.short
                                    : strength === 'strong'
                                        ? strengthColors.strong
                                        : strength === 'medium' && index < 2
                                            ? strengthColors.medium
                                            : strength === 'weak' && index < 1
                                                ? strengthColors.weak
                                                : strengthColors.default
                        }`}
                    />
                ))}
            </Box>
            <Typography variant="body2" align="center" className="mt-2">
                {password.length === 0
                    ? 'Enter a password'
                    : password.length < 8
                        ? 'Password too short'
                        : `Password strength: ${strength}`}
            </Typography>
        </Box>
    );
};

export default PasswordStrengthMeter;
