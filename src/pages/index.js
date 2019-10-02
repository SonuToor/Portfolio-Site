import Anime from 'react-anime';
import { graphql, useStaticQuery } from "gatsby";
import ProjectPreview from "../components/ProjectPreview";
import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';


const styles = {
  main: {
    height: "100vh"
  },
  showMoreIcon: {
    backgroundColor: "rgb(222, 124, 4)",
    color: "rgb(145, 36, 134)",
  },
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
          mockup {
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

  const [showButton, setShowButton] = useState(true);

  return (
    <Layout>
      <SEO title="Sonu Toor" />
      <div style={styles.main} id="main">
        <div className="typewriter-text">
          <h1>Hello, my name is Sonu.</h1>
        </div>
        <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i *  1500} key={`mainsection-${Date.now()}`}>
          <div className="orange-colourstrip"/>
          <div className="purple-colourstrip"/>
          <section style={{marginTop:"5%"}}>
            <h2>I like building cool things on the Web.</h2>
            <p>I am a web developer who loves finding unique solutions to unique problems.</p>
            {/* <p>I build, fast, intuitive and responsive web apps.</p> */}
          </section>
        </Anime> 
        {showButton === true ?
          <div className="expand-button">
            <a href="#projects"><IconButton style={styles.showMoreIcon} onClick={() => setShowButton(!showButton)}><ExpandMoreIcon/></IconButton></a>
          </div>
          :
          null
        }
      </div>
      {showButton === false ? 
        <div className="expand-less-button">
          <a href="#"><IconButton style={styles.showMoreIcon} onClick={() => setShowButton(!showButton)}><ExpandLessIcon/></IconButton></a>
        </div>
        :
        null}
      <div className="projects" id="projects">
        {projects.map(({node: project}, index) =>{
          const title = project.title;
          const description = project.description;
          const imgData = project.mockup.childImageSharp.fluid;
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
