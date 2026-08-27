//페이지용 레이아웃

import Sidebar from "./Sidebar";
import "../style/Layout.css";
import { Link } from "react-router-dom";

function Layout({ children, sidebarItems, onSidebarSelect }) {
  return (
    <div className="layout">
      <header className="site-header">
        <Link to="/" className="site-name">
          SKIFUL
        </Link>
        <nav className="site-menu">
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/wiki">Wiki</Link>
          <Link to="/playground">Playground</Link>
        </nav>
      </header>
      
      <div className="page-body">
        <Sidebar items={sidebarItems} onSelect={onSidebarSelect} />  
        <main className="content">{children}</main>
      </div>
      
      {/* 하단 */}
        <footer className="about-footer">
          <span>since 2026-08-23</span>
          <span>Github https://github.com/llooll20</span>
          <span>email skifull@outlook.kr</span>
        </footer>
    </div>
  );
}

export default Layout;