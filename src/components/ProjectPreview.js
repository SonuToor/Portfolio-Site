import Button from "@material-ui/core/Button"

import Image from "gatsby-image";
import React from 'react';
import { Link } from "gatsby";

const styles = {
    project: {
        width: "50%",
    },
    projectTitle: {
        textAlign: "center",
        marginTop: "2%",
        color: "rgb(145, 36, 134)"
    },
    links: {
        display: "flex",
        
    },
    demoLink: {
        textDecoration: "none"
    },
    button: {
        color: "rgb(145, 36, 134)"
    }
}

const ProjectPreview = ({title, imgData, description, url, index, slug}) => (
        
        <div className="project-preview" style={styles.project}>
            <Image fluid={imgData} alt={title} key={index}/>
            <h3 style={styles.projectTitle}>{title}<span style={{color:"rgb(222, 124, 4)"}}>_</span></h3>
            <p>{description}</p>
            <div style={styles.links}>
                <a href={url} target="_blank" style={styles.demoLink}><Button style={styles.button}>Live Demo</Button></a>
                <Link to={`/${slug}`}style={styles.demoLink}><Button style={styles.button}>More Info</Button></Link>
            </div>
        </div>
)



export default ProjectPreview