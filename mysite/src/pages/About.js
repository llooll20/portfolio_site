import { Link } from "react-router-dom";
import "../style/about.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-title">About</div>

      <div className="about-container">
        {/* 헤더 */}
        <header className="about-header">
          <Link to="/" className="about-site-name">
            SKIFUL
          </Link>

          <nav className="about-menu">
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/wiki">Wiki</Link>
            <Link to="/playground">Playground</Link>
          </nav>
        </header>

        {/* About */}
        <section className="about-section">
          <h2>About</h2>

          <div className="about-content">
            <p>
              SKIFUL은 SKI 개발자의 개인 개발 공간입니다.
            </p>

            <p className="about-description">
              포트폴리오, 개발 지식, 개인적인 실험과 프로젝트를
              기록하고 공유하기 위한 사이트입니다.
            </p>

            <div className="about-cards">
              <Link to="/portfolio" className="about-card">
                <h3>Portfolio</h3>
                <div className="about-card-content">
                  포트폴리오와 프로젝트
                  <br />
                  개발 과정 및 결과물
                </div>
              </Link>

              <Link to="/wiki" className="about-card">
                <h3>Wiki</h3>
                <div className="about-card-content">
                  개발 공부 기록
                  <br />
                  기술 및 개념 정리
                </div>
              </Link>

              <Link to="/playground" className="about-card">
                <h3>Playground</h3>
                <div className="about-card-content">
                  개인 실험 및 테스트
                  <br />
                  웹 게임 및 콘텐츠
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 하단 */}
        <footer className="about-footer">
          <span>사이트 개설: 2026</span>
          <span>개발자: SKI</span>
          <span>이메일: example@email.com</span>
        </footer>
      </div>
    </div>
  );
}

export default About;