import React, { useState } from "react";

const SignIn = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Send form data to server for authentication
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <form className="bg-gray-800 rounded-lg shadow-xl px-16 py-12 space-y-6" onSubmit={handleSubmit}>
                <h2 className="text-3xl font-extrabold text-center text-yellow-500 uppercase">Sign In</h2>
                <div>
                    <label className="block text-gray-50 font-medium mb-2">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="Email address"
                        placeholder="Enter your email address"
                        className="appearance-none text-gray-900 rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-50 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label className="block text-gray-50 font-medium mb-2">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="password address"
                        placeholder="Enter your password"
                        className="appearance-none text-gray-900 rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-50 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-400 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >Sign In
                </button>
            </form>
        </div>
    );
};

export default SignIn;
