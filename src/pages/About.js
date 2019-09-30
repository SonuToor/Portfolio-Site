import Anime from 'react-anime';
import Chip from '@material-ui/core/Chip';
import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"

const styles = {
  aboutSection: {
    display: "flex",
    marginTop: "15%"
  },
  photo: {
    width: "35%"
  },
  text: {
    display: "flex", 
    flexDirection: "column",
    width: "65%"
  },
  skills: {
    display: "flex", 
    marginTop: "5%",
    flexWrap: "wrap",
    marginBottom: "2%"
  },
  skillList: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  skillChip: {
    color: "rgb(222, 124, 4)",
    borderColor: "rgb(145, 36, 134)",
    marginLeft: "1%"
  }
}
const About = () => (
  <Layout>
    <SEO title="About" />
      <div style={styles.aboutSection} key={`about-${Date.now()}`}>
        <span style={styles.photo}>Photo will go here</span>
        <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
          <div style={styles.text}>
            <h1>A little more about me. </h1>
            <section>
              <p>My name is Sonu Toor. I am a self taught web developer based in Toronto.</p>
              <p>I like dreaming up big things. I usually dream up something I'm not nearly prepared to create. But nearly everytime I manage to pull it off, while learning a tonne along the way. This is what motivates me as a web developer; the opportunity to create cool things and to learn new ways of creating them. This leads me to take pride and ownership of my work.</p>
              <p>I am a genuinely curious person, I consider myself a lifelong learner which is reflected in my hobbies and interests. So when I'm not hacking away, I enjoy travelling where I love learning about people and from people. I have been lucky enough to live in two amazing cities (Toronto and Madrid). I love learning languages, currently I am fluent in English, Punjabi and Spanish. I love watching and playing sports (hockey, soccer and football). I am an avid reader so there is never a time I don't have a book in my bag and while I'm coding (or doing anything really) I am listening to music, so I have more playlists on Spotify than any human really needs.</p>
              <p>Thank you for taking the time out to read about me, if you're interested <Link to="/Contact"><span>reach out to me and let's build something</span><span style={{color: "rgb(222, 124, 4)" }}>!</span></Link></p>
            </section>
          </div>
        </Anime>
      </div>
      <div className="skills" style={styles.skills}>
        <div style={{width: "20%"}}>
          <h3 style={{color: "rgb(145, 36, 134)"}}>Tools<span style={{color: "rgb(222, 124, 4)"}}>_</span></h3>
        </div>
        <div style={styles.skillList}>
          <Chip className="skill-chip" variant="outlined" label="JavaScript" style={styles.skillChip}/>
          <Chip className="skill-chip" variant="outlined" label="React.js" style={styles.skillChip}/>
          <Chip className="skill-chip" variant="outlined" label="HTML" style={styles.skillChip}/>
          <Chip className="skill-chip" variant="outlined" label="CSS" style={styles.skillChip}/>
          <Chip className="skill-chip" variant="outlined" label="Version Control - Git" style={styles.skillChip}/>
          <Chip className="skill-chip" variant="outlined" label="Command Line" style={styles.skillChip}/>
          <Chip className="skill-chip" variant="outlined" label="Chrome DevTools" style={styles.skillChip}/>
          <Chip className="skill-chip" variant="outlined" label="Node.js" style={styles.skillChip}/>
          <Chip className="skill-chip" variant="outlined" label="GraphQL" style={styles.skillChip}/>
        </div>
      </div>
  </Layout>
)

export default About
