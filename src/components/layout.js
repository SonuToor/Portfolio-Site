import Container from "@material-ui/core/Container"
import React from "react"
import PropTypes from "prop-types"
import {
  faLinkedin,
  faGithub,
  faMedium,
} from "@fortawesome/free-brands-svg-icons"
import SocialLink from "./SocialLink"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <Header siteTitle={data.site.siteMetadata.title}/>
        <div id="main"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            zIndex: "2",
            position: "relative"
          }}
        >
          <main style={{ flex: "1" }}>{children}</main>
          <footer style={{ flexShrink: "0", marginBottom: "1%"}}>
            <div className="orange-colourstrip" />
            <div className="purple-colourstrip" />
            <div
              className="socials"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <SocialLink to="https://github.com/SonuToor" icon={faGithub} />
              <SocialLink
                to="https://www.linkedin.com/in/sonutoor/"
                icon={faLinkedin}
              />
              <SocialLink
                to="https://medium.com/@savrooptoor92"
                icon={faMedium}
              />
            </div>
          </footer>
        </div>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
