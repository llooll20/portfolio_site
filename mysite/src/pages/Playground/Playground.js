import { useState } from "react";

import Layout from "../../components/Layout";

import Playground1 from "./Playground_content/Playground1";
import Playground2 from "./Playground_content/Playground2";

const playgroundmenu = [
  { id: "Playground1", title: "플레이그라운드 1" },
  { id: "Playground2", title: "플레이그라운드 2" },
];

function Playground() {
    const [selectedPlayground, setSelectedPlayground] = useState("Playground1");
    return (
        <Layout 
        currentPage="Playground" 
        sidebarItems={playgroundmenu} 
        onSidebarSelect={setSelectedPlayground} 
        electedItem={selectedPlayground}>
            
            <div className="Playground-page">
            <div className="Playground-title">
                {selectedPlayground === "Playground1" && <Playground1 />}
                {selectedPlayground === "Playground2" && <Playground2 />}
                <a
                    href="https://carrotgame1-git-main-ski7.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="CarrotGame-button"
                >
                 Carrot Game 열기 
                 </a>
            </div>
            </div>
        </Layout>  
    );
}

export default Playground;