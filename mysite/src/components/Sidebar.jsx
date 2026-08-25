//페이지용 사이드바
import "../style/Sidebar.css";

function Sidebar({items}) {
  return (
    <aside className="sidebar">
      <h2>Sidebar</h2>
      <nav className="sidebar-menu">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.title}
          </a>
        ))} 
      </nav>
    </aside>
  );
}

export default Sidebar;