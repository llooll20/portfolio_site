import web_img from "../../../assets/Portfolio_images/web_project.png";

function Project4() {
    return (
        <div className="portfolio-page">
        {/* 포트폴리오 영역 */}
        <section className="portfolio-content">


          {/* 프로젝트 상세 */}
          <main className="project-detail">
            <h1>Skifull Website</h1>

            <p className="project-description">
              개인용 웹사이트
            </p>

            <div className="project-info">
              <p>
                <strong>개발 기간</strong>
                <span>2024.08 ~</span>
              </p>

              <p>
                <strong>개발 역할</strong>
                <span>전체 개발 (UI/UX Design, Frontend Development, Backend Development)</span>
              </p>

              <p>
                <strong>기술 스택</strong>
                <span>React, JavaScript, Vercel</span>
              </p>

              <p>
                <strong>주요 기술</strong>
                <span>컴포넌트기반 UI, React Router, Vercel 배포</span>
              </p>
            </div>

            <div className="project-intro">
              <div className="description">
                <p>
                  Skifull Website는 개인용 웹사이트로 자신의 포트폴리오와 프로젝트를 소개하는 사이트입니다.
                  <br/><br/>
                  프로젝트 개발자로서 UI/UX Design, Frontend Development, Backend Development를 담당했습니다.
                </p>
              </div>

              {/* 이미지 업로드 기능*/}
              <div className="project-image">
                <img
                  src={web_img}
                  alt="Skifull Website 이미지"
                  className="profile-image"
                />
              </div>
            </div>
            
            <div className="project-actions">
              <a
                href="https://github.com/llooll20/Portfolio_site"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
               프로젝트 Github
              </a>
            </div>
          </main>
        </section>
      </div>
    );
}

export default Project4;