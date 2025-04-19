"use client";
import {
    signInWithCredentials,
    signInWithSocial,
} from "@/app/actions/auth-actions";
import { useFormState } from "react-dom";
import { TfiGoogle, TfiGithub } from "react-icons/tfi";

const LoginForm = () => {
    const initialState = { message: "", errors: {} };
    const [state, dispatch] = useFormState(signInWithCredentials, initialState);

    return (
        <div className="flex justify-center border border-gray-200 text-black items-center px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-center text-2xl font-light mb-4 ">Sign In</h2>

                {state?.message && (
                    <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
                        {state.message}
                    </div>
                )}

                <form action={dispatch} className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            name="username"
                            defaultValue="atuny0"
                            placeholder="Username"
                            className={`peer w-full border ${
                                state?.errors?.username ? "border-red-500" : "border-gray-300"
                            } rounded px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                        />
                        <label className="absolute left-3 top-2 text-sm text-gray-500 peer-focus:text-yellow-600">
                            Username
                        </label>
                        {state?.errors?.username && (
                            <p className="text-red-500 text-xs mt-1">{state.errors.username}</p>
                        )}
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            defaultValue="9uQFF1Lh"
                            placeholder="Password"
                            className={`peer w-full border ${
                                state?.errors?.password ? "border-red-500" : "border-gray-300"
                            } rounded px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                        />
                        <label className="absolute left-3 top-2 text-sm text-gray-500 peer-focus:text-yellow-600">
                            Password
                        </label>
                        {state?.errors?.password && (
                            <p className="text-red-500 text-xs mt-1">{state.errors.password}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded uppercase"
                    >
                        Sign In
                    </button>
                </form>

                <hr className="my-6" />

                <form action={signInWithSocial} className="mb-3">
                    <input type="hidden" name="provider" value="google" />
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
                    >
                        <TfiGoogle /> Sign in with Google
                    </button>
                </form>

                <form action={signInWithSocial}>
                    <input type="hidden" name="provider" value="github" />
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded"
                    >
                        <TfiGithub /> Sign in with Github
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
