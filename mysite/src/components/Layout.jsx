//페이지용 레이아웃

import Sidebar from "./Sidebar";
import "../style/layout.css";
import { Link } from "react-router-dom";

function Layout({ children, currentPage, sidebarItems, onSidebarSelect, selectedItem }) {
  return (
    <div className="layout">
      <div className="site-container">
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
        <Sidebar 
        currentPage={currentPage} 
        items={sidebarItems} 
        onSelect={onSidebarSelect} 
        selectedItem={selectedItem} />  
        <main className="content">{children}</main>
      </div>
      
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