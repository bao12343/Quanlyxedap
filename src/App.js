import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/HomePage/Homepage";

import "./App.css";
import LoginForm from "./layout/User/Login/LoginForm";
import SignUpForm from "./layout/User/Signup/SignupForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
