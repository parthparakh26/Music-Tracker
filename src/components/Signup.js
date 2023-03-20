import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Signup = () => {

    let [formdata, setFormdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
            });

            const data = await response.json();
            console.log(data);
            toast.success(`${formdata.firstName} ${formdata.lastName} is successfully registered`);

        } catch (err) {
            console.error(err);
            toast.error(`${formdata.firstName} Registration unsuccessful`);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div><Toaster /></div>
            <div className="max-w-md w-full p-6 space-y-6 bg-gray-800 rounded-lg shadow-xl">
                <h2 className="text-center text-3xl font-extrabold text-yellow-500 uppercase">Sign Up</h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="firstName" className="sr-only">
                                First Name
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                autoComplete="given-name"
                                required
                                className="appearance-none text-gray-900 rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-50 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                                placeholder="First Name"
                                value={formdata.firstName}
                                onChange={(e) =>
                                    setFormdata({
                                        ...formdata,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="sr-only">
                                Last Name
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                autoComplete="family-name"
                                required
                                className="appearance-none text-gray-900 rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-50 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                                placeholder="Last Name"
                                value={formdata.lastName}
                                onChange={(e) =>
                                    setFormdata({
                                        ...formdata,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none text-gray-900 rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-50 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={formdata.email}
                                onChange={(e) =>
                                    setFormdata({
                                        ...formdata,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none text-gray-900 rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-gray-50 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={formdata.password}
                                onChange={(e) =>
                                    setFormdata({
                                        ...formdata,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-500 bg-gray-700 hover:bg-yellow-500 hover:text-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg
                                    className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;




