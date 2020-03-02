import Button from "@material-ui/core/Button"
import Image from "gatsby-image"
import React from "react"
import { Link } from "gatsby"
import StyledButton from "../components/StyledButton"

const styles = {
  projectTitle: {
    textAlign: "center",
    marginTop: "4%",
    color: "rgb(145, 36, 134)",
  },
  links: {
    display: "flex",
    justifyContent: "space-around",
  },
  demoLink: {
    textDecoration: "none",
  },
}

// make the title and the mockup image a link to the project page
const ProjectPreview = ({ title, imgData, description, url, index, slug }) => (
  <div className="project-preview">
    <div className="project-image">
      <Link to={`/${slug}`}>
        <Image fluid={imgData} alt={title} key={index} />
      </Link>
    </div>
    <Link to={`/${slug}`} style={styles.demoLink}>
      <h3 style={styles.projectTitle}>
        {title}
        <span style={{ color: "rgb(222, 124, 4)" }}>_</span>
      </h3>
    </Link>
    <p>{description}</p>
    <div style={styles.links}>
      <a href={url} target="_blank" style={styles.demoLink}>
        <StyledButton text="Live Demo" />
      </a>
      <Link to={`/${slug}`} style={styles.demoLink}>
        <StyledButton text="More Info" />
      </Link>
    </div>
  </div>
)

export default ProjectPreview
