import "./style/home.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About";
import Wiki from "./pages/Wiki/Wiki";
import Playground from "./pages/Playground";

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
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;