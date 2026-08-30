import "../../../style/profile.css";
import profileImage from "../../../assets/Portfolio_images/profile_image.png";

function Profile() {
    return (
        <div className="profile-content">
            {/* 상단 정보 */}
            <section className="profile-header">
                <div className="profile-intro">
                    <h1>Profile</h1>
                    <p>이승기 | 소프트웨어개발자</p>
                </div>

                <img
                    src={profileImage}
                    alt="프로필 사진"
                    className="profile-image"
                />
            </section>


            {/* 학력 */}
            <section className="profile-section">
                <h2>▷ 학력사항</h2>

                <table className="profile-table">
                <thead>
                    <tr>
                    <th>기간</th>
                    <th>학교명</th>
                    <th>전공학과</th>
                    <th>졸업여부</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>2019.03 ~ 2025.08</td>
                    <td>전북대학교</td>
                    <td>소프트웨어공학과</td>
                    <td>○</td>
                    </tr>

                    <tr>
                    <td>2016.03 ~ 2019.02</td>
                    <td>나주고등학교</td>
                    <td>자연과학계열</td>
                    <td>○</td>
                    </tr>
                </tbody>
                </table>
            </section>


            {/* 자격 및 능력사항 */}
            <section className="profile-section">
                <h2>▷ 자격 및 능력사항</h2>

                <table className="profile-table">
                <thead>
                    <tr>
                    <th>자격증명</th>
                    <th>취득일</th>
                    <th>발행기관</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>한국사능력검정시험 1급</td>
                    <td>2025.06</td>
                    <td>국사편찬위원회</td>
                    </tr>

                    <tr>
                    <td>TOEIC (795)</td>
                    <td>2025.01</td>
                    <td>한국토익위원회</td>
                    </tr>

                    <tr>
                    <td>운전면허 1종 보통</td>
                    <td>2019.02</td>
                    <td>도로교통공단</td>
                    </tr>
                </tbody>
                </table>
            </section>


            {/* 수상경력 */}
            <section className="profile-section">
                <h2>▷ 수상경력</h2>

                <table className="profile-table">
                <thead>
                    <tr>
                    <th>기간</th>
                    <th>수상내용</th>
                    <th>기관명</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>2026.02 ~ 2026.06</td>
                    <td>우수논문상 (동상)</td>
                    <td>한국정보기술학회</td>
                    </tr>
                </tbody>
                </table>
            </section>
            {/* 기술 및 역량 */}
                <section className="profile-skills">

            {/* 기술 */}
            <div className="skill-column">
                <h2>기술</h2>

                <div className="skill-list">
                <div className="skill-circle">DB</div>
                <div className="skill-circle">API</div>
                <div className="skill-circle">UML</div>
                </div>

                <p className="skill-description">
                DB 구축, API, UML 제작 등을
                <br />
                팀프로젝트 환경에서 작업한 경험이 있습니다.
                </p>
            </div>


            {/* 역량 */}
            <div className="skill-column">
                <h2>역량</h2>

                <div className="skill-list">
                <div className="skill-circle">책임감</div>
                <div className="skill-circle">협동성</div>
                <div className="skill-circle">발상력</div>
                </div>

                <p className="skill-description">
                목표에 도달하기 위한 책임감과 협동성, 아이디어 발상력이
                <br />
                저의 장점입니다.
                </p>
            </div>

            </section>
        </div>
    );
}

export default Profile;