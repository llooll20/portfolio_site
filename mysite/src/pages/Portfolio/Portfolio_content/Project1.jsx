import stok_bot_Image from "../../../assets/Portfolio_images/stock_chart.png";

function Project1() {
    return (
        <div className="portfolio-page">
        {/* 포트폴리오 영역 */}
        <section className="portfolio-content">


          {/* 프로젝트 상세 */}
          <main className="project-detail">
            <h1>주식 차트 웹사이트</h1>

            <p className="project-description">
              주식 차트를 제공하고 사용자가 저장한 구간 정보를 저장하는 웹사이트
            </p>

            <div className="project-info">
              <p>
                <strong>개발 기간</strong>
                <span>2024.09 ~ 2026.12</span>
              </p>

              <p>
                <strong>개발 역할</strong>
                <span>백엔드 개발(데이터 수집 및 전달, 사용자 개인정보 저장 구현, 그래프 유사 구간 검색)</span>
              </p>

              <p>
                <strong>기술 스택</strong>
                <span>Pico, Python, Express, SQLite</span>
              </p>

              <p>
                <strong>주요 기술</strong>
                <span>REST API, SQL, Git</span>
              </p>
            </div>

            <div className="project-intro">
              <div className="description">
                <p>
                  사용자가 주식 차트를 확인하고, 
                  특정 구간을 포트폴리오로 저장할 수 있는 웹사이트
                  <br/><br/>
                  백엔드 개발자로
                  <br/>데이터 수집 및 전달, 사용자 개인정보 저장 구현, 그래프 유사 구간 검색 기능 구현
                </p>
              </div>

              {/* 이미지 업로드 기능*/}
              <div className="project-image">
                <img
                  src={stok_bot_Image}
                  alt="주식 차트 웹사이트 이미지"
                  className="profile-image"
                />
              </div>
            </div>
            

            <div className="project-actions">
              <a
                href="https://github.com/llooll20/stock_bot"
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

export default Project1;