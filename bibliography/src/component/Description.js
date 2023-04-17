import React from "react";
import "../assets/css/Description.css";
class Description extends React.Component {
  render() {
    return (
      <>
        <h3>Fullstack Developer</h3>
        <h1 className="description-heading">PROFESSIONAL PROFILE</h1>
        <p>
          Hi there! My name is Anjit, and I am a full stack developer with one
          years of experience. I specialize in building high-quality web
          applications using modern technologies and frameworks. My journey as a
          developer started as junior software developer. I have always been
          passionate about technology and building things from scratch.<br/><br/> Over
          time, I discovered my love for web development and decided to pursue
          it as my career. Since then, I have worked on various projects,
          ranging from small websites to large-scale web applications. I am
          proficient in HTML, CSS, JavaScript, React, Node.js, C++,Java,C#,PHP,
          MySQL, etc. I enjoy taking on new challenges and learning new
          technologies to stay up-to-date with the latest trends in the
          industry. I have also collaborated with a team of developers to build
          complex web applications that meet the needs of our clients.<br/><br/> When I'm
          not coding, I enjoy play football, watching movies, drawing and
          hiking. I also enjoy contributing to open-source projects and
          attending meetups to network with other developers. Thank you for
          taking the time to read my "About Me" section. If you're interested in
          learning more about my work or would like to collaborate on a project,
          feel free to me.
        </p>
        <button className="download-cv-btn">Download CV</button>
      </>
    );
  }
}
export default Description;
