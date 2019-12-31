import { graphql, useStaticQuery } from "gatsby"
import ProjectPreview from "../components/ProjectPreview"
import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import IconButton from "@material-ui/core/IconButton"
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';


const styles = {
  main: {
    height: "100vh",
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
    }
  `)

  const projects = projectData.allProjectsJson.edges

  useEffect(() => {
    // when component mounts add a scroll listener to the window and call handleScroll
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const [scrollDown, setScrollDown] = useState(true)

  // if the scroll position is to the top of the #projects div then make scrollDown false
  const handleScroll = () => {
    var mainPos = document.getElementById("main").getBoundingClientRect()
    var mainY = mainPos.top + window.pageYOffset

    let position = window.scrollY
    if (position > mainY) {
      setScrollDown(false)
    } else if (position < mainY) {
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
        <Fade top duration={2000}>
          <div className="orange-colourstrip" />
          <div className="purple-colourstrip" />
        </Fade>
          <Fade top delay={1000}>
          <section style={{ marginTop: "5%" }}>
            <h3>I like building cool things on the Web.</h3>
            <p>
              I am a web developer, problem solver and serial learner.
            </p>
            {/* <p>I build, fast, intuitive and responsive web apps.</p> */}
          </section>
          </Fade>

        {scrollDown === true ? (
          <Flip left duration={2000} delay={500}>
            <div className="expand-button">
              <a href="#projects">
                <IconButton
                  style={styles.showMoreIcon}
                  onClick={() => setScrollDown(!scrollDown)}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </a>
            </div>
          </Flip>
        ) : null}
      </div>
      {scrollDown === false ? (
        <Flip right duration={2000} delay={700}>
          <div className="expand-less-button">
            <a href="#">
              <IconButton
                style={styles.showMoreIcon}
                onClick={() => setScrollDown(!scrollDown)}
              >
                <ExpandLessIcon />
              </IconButton>
            </a>
          </div>
        </Flip>
      ) : null}
      <div className="projects" id="projects">
        {projects.map(({ node: project }, index) => {
          const title = project.title
          const description = project.description
          const imgData = project.mockup.childImageSharp.fluid
          const url = project.url
          const slug = project.slug
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
