import Layout from "../components/layout"
import { graphql } from "gatsby"
import ProjectPage from "../components/ProjectPage"
import React from "react"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      url
      repo
      tools
      fullDescription
      mockup {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const title = project.title
  const url = project.url
  const description = project.fullDescription
  const repo = project.repo
  const imageData = project.mockup.childImageSharp.fluid
  const tools = project.tools

  return (
    <Layout>
      <ProjectPage
        title={title}
        url={url}
        repo={repo}
        description={description}
        imgData={imageData}
        tools={tools}
      />
    </Layout>
  )
}

export default ProjectTemplate
