import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const SocialLink = ({ to, icon }) => {
  return (
    <a href={to} target="_blank"  className="social-link">
      <FontAwesomeIcon icon={icon} size="lg" />
    </a>
  )
}

export default SocialLink
