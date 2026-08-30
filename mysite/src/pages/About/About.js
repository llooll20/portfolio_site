import {useState} from "react";

import "../../style/about.css";
import Layout from "../../components/Layout";
import SiteInfo from "./About_content/Site_info";

const aboutmenu = [
  { id: "about1", title: "사이트 소개" },
];

function About() {
  const [selectedAbout, setSelectedAbout] = useState("about1");
  return (
    <Layout sidebarItems={aboutmenu}
            onSidebarSelect={setSelectedAbout}
            >
              <div className="about-page">
            <div className="about-content">
                {selectedAbout === "about1" && <SiteInfo />}
            </div>
            </div>
  </Layout>
  );
}

export default About;