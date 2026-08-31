//페이지용 사이드바
import "../style/sidebar.css";

function Sidebar({currentPage,items, onSelect, selectedItem}) {
  return (
    <aside className="sidebar">
      <h2>{currentPage}</h2>
      <nav className="sidebar-menu">
        {items.map((item) => (
          <button
            key={item.id}
            className={selectedItem === item.id ? "active" : ""}
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