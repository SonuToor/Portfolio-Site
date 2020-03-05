import Image from "gatsby-image"
import React from "react"
import StyledButton from "../components/StyledButton"

const styles = {
  projectTitle: {
    textAlign: "center",
    marginTop: "2%",
    color: "rgb(145, 36, 134)",
  },
  demoLink: {
    textDecoration: "none",
  },
}

const ProjectPage = ({ title, imgData, url, repo, tools, description }) => (
  <div className="project-page">
    <h1 style={styles.projectTitle}>
      {title}
      <span style={{ color: "rgb(222, 124, 4)" }}>_</span>
    </h1>
    <Image fluid={imgData} alt={title} />
    <p style={{ marginTop: "2%", color: "rgb(145, 36, 134)" }}>
      Summary<span style={{ color: "rgb(222, 124, 4)" }}>_</span>
    </p>
    <p>{description}</p>
    <p style={{ color: "rgb(145, 36, 134)" }}>
      Tools<span style={{ color: "rgb(222, 124, 4)" }}>_</span>
    </p>
    <p>{tools}</p>
    <div className="project-page-links">
      <a href={url} target="_blank" style={styles.demoLink}>
        <StyledButton text="Live Demo"/>
      </a>
      <a href={repo} target="_blank" style={styles.demoLink}>
        <StyledButton text="View Code"/>
      </a>
    </div>
  </div>
)

export default ProjectPage
