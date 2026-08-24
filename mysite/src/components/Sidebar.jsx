//페이지용 사이드바

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Sidebar</h2>
      <nav className="sidebar-menu">
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/wiki">Wiki</Link>
        <Link to="/playground">Playground</Link>
      </nav>
    </aside>
  );
}