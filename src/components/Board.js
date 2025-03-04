import React from "react";

const posts = [
  { id: 1, title: "아스널 경기 분석", content: "최근 경기력 분석 및 선수 평가", image: "/assets/images/game.jpg" },
  { id: 2, title: "이적 시장 소식", content: "아스널의 최신 이적 시장 루머", image: "/assets/images/trade.jpg" },
  { id: 3, title: "다음 경기 일정", content: "다가오는 경기와 예상 라인업", image: "/assets/images/team.jpg" },
  { id: 4, title: "팬 의견 모음", content: "팬들의 다양한 의견을 공유합니다.", image: "/assets/images/fan.jpg" },
  { id: 5, title: "아스널 역사", content: "클럽의 역사적인 순간들", image: "/assets/images/greateTime.jpg" },
  { id: 6, title: "전술 분석", content: "미켈 아르테타 감독의 전술 해석", image: "/assets/images/arteta.jpg" },
  { id: 7, title: "선수 인터뷰", content: "최근 선수들의 인터뷰 내용 요약", image: "/assets/images/saka.jpg" },
  { id: 8, title: "경기 하이라이트", content: "최근 경기 주요 장면 다시보기", image: "/assets/images/recent.jpg" }
];

const Board = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">팬 게시판</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:-translate-y-1">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
