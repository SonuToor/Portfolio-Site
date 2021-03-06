import { Link } from "gatsby"
import React from "react"

const linkStyles = {
  textDecoration: "none",
  margin: "1%",
  color: "rgb(145, 36, 134)",
  fontWeight: 'bold',
}

const activeStyles = {
  color: "rgb(222, 124, 4)",
}

const HeaderLink = ({ to, children }) => {
  return (
    <Link to={to} style={linkStyles} activeStyle={activeStyles}>
      {children}
    </Link>
  )
}

export default HeaderLink
