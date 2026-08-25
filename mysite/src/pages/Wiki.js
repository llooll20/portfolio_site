import Layout from "../components/Layout";
const wikimenu = [
  { id: "wiki1", title: "위키 1" },
  { id: "wiki2", title: "위키 2" },
];
function Wiki() {
    return (
        <Layout sidebarItems={wikimenu}>
            <div className="wiki-page">
            <div className="wiki-title">Wiki</div>
            </div>
        </Layout>  
    );
}

export default Wiki;