import { useState} from "react";

import Layout from "../../components/Layout";

import MVC from "./Wiki_content/MVC";
import MVP from "./Wiki_content/MVP";
import MVVM from "./Wiki_content/MVVM";


const wikimenu = [
  { id: "MVC", title: "MVC 패턴" },
  { id: "MVP", title: "MVP 패턴" },
  { id: "MVVM", title: "MVVM 패턴" },
];

function Wiki() {
    const [selectedWiki, setSelectedWiki] = useState("MVC");
    return (
        <Layout 
        currentPage="Wiki"
        sidebarItems={wikimenu}
        onSidebarSelect={setSelectedWiki}
        selectedItem={selectedWiki}>
            <div className="wiki-page">
            <div className="wiki-title">
                {selectedWiki === "MVC" && <MVC />}
                {selectedWiki === "MVP" && <MVP />}
                {selectedWiki === "MVVM" && <MVVM />}
            </div>
            </div>
        </Layout>  
    );
}

export default Wiki;