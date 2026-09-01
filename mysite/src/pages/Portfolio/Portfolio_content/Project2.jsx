import saysomething_img from "../../../assets/Portfolio_images/saysomething.png";

function Project2() {
    return (
        <div className="portfolio-page">
        {/* 포트폴리오 영역 */}
        <section className="portfolio-content">


          {/* 프로젝트 상세 */}
          <main className="project-detail">
            <h1>Say Something</h1>

            <p className="project-description">
              MCP를 활용한 AI 음성비서시스템
            </p>

            <div className="project-info">
              <p>
                <strong>개발 기간</strong>
                <span>2025.03 ~ 2026.06</span>
              </p>

              <p>
                <strong>개발 역할</strong>
                <span>백엔드 개발(Autogen환경에 AI연결, AI와 MCPtool 연결, client에 데이터 전송)</span>
              </p>

              <p>
                <strong>기술 스택</strong>
                <span>React, Python, Autogen, MCP</span>
              </p>

              <p>
                <strong>주요 기술</strong>
                <span>REST API, SQL, AI Agent</span>
              </p>
            </div>

            <div className="project-intro">
              <div className="description">
                <p>
                  사용자 음성을 활용한 MCP 기반 AI 음성비서 시스템
                  <br/><br/>
                  백엔드 개발자로 Autogen 환경에 AI를 연결하고, AI와 MCP 툴을 연결하여
                  <br/>
                   client에 데이터를 전송을 구현
                </p>
              </div>

              <div className="project-media">
              {/* 이미지 업로드 기능*/}
              <div className="project-image">
                <img
                  src={saysomething_img}
                  alt="Say Something 이미지"
                  className="profile-image"
                />
              </div>
                          <div className="project-actions">
              <a
                href="https://github.com/chs991209/SaySth-2025"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
               프로젝트 Github
              </a>
            </div>
            </div>

            </div>
          </main>
        </section>
      </div>
    );
}

export default Project2;