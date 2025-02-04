
const SignupPage = () => {
    return (
        <>
            {/* Modal */}
            <div className="fixed inset-0 flex items-center justify-center bg-[#0f0f0f] bg-opacity-75">
                <div className="bg-[#212121] p-8 rounded-lg shadow-lg w-full max-w-md relative">
                    <button
                        className="absolute top-4 right-4 text-[#ADADAD] hover:text-[#d53a12]"
                    >
                        &times;
                    </button>

                    <h1 className="text-2xl font-semibold mb-4 text-center text-[#FFFFFF]">SignUp</h1>
                    <form>
                        {/* Username Input */}
                        <div className="mb-4">
                            <label className="block text-[#ADADAD]">Username</label>
                            <input
                                type="text"
                                className="w-full border border-[#adadad] bg-[#0f0f0f] text-[#ADADAD] rounded-md py-2 px-3 focus:outline-none focus:border-[#d53a12]"
                                autoComplete="off"
                            />
                        </div>
                        {/* Password Input */}
                        <div className="mb-4">
                            <label className="block text-[#ADADAD]">Password</label>
                            <input
                                type="password"
                                className="w-full border border-[#adadad] bg-[#0f0f0f] text-[#ADADAD] rounded-md py-2 px-3 focus:outline-none focus:border-[#d53a12]"
                                autoComplete="off"
                            />
                        </div>
                        {/* Remember Me Checkbox */}
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" className="text-[#d53a12]" />
                            <label className="text-[#ADADAD] ml-2">Remember Me</label>
                        </div>
                        {/* Forgot Password Link */}
                        <div className="mb-6 text-[#d53a12]">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>
                        {/* Login Button */}
                        <button
                            type="submit"
                            className="bg-[#d53a12] hover:bg-[#b53910] text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Login
                        </button>
                    </form>
                    {/* Sign up Link */}
                    <div className="mt-6 text-[#d53a12] text-center">
                        <a href="#" className="hover:underline">Sign up Here</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupPage