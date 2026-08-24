import { Link } from "react-router-dom";
import "../style/portfolio.css";

//포트폴리오 프로젝트 데이터
/*const projects = [
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
  ]*/

function Portfolio() {
  return (
    <div className="portfolio-page">
      <div className="portfolio-title">Portfolio</div>

      <div className="portfolio-container">
        {/* 사이트 헤더 */}
        <header className="portfolio-header">
          <Link to="/" className="portfolio-site-name">
            SKIFUL
          </Link>

          <nav className="portfolio-menu">
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/wiki">Wiki</Link>
            <Link to="/playground">Playground</Link>
          </nav>
        </header>

        {/* 이력서 / 소개 */}
        <section className="resume-section">
          <h2>Profile</h2>

          <div className="resume-content">
            <div>
              <strong>이름</strong>
              <span>SKI</span>
            </div>

            <div>
              <strong>학력</strong>
              <span>소프트웨어 관련 전공</span>
            </div>

            <div>
              <strong>개발 분야</strong>
              <span>Software Development</span>
            </div>
          </div>
        </section>

        {/* 포트폴리오 영역 */}
        <section className="portfolio-content">

          {/* 프로젝트 목록 */}
          <aside className="project-list">
            <button className="project-item active">
              포트폴리오 1 제목
            </button>

            <button className="project-item">
              포트폴리오 2 제목
            </button>
          </aside>

          {/* 프로젝트 상세 */}
          <main className="project-detail">
            <h1>포트폴리오 1 제목</h1>

            <p className="project-description">
              포트폴리오 프로젝트의 개요를 작성하는 영역입니다.
            </p>

            <div className="project-info">
              <p>
                <strong>개발 기간</strong>
                <span>2026.01 ~ 2026.03</span>
              </p>

              <p>
                <strong>개발 역할</strong>
                <span>개인 프로젝트</span>
              </p>

              <p>
                <strong>기술 스택</strong>
                <span>React, C#, ASP.NET Core</span>
              </p>

              <p>
                <strong>주요 기술</strong>
                <span>REST API, PostgreSQL, Docker</span>
              </p>
            </div>

            {/* 이미지 업로드 기능은 구현하지 않고 자리만 만든다 */}
            <div className="project-image">
              프로젝트 이미지
            </div>

            <div className="project-actions">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
                Github 이동
              </a>

              <button
                type="button"
                className="project-button"
                disabled
              >
                프로젝트 다운로드
              </button>
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;