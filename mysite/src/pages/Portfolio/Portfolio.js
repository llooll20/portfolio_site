import React, { useState } from "react";

import Layout from "../../components/Layout";
import "../../style/portfolio.css";

import Profile from "./Portfolio_content/Profile";
import Project1 from "./Portfolio_content/Project1";
import Project2 from "./Portfolio_content/Project2";
import Project3 from "./Portfolio_content/Project3";
import Project4 from "./Portfolio_content/Project4";

const portfoliomenu = [
  { id: "profile", title: "이력서 / 소개" },
  { id: "project1", title: "포트폴리오 1" },
  { id: "project2", title: "포트폴리오 2" },
  { id: "project3", title: "포트폴리오 3" },
  { id: "project4", title: "포트폴리오 4" },
];

function Portfolio() {
  const [selectedPortfolio, setSelectedPortfolio] = useState("profile");
  return (
    <Layout
      sidebarItems={portfoliomenu}
      onSidebarSelect={setSelectedPortfolio}>
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