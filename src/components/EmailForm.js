import { Button } from "@material-ui/core"
import Anime from "react-anime"
import ContactInput from "./ContactInput"
import ContactMessage from "./ContactMessage"
import React from "react"
import { withStyles } from '@material-ui/core/styles';


const CustomButton = withStyles({
  root: {
    width: "50%",
    marginLeft: "25%",
    marginTop: "5%",
    color: "white",
    backgroundColor: "rgb(145, 36, 134)",
    '&:hover': {
      backgroundColor: "rgb(222, 124, 4)"
    }
  }
})(Button)

const EmailForm = () => {
  return (
    <div key={`contact-${Date.now()}`}>
      <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 1000}>
        <form
          className="email-form"
          method="POST"
          name="email-contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <h2 style={{ textAlign: "center", color: "rgb(145, 36, 134)" }}>
            Let's get in touch
            <span style={{ color: "rgb(222, 124, 4)" }}>!</span>
          </h2>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="email-contact" />
          <ContactInput label="Enter your Email" name="email" type="email" />
          <ContactInput label="Subject" name="subject" type="text" />
          <ContactMessage name="message" />
          <CustomButton type="submit">
          Send
          </CustomButton>
        </form>
      </Anime>
    </div>
  )
}

export default EmailForm
