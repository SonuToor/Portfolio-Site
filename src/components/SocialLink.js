import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const styles = {
  link: {
    marginLeft: "1%",
    marginRight: "1%",
    color: 'rgb(85, 26, 139)'
  },
}

const SocialLink = ({ to, icon }) => {
  return (
    <a href={to} target="_blank" style={styles.link}>
      <FontAwesomeIcon icon={icon} size="lg" />
    </a>
  )
}

export default SocialLink
