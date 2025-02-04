import { Link, useNavigate } from 'react-router'
const LoginPage = () => {
  const navigate = useNavigate();

  const HandleRegister = () => {

  }

  return (
    <>
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0f0f] bg-opacity-75">
        <div className="relative bg-[#212121] rounded-lg shadow-lg max-w-4xl w-full mx-auto">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 z-50 text-[#ffffff] hover:text-[#d53a12]"
            onClick={() => navigate('/')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Content */}
          <div className="flex flex-wrap h-[70vh]">
            {/* Form Section */}
            <div className="w-full flex-auto justify-center content-center items-center lg:w-1/2 px-6 py-8">
              <div className="text-center">
                <h1 className="text-2xl font-bold sm:text-3xl text-[#ffffff]">Welcome Back!<br />Log In to Your Account</h1>
                <p className="mt-4 text-[#adadad]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa
                  culpa autem, at itaque nostrum!
                </p>
              </div>

              <form onSubmit={HandleRegister} className="mt-8 space-y-4">
                <div>
                  <label className="sr-only">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full rounded-lg border-[#adadad] p-2 text-sm shadow-sm bg-[#0f0f0f] text-[#ffffff] focus:outline-none focus:border-[#d53a12]"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full rounded-lg border-[#adadad] p-2 text-sm shadow-sm bg-[#0f0f0f] text-[#ffffff] focus:outline-none focus:border-[#d53a12]"
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#adadad]">
                    No account?
                    <Link className="underline text-[#d53a12]" to="/signup">Sign up</Link>
                  </p>

                  <button
                  to="/signup"
                    type="submit"
                    className="inline-block rounded-lg bg-[#d53a12] px-5 py-3 text-sm font-medium text-white hover:bg-[#b53910]"
                  >
                    Log In
                  </button>
                </div>
              </form>
            </div>

            {/* Image Section */}
            <div className="relative w-full lg:w-1/2">
              <img
                alt="Banner"
                src="../../src/assets/banner5.jpg"
                className="absolute inset-0 h-full w-full object-cover rounded-r-lg"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LoginPage