import React, { Component } from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard.js";
import PublicationCard from "../../components/publicationsCard/PublicationCard.js";
import Button from "../../components/button/Button.js";
import TopButton from "../../components/topButton/TopButton.js";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
  publications,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg.js";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {/* Header */}
        <Header theme={this.props.theme} />

        {/* Publications */}
        {publications.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader.description}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard key={pub.id} pub={pub} theme={theme} />;
          })}
        </div>

        {/* Footer */}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
