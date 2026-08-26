function MVC() {
    return (
        <div className="wiki-content">
            <h2>MVC 패턴</h2>
            <p>
                MVC(Model-View-Controller) 패턴은 소프트웨어 디자인 패턴 중 하나로, 애플리케이션을 세 가지 주요 구성 요소로 분리하여 개발하는 아키텍처입니다. 
                이 패턴은 사용자 인터페이스와 비즈니스 로직을 분리하여 유지보수성과 확장성을 높이는 데 도움을 줍니다.
            </p>
            <h3>구성 요소</h3>
            <ul>
                <li><strong>Model:</strong> 애플리케이션의 데이터와 비즈니스 로직을 담당합니다. 데이터베이스와 상호작용하며, 데이터의 상태를 관리합니다.</li>
                <li><strong>View:</strong> 사용자에게 보여지는 화면을 담당합니다. Model의 데이터를 기반으로 UI를 렌더링합니다.</li>
                <li><strong>Controller:</strong> Model과 View를 연결하는 중개자입니다. 사용자의 입력을 처리하고, 적절한 Model 메서드를 호출하며, View를 업데이트합니다.</li>
            </ul>
        </div>
    );
}

export default MVC;