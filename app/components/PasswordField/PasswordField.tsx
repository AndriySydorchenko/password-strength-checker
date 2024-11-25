'use client'
import React from 'react';
import {Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from '@mui/material';
import {StrengthSections} from "@/app/components/PasswordField/StrengthSections";
import {StrengthExplanation} from "@/app/components/PasswordField/StrengthExplanation";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {usePasswordField} from "@/app/components/PasswordField/usePasswordField";
import {getStrength} from "@/app/components/PasswordField/utils";

const PasswordField: React.FC = () => {
    const {password, showPassword, setPassword, togglePasswordVisibility} = usePasswordField()
    const strength = getStrength(password);
    
    return (
        <Box className="max-w-md mx-auto mt-20 p-4 shadow-lg rounded-lg bg-white">
            <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Enter Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    label="Enter Password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4"

                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={togglePasswordVisibility} edge="end">
                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                            </IconButton>
                        </InputAdornment>
                    }

                />
            </FormControl>
            <StrengthSections strength={strength}/>
            <StrengthExplanation strength={strength}/>
        </Box>
    );
};

export default PasswordField;
