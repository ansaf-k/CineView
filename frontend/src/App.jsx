import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
  );
}

export default App;
