import Anime from 'react-anime';
import { graphql, useStaticQuery } from "gatsby";
import ProjectPreview from "../components/ProjectPreview";
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';


const styles = {
  main: {
    height: "100vh"
  },
  projects: {
    marginTop: "5%",
    display: "flex",
    marginBottom: "8%",
  },
  showMore: {
    marginLeft: "50%",
    marginTop: "25%" 
  },
  showMoreIcon: {
    backgroundColor: "rgb(222, 124, 4)",
    color: "rgb(145, 36, 134)",
  }
}
const IndexPage = () => {

  const projectData = useStaticQuery(graphql`
  {
    allProjectsJson {
      edges {
        node {
          description
          title
          url
          slug
          tools
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }`);
  
  const projects = projectData.allProjectsJson.edges;


  return (
    <Layout>
      <SEO title="Sonu Toor" />
      <div style={styles.main}>
        <div className="typewriter-text">
          <h1>Hello, my name is Sonu.</h1>
        </div>
        <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 2000} key={`mainsection-${Date.now()}`}>
          <div className="orange-colourstrip"/>
          <div className="purple-colourstrip"/>
          <section style={{marginTop:"5%"}}>
            <h2>I like building cool things on the Web.</h2>
            <p>I am a web developer who loves finding unique solutions to unique problems.</p>
            {/* <p>I build, fast, intuitive and responsive web apps.</p> */}
          </section>
        </Anime>
        <div style={styles.showMore}>
          <a href="#projects"><IconButton style={styles.showMoreIcon}><ExpandMoreIcon/></IconButton></a>
        </div>
      </div>
      <div className="projects" style={styles.projects} id="projects">
        {projects.map(({node: project}, index) =>{
          const title = project.title;
          const description = project.description;
          const imgData = project.image.childImageSharp.fluid;
          const url = project.url;
          const slug = project.slug;
          return (
            <ProjectPreview 
            title={title}
            key={index}
            description={description}
            imgData={imgData}
            url={url}
            slug={slug}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
