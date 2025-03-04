// Header.js
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const handleNavigation = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate("/login"); // 로그인되지 않았다면 로그인 페이지로 이동
    }
  };

  return (
    <header className="flex items-center p-4 shadow-md bg-white fixed top-0 w-full z-50 border-b-2 border-gray-200">
      <img src="/assets/images/arsenal-logo.jpg" alt="Club Logo" className="w-20 ml-4" />
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-6 items-center">
          <li>
            <button className="text-base font-bold text-gray-800 hover:text-red-600 transition" onClick={() => navigate("/")}>메인 화면</button>
          </li>
          <li>
            <button className="text-base font-bold text-gray-800 hover:text-red-600 transition" onClick={() => handleNavigation("/staff")}>구단 소속진</button>
          </li>
          <li>
            <button className="text-base font-bold text-gray-800 hover:text-red-600 transition" onClick={() => handleNavigation("/schedule")}>경기 일정</button>
          </li>
          <li>
            <button className="text-base font-bold text-gray-800 hover:text-red-600 transition" onClick={() => handleNavigation("/news")}>구단 뉴스</button>
          </li>
          <li>
             <button className="text-base font-bold text-gray-800 hover:text-red-600 transition" onClick={() => navigate("/board")}>자유 게시판</button>
          </li>
          <li>
            <button className="text-base font-bold text-gray-800 hover:text-red-600 transition" onClick={() => navigate("/login")}>로그인</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;