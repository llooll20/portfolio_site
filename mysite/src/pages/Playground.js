import Layout from "../components/Layout";
const playgroundmenu = [
  { id: "playground1", title: "플레이그라운드 1" },
  { id: "playground2", title: "플레이그라운드 2" },
];
function Playground() {
    return (
        <Layout sidebarItems={playgroundmenu}>
            <div className="Playground-page">
            <div className="Playground-title">Playground</div>
            </div>
        </Layout>  
    );
}

export default Playground;