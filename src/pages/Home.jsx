import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import Card from "../components/ProjectCard";

import projectsData from "../data/projects";
import {
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiDocker,
  SiNextdotjs,
  SiGit,
} from "react-icons/si";

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
              className="button resume-button"
              aria-label="View Roni Egbu's resume (opens in a new tab)"
            >
              View my resume
            </a>
          </p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <div className="skill-groups">
            <div>
              <h4>Frontend</h4>
              <ul>
                <li><FaReact aria-hidden="true" /> React</li>
                <li><SiNextdotjs aria-hidden="true" /> Next.js</li>
                <li><SiTypescript aria-hidden="true" /> TypeScript</li>
                <li><SiJavascript aria-hidden="true" /> JavaScript</li>
                <li><SiTailwindcss aria-hidden="true" /> Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4>Backend</h4>
              <ul>
                <li><SiNestjs aria-hidden="true" /> NestJS</li>
                <li><FaNodeJs aria-hidden="true" /> Node.js</li>
                <li><SiPrisma aria-hidden="true" /> Prisma</li>
                <li><SiPostgresql aria-hidden="true" /> PostgreSQL</li>
              </ul>
            </div>
            <div>
              <h4>Other</h4>
              <ul>
                <li><FaPython aria-hidden="true" /> Python</li>
                <li><SiDocker aria-hidden="true" /> Docker</li>
                <li><SiGit aria-hidden="true" /> Git</li>
              </ul>
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
