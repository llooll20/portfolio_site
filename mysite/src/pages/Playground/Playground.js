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
        <Layout sidebarItems={playgroundmenu}
        onSidebarSelect={setSelectedPlayground}>
            <div className="Playground-page">
            <div className="Playground-title">Playground
                {selectedPlayground === "Playground1" && <Playground1 />}
                {selectedPlayground === "Playground2" && <Playground2 />}
            </div>
            </div>
        </Layout>  
    );
}

export default Playground;