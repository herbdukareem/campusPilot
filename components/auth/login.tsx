'use client';
import { Card, CardHeader } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { MdRemoveRedEye } from 'react-icons/md';
import { IoEyeOff } from 'react-icons/io5';
import { Button } from '@nextui-org/button';
import { Checkbox } from '@nextui-org/react';
import { useRouter } from 'next/navigation'; 

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [matricNumber, setMatricNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();
    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleLogin = async () => {
        setError('');

        // Basic validation
        if (!matricNumber || !password) {
            setError('Matric Number and Password are required');
            return;
        }

        setIsLoading(true);
        try {
          
            await new Promise((resolve) => setTimeout(resolve, 3000)); 
            router.push('/student');
            if (rememberMe) {
                localStorage.setItem('matricNumber', matricNumber);
            }
        } catch (err) {
            setError('Login failed, please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-2 md:p-4">
            <div className="flex flex-col justify-center items-center">
                <h4 className="font-medium text-large">Welcome Back!</h4>
                <p className="text-tiny">Enter your details to sign in.</p>
            </div>
            <div className="m-4 flex flex-col gap-4">
                {/* Matric Number Input */}
                <Input
                    size="md"
                    type="text"
                    label="Matric Number"
               
                    value={matricNumber}
                    onChange={(e) => setMatricNumber(e.target.value)}
                />

                {/* Password Input */}
                <Input
                    label="Password"
                    fullWidth
                
                    endContent={
                        <button
                            className="focus:outline-none"
                            type="button"
                            onClick={toggleVisibility}
                            aria-label="toggle password visibility"
                        >
                            {isVisible ? (
                                <MdRemoveRedEye className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </button>
                    }
                    type={isVisible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm">{error}</p>}

                {/* Sign In Button */}
                <Button
                    size="md"
                    color="primary"
                    variant="solid"
                    className="text-white"
                    onClick={handleLogin}
                    isLoading={isLoading} 
                >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>

                <div className="flex justify-between">
                    {/* Remember Me Checkbox */}
                    <Checkbox
                        isSelected={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="text-white"
                    >
                        Remember Me
                    </Checkbox>

                    {/* Forget Password Button */}
                    <Button
                        color="primary"
                        variant="light"
                        onClick={() => console.log('Redirect to Forgot Password')}
                    >
                        Forgot Password?
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
