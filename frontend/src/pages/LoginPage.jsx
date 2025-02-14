import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router'
import { setCredentials } from '../slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useLoginMutation } from '../slice/userSlice';
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userInfo = useSelector((state) => state.auth.userInfo)
  const [login] = useLoginMutation();

  const HandleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("object");
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({...res}));
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  }

  useEffect(() => {
    if (userInfo) {
        navigate('/');
    }
}, [userInfo, navigate])

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-75">
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
              </div>

              <form onSubmit={HandleRegister} className="mt-8 space-y-4">
                <div>
                  <label className="sr-only">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full rounded-lg border-[#adadad] p-2 text-sm shadow-sm bg-[#0f0f0f] text-[#ffffff] focus:outline-none focus:border-[#d53a12]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#adadad]">
                    already have an account?
                    <Link className="underline text-[#d53a12]" to="/signup">Login</Link>
                  </p>

                  <button
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
                alt="Banner signup"
                src="../src/assets/theatre.jpeg"
                className="absolute inset-0 brightness-50 h-full w-full object-cover rounded-r-lg"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LoginPage