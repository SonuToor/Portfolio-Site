import Button from "@material-ui/core/Button"
import Image from "gatsby-image"
import React from "react"

const styles = {
  projectTitle: {
    textAlign: "center",
    marginTop: "2%",
    color: "rgb(145, 36, 134)",
  },
  links: {
    display: "flex",
  },
  demoLink: {
    textDecoration: "none",
  },
  button: {
    color: "rgb(145, 36, 134)",
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
    <div style={styles.links}>
      <a href={url} target="_blank" style={styles.demoLink}>
        <Button style={styles.button}>Live Demo</Button>
      </a>
      <a href={repo} target="_blank" style={styles.demoLink}>
        <Button style={styles.button}>View Code</Button>
      </a>
    </div>
  </div>
)

export default ProjectPage
