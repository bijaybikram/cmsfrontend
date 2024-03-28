import React from 'react'
// import "../Home/Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
      <div className="App">
        <Navbar home = "Home" about = "About Me" contact = "Contact"/>
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and learn more about me!</p>
      </header>
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>I am a passionate web developer with experience in React, JavaScript, HTML, and CSS.</p>
        <Button name = "Know Morey"/>
      </section>
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </div>
        {/* Add more project components as needed */}
      </section>
      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Email: example@example.com</p>
        <p>Phone: 123-456-7890</p>
      </section>
    </div>
  )
}

export default Home