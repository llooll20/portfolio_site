import React, { useState } from "react";

import Layout from "../../components/Layout";
import "../../style/portfolio.css";

import Profile from "./Portfolio_content/Profile";
import Project1 from "./Portfolio_content/Project1";
import Project2 from "./Portfolio_content/Project2";
import Project3 from "./Portfolio_content/Project3";
import Project4 from "./Portfolio_content/Project4";

const portfoliomenu = [
  { id: "profile", title: "Profile" },
  { id: "project1", title: "주식 차트 웹사이트" },
  { id: "project2", title: "Say Something" },
  { id: "project3", title: "Mission project" },
  { id: "project4", title: "Skifull Website" },
];

function Portfolio() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("profile");
  return (
    <Layout
      currentPage="Portfolio"
      sidebarItems={portfoliomenu}
      onSidebarSelect={setSelectedPortfolio}
      selectedItem={selectedPortfolio}>
            <div className="portfolio-page">
            <div className="portfolio-title">
                {selectedPortfolio === "profile" && <Profile />}
                {selectedPortfolio === "project1" && <Project1 />}
                {selectedPortfolio === "project2" && <Project2 />}
                {selectedPortfolio === "project3" && <Project3 />}
                {selectedPortfolio === "project4" && <Project4 />}
            </div>
            </div>
    </Layout>
  );
}

export default Portfolio;