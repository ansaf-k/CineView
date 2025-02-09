import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, X, User, UserPen, Inbox, LogOut } from "lucide-react";
import { Menu as LucideMenu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  Menu as MTMenu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useLogoutMutation } from "../slice/userSlice";
import { Logout } from "../slice/authSlice";
import toast from "react-hot-toast";

const Navbar = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef(null);
  const [logoutApiCall] = useLogoutMutation()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(Logout()); //removes localstorage data
      navigate('/login');
    } catch (error) {
      toast.error(error?.data?.message);
    }
  }

  // Close search input when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-[#adadad] text-2xl font-medium tracking-tighter">
              <span className="text-[#d53a12] text-4xl">C</span>ine<span className="text-[#d53a12] text-4xl">V</span>iew
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lowercase md:flex space-x-10 text-[#adadad]">
            <Link to="/" className="hover:text-[#d53a12] transition">Home</Link>
            <Link to="/reviews" className="hover:text-[#d53a12] transition">Reviews</Link>
            <Link to="/categories" className="hover:text-[#d53a12] transition">Categories</Link>
            <Link to="/upcoming" className="hover:text-[#d53a12] transition">Upcoming</Link>
          </div>

          {/* Search | Dark Mode | Profile */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div
              ref={inputRef}
              className={`relative flex items-center border border-[#212121] rounded-full bg-[#212121] transition-all duration-300 ${expanded ? "px-3 w-72" : "w-10"}`}
            >
              <button
                onClick={() => setExpanded(true)}
                className="p-2 text-[#adadad]"
              >
                <Search className="h-5 w-5" />
              </button>

              {expanded && (
                <input
                  type="text"
                  placeholder="Search movies, TV shows..."
                  className="bg-transparent text-[#adadad] px-3 py-2 w-full outline-none border-none focus:outline-0"
                />
              )}
            </div>

            {/* Profile Button */}
            {userInfo?.name ?
              <MTMenu
                animate={{
                  mount: { y: 25 },
                  unmount: { y: 0 },
                }}>
                <MenuHandler>
                  <Button className="flex items-center p-2 justify-center rounded-full bg-transparent hover:bg-[#212121] hover:text-[#d53a12] transition duration-300">
                    <span className="text-[#adadad] pr-1 text-sm font-medium rounded-full">{userInfo.name}</span>
                    <div className="text-[#adadad] ">
                      <User size={20} />
                    </div>
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="flex items-center gap-2">
                    <User className="h-5 w-5" color="#adadad" />

                    <Typography variant="small" className="font-medium hover:text-[#d53a12] transition-all duration-200">
                      My Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <UserPen className="h-5 w-5" color="#adadad" />

                    <Typography variant="small" className="font-medium hover:text-[#d53a12] transition-all duration-200">
                      Edit Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem className="flex items-center gap-2">
                    <Inbox className="h-5 w-5" color="#adadad" />

                    <Typography variant="small" className="font-medium hover:text-[#d53a12] transition-all duration-200">
                      Inbox
                    </Typography>
                  </MenuItem>
                  <hr className="my-2 border-blue-gray-50" />
                  <MenuItem className="flex items-center gap-2 ">
                    <LogOut className="h-5 w-5" color="#adadad" />

                    <Typography onClick={logoutHandler} variant="small" className="font-medium hover:text-[#d53a12] transition-all duration-200">
                      Sign Out
                    </Typography>
                  </MenuItem>
                </MenuList>
              </MTMenu>
              : <button onClick={() => navigate('/login')} className="p-2 rounded-full text-[#adadad] hover:bg-[#212121] transition">
                <User size={20} />
              </button>}

            {/* Mobile Menu Button */}
            <button onClick={toggleMobileMenu} className="md:hidden text-[#adadad] hover:text-[#d53a12] p-2 transition">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <LucideMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden uppercase flex flex-col space-y-2 mt-2 text-[#adadad] bg-[#0f0f0f] p-4 rounded-lg">
            <Link to="/" className="hover:text-[#d53a12] transition">Home</Link>
            <Link to="/reviews" className="hover:text-[#d53a12] transition">Reviews</Link>
            <Link to="/categories" className="hover:text-[#d53a12] transition">Categories</Link>
            <Link to="/top-rated" className="hover:text-[#d53a12] transition">Top Rated</Link>
            <Link to="/upcoming" className="hover:text-[#d53a12] transition">Upcoming</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
