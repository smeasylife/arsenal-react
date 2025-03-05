import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault(); // 폼 제출 시 새로고침 방지
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    console.log("이메일 : " + email);
    console.log("비밀번호 : " + password);


    try {
      const response = await axios({
        url: 'http://localhost:8080/login',
        method: 'POST',
        data: formData,
        withCredentials: true,
      });

      console.log('로그인 성공:', response.data);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.error('회원가입 실패:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">이메일</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">비밀번호</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition font-semibold"
          >
            로그인
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          계정이 없으신가요?{' '}
          <button className="text-red-600 hover:underline font-semibold" onClick={() => navigate("/signup")}>
            회원가입
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;