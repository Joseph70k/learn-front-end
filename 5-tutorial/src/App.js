import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Posts from "./pages/Posts";
import Signup from './pages/Signup';
import Login from './pages/Login';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="logo">Project Homepage</div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
        </div>

        <div className="auth-links">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer>
        © 2025 Jeseop's Project
      </footer>
    </BrowserRouter>
  );
}

export default App;
