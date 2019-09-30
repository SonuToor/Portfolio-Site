import Anime from 'react-anime';
import ContactInput from "./ContactInput";
import ContactMessage from "./ContactMessage"
import React from "react"; 


const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        height: "85vh",
        justifyContent: "center",
        width: "50%",
        marginLeft:"25%"
    }
}
const EmailForm = () => {
    return (
        <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
            <form 
            className="email-form" 
            method="POST" 
            style={styles.form} 
            name="email-contact"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            >
                <ContactInput label="Enter your Email"/>
                <ContactInput label="Subject"/> 
                <ContactMessage variant='outlined'/>
            </form>
        </Anime>
    )
}

export default EmailForm