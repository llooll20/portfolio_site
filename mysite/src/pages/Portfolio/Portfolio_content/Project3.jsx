import mission_img from "../../../assets/Portfolio_images/mission_project.png";

function Project3() {
    return (
        <div className="portfolio-page">
        {/* 포트폴리오 영역 */}
        <section className="portfolio-content">


          {/* 프로젝트 상세 */}
          <main className="project-detail">
            <h1>Mission project</h1>

            <p className="project-description">
              일/주간 퀘스트 창 형태의 미션 프로그램
            </p>

            <div className="project-info">
              <p>
                <strong>개발 기간</strong>
                <span>2026.03 ~ 2026.07</span>
              </p>

              <p>
                <strong>개발 역할</strong>
                <span>전체 개발 (UI/UX Design, Frontend Development, Backend Development)</span>
              </p>

              <p>
                <strong>기술 스택</strong>
                <span>WPF, C#, XAML</span>
              </p>

              <p>
                <strong>주요 기술</strong>
                <span>MVVM, Data Binding</span>
              </p>
            </div>

            <div className="project-intro">
              <div className="description">
                <p>
                  일/주간 퀘스트 추가, 삭제, 기록보기등의 기능을 지원하는 윈도우 미션 프로그램
                  <br/><br/>
                  프로젝트 개발자로서 UI/UX Design, Frontend Development, Backend Development 담당
                </p>
              </div>

              <div className="project-media">

              {/* 이미지 업로드 기능*/}
              <div className="project-image">
                <img
                  src={mission_img}
                  alt="Mission project 이미지"
                  className="profile-image"
                />
              </div>
              <div className="project-actions">
              <a
                href="https://github.com/llooll20/Daily-Weekly-Mission"
                target="_blank"
                rel="noreferrer"
                className="project-button"
              >
               프로젝트 Github
              </a>
              <a
                href="/downloads/DailyWeeklyMission.zip"
                download
                className="project-button"
              >
                프로젝트 다운로드
              </a>
            </div>
            </div>
            
            
            </div>
          </main>
        </section>
      </div>
    );
}

export default Project3;