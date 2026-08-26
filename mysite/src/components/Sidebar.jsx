//페이지용 사이드바
import "../style/Sidebar.css";

function Sidebar({items, onSelect}) {
  return (
    <aside className="sidebar">
      <h2>Sidebar</h2>
      <nav className="sidebar-menu">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
          >
            {item.title}
          </button>
        ))} 
      </nav>
    </aside>
  );
}

export default Sidebar;