import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./features/auth/login";
import Signup from "./features/auth/signUp";
import Result from "./components/result";
import PrivateRoute from "./components/privateRoute";
import Admin from "./components/admin"
import CourseDetail from "./components/courseDetail"
import Cart from "./components/cart"
import "./App.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/result" element={<PrivateRoute />}>
        <Route path="" element={<Result />} />
      </Route>
      <Route path="/items/:id" element={<PrivateRoute />}>
        <Route path="" element={<CourseDetail />} />
      </Route>
      <Route path="/cart" element={<PrivateRoute />}>
        <Route path="" element={<Cart />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
