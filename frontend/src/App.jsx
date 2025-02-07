import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Toaster from 'react-hot-toast'
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className='font'>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/profile" element={<Profile />} /> */}

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
