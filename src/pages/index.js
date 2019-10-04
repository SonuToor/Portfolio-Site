import Anime from 'react-anime';
import { graphql, useStaticQuery } from "gatsby";
import ProjectPreview from "../components/ProjectPreview";
import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // when component mounts add a scroll listener to the window and call handleScroll
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })


  const [scrollDown, setScrollDown] = useState(true);


  // if the scroll position is to the top of the #projects div then make scrollDown false 
  const handleScroll = () => {
    var mainPos = document.getElementById("main").getBoundingClientRect();
    var mainY = mainPos.top + window.pageYOffset;

    let position = window.scrollY;
    if (position > mainY) {
        setScrollDown(false)
    }
    else if (position < mainY) {
        setScrollDown(true)
    }
  } 


  return (
    <Layout>
      <SEO title="Sonu Toor" />
      <div style={styles.main} id="main">
        <div className="typewriter-text">
          <h1>Hello, my name is Sonu.</h1>
        </div>
        <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i *  500} key={`mainsection-${Date.now()}`}>
          <div className="orange-colourstrip"/>
          <div className="purple-colourstrip"/>
          <section style={{marginTop:"5%"}}>
            <h2>I like building cool things on the Web.</h2>
            <p>I am a web developer who loves finding unique solutions to unique problems.</p>
            {/* <p>I build, fast, intuitive and responsive web apps.</p> */}
          </section>
        </Anime> 
        {scrollDown === true ?
          <div className="expand-button">
            <a href="#projects"><IconButton style={styles.showMoreIcon} onClick={() => setScrollDown(!scrollDown)}><ExpandMoreIcon/></IconButton></a>
          </div>
          :
          null
        }
      </div>
      {scrollDown === false ? 
        <div className="expand-less-button">
          <a href="#"><IconButton style={styles.showMoreIcon} onClick={() => setScrollDown(!scrollDown)}><ExpandLessIcon/></IconButton></a>
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
