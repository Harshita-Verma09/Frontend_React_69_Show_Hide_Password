import { useState } from "react";

const PasswordToggle = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col gap-3 p-4 border w-80 mx-auto rounded-md">
            <label className="text-lg font-semibold">Enter Password:</label>
            <div className="relative">
                <input 
                    type={showPassword ? "text" : "password"} 
                    className="border px-3 py-2 w-full rounded-md"
                    placeholder="Enter your password"
                />
                <button 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-sm text-blue-600"
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
        </div>
    );
};

export default PasswordToggle;
