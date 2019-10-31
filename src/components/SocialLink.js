import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const styles = {
  link: {
    marginLeft: "1%",
    marginRight: "1%",
  },
}

const SocialLink = ({ to, icon }) => {
  return (
    <a href={to} target="_blank" style={styles.link}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  )
}

export default SocialLink
