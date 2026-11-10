import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import Card from "../components/ProjectCard";

import projectsData from "../data/projects";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaSass,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPostgresql } from "react-icons/si";

function Home() {
  const [shuffledData, setShuffledData] = useState([]);
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href =
      "https://res.cloudinary.com/qaz2dc/image/upload/v1693761903/Portfolio/hero_ejv8zd.webp"; // Your Cloudinary image URL
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    // Function to shuffle the data array randomly
    const shuffleData = () => {
      const shuffled = [...projectsData];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledData(shuffled);
    };
    shuffleData(); // Call the shuffleData function once on component mount
  }, []);

  return (
    <main id="main-content">
      <section id="hero">
        <div className="text">
          <h1>
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Hi! I'm Roni",
                1000,
                "Welcome!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              // deletionSpeed={90}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p>
            Welcome to Roni's corner of the web, where thoughtful frontend
            experiences meet reliable backend systems. Explore full-stack
            solutions built with accessible interfaces, maintainable APIs, and
            practical data-driven features.
          </p>
          <a href="#projects" className="button button-primary">
            Explore Projects
          </a>
        </div>
        <div className="img flex column justify-center align-center">
          <img
            src="https://res.cloudinary.com/qaz2dc/image/upload/v1693761903/Portfolio/hero_ejv8zd.webp"
            alt="Hero"
            loading="lazy"
          />
        </div>
      </section>
      <section id="about" className="grid g-af">
        <div className="text">
          <p>Code, music, repeat! That's how I roll. 🎵</p>
          <p>
            I'm all about creating functional web solutions that work like a
            charm. When I'm not coding, you'll find me enjoying some good music
            and keeping the development cycle going (cause that's all I do
            honestly😂).
          </p>
          <p>
            Let's build reliable, inclusive products where functionality meets
            fun! 🚀🎵
          </p>
          <p>
            <a
              href="/Princess Roni Egbu - Fullstack Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
              download
              // onClick={async (e) => {
              //   // const url = "/Princess_Roni_Egbu_CV.pdf";
              //   try {
              //     const res = await fetch(url, { mode: "cors" });
              //     if (!res.ok) return;
              //     const blob = await res.blob();
              //     const blobUrl = window.URL.createObjectURL(blob);
              //     const a = document.createElement("a");
              //     a.href = blobUrl;
              //     // a.download = "Roni_Egbu_CV.pdf";
              //     document.body.appendChild(a);
              //     a.click();
              //     a.remove();
              //     window.URL.revokeObjectURL(blobUrl);
              //     e.preventDefault();
              //   } catch (err) {
              //     console.error("Error downloading the file", err);
              //     // Fallback to default link behavior
              //     return;
              //   }
              // }}
            >
              Download my CV
            </a>
          </p>
        </div>
        <div className="skills">
          <h3>Full-stack toolkit</h3>
          <div className="flex align-center justify-center wrap">
            <div className="html">
              <FaHtml5 />
            </div>
            <div className="css">
              <FaCss3Alt />
            </div>
            <div className="js">
              <SiJavascript />
            </div>
            <div className="react">
              <FaReact />
            </div>
            <div className="sass">
              <FaSass />
            </div>
            <div className="git">
              <FaGitAlt />
            </div>
            <div aria-label="Node.js" title="Node.js">
              <FaNodeJs />
            </div>
            <div aria-label="Python" title="Python">
              <FaPython />
            </div>
            <div aria-label="TypeScript" title="TypeScript">
              <SiTypescript />
            </div>
            <div aria-label="PostgreSQL" title="PostgreSQL">
              <SiPostgresql />
            </div>
            <div aria-label="Databases" title="Databases">
              <FaDatabase />
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio section */}
      <section id="projects">
        <h2>My Projects</h2>
        <p>
          Explore a trio of my creative endeavors, highlighting beautiful
          designs, intricate code, and captivating visuals. Each project
          reflects my skills and dedication.
        </p>
        <div className="portfolio-container grid g-af">
          {shuffledData.slice(0, 3).map((project) => (
            <Card project={project} key={project.id} />
          ))}
        </div>
        <Link to="/projects" className="button button-primary">
          See All
        </Link>
      </section>
      <section id="cta">
        <h3>
          Interested in collaboration? Let's work together to create something
          magical and inspiring
        </h3>
        <div className="flex">
          <Link to="/contact" className="button button-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
