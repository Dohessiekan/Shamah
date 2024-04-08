import React from "react";
import "./App.css";
import Header from "./components/common/header/Header";
import { Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import Account from "./components/login/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectRouter";

function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Routes>
      <Route path="/" element={<Signin />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        < Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseHome />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/journal" element={<Blog />} />
      </Routes>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
