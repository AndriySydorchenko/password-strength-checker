import React, {useState} from "react";

export const usePasswordField = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

    return {password, showPassword, setPassword, togglePasswordVisibility};
}