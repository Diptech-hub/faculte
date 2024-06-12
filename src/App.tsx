import { Routes, Route } from 'react-router-dom';
import Home from "./components/home"
import Login from "./features/auth/login"
import Signup from "./features/auth/signUp"
import "./App.css"

const App: React.FC = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    );
  }
  
  export default App;