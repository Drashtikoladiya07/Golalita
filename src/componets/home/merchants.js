import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";

function Merchants() {
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isResetPassword, setIsResetPassword] = useState(false);

    return (
        <section id='Merchants' className='mt-40'>
            <div className="flex items-center justify-center">
                <div className="w-80">
                    {isResetPassword ? (
                        <div>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-500 font-medium mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email Address"
                                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100" />
                                </div>
                                <div className="mb-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-teal-400 text-white font-medium py-1 rounded hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-200">Confirm
                                    </button>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        onClick={() => setIsResetPassword(false)}
                                        className="text-sm text-teal-400 hover:underline">Back to Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-500 font-medium mb-2">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="E-mail"
                                        className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-gray-500 font-medium mb-2">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-100" />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 px-3 text-blue-500 hover:text-blue-700 focus:outline-none">{showPassword ? "👁️" : "👁️"}
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-teal-400 text-white font-medium py-1 rounded hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-200">Log in
                                    </button>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="button"
                                        onClick={() => setIsResetPassword(true)}
                                        className="text-sm text-teal-400 hover:underline">Reset Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Merchants;