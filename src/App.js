import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Board from "./components/Board";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import "./App.css";

const App = () => {
  return (
    <Router>
      <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/board" element={<Board />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
        </div> 
        
      </AuthProvider>
    </Router>

  );
};

export default App;