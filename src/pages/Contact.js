import Anime from 'react-anime';
import EmailForm from "../components/EmailForm"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
      <EmailForm/>
  </Layout>
)

export default Contact
