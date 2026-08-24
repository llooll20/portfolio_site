import "./style/home.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";

//포트폴리오 프로젝트 데이터
const projects = [
    {
    id: 1,
    title: "Project 1",
    keywords: ["React", "Node.js", "Express"],
    content: "This is the content of Project 1.",
    peroid: "2023.01 ~ 2023.02",
    stack: "React, Node.js, Express",
    myRole: "Frontend Developer",
    },
    {
    id: 2,
    title: "Project 2",
    keywords: ["Java", "Spring Boot", "MySQL"],
    content: "This is the content of Project 2.",
    peroid: "2023.03 ~ 2023.04",
    stack: "Java, Spring Boot, MySQL",
    myRole: "Backend Developer",
    }
  ]

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <div className="site-title">SKIFUL</div>

        <nav className="menu">
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/wiki">Wiki</Link>
          <Link to="/playground">Playground</Link>
        </nav>
      </header>

      <main className="home-main">
        <section className="intro">
          <div className="intro-image">
            <div className="intro-text">
              <p>어서오세요.</p>
              <p>소프트웨어 개발자 SKI의 개발 공간입니다.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="home-footer">
        <span>개설 일자</span>
        <span>GitHub</span>
        <span>개발자 이메일</span>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;