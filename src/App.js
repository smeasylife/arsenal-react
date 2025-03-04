import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Board from "./components/Board";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState, createContext} from "react";
import "./App.css";

const AuthContext = createContext();
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
  <Router>
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/board" element={<Board />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  </Router>

  );
};

export default App;
export { AuthContext };