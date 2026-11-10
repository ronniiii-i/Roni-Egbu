import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdTune } from "react-icons/md";
import { BeatLoader } from "react-spinners";
import projectsData from "../data/projects";
import Card from "../components/ProjectCard";

function Projects() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const getAllTechnologies = (data) => {
    const counts = data.reduce((map, project) => {
      (project.technologies || []).forEach((tech) => {
        map.set(tech, (map.get(tech) || 0) + 1);
      });
      return map;
    }, new Map());

    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tech]) => tech);
  };
  const technologies = getAllTechnologies(projectsData);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      const filtered = selectedTag
        ? projectsData.filter((project) =>
            project.technologies.includes(selectedTag)
          )
        : projectsData;
      
      const sorted = [...filtered].sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );

      setFilteredProjects(sorted);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedTag]);

  function handleSelectTag(tag) {
    setSelectedTag(tag);
  }

  return (
    <main id="main-content" className="project-page">
      <h1>My Projects</h1>
      <section id="projects">
        <div className="sort flex align-center justify-between">
          <h3 className="flex align-center">
            Filter
            <MdTune />
          </h3>
          <label className="custom-select">
            <span className="sr-only">Filter projects by technology</span>
            <select
              value={selectedTag || ""}
              onChange={(event) => handleSelectTag(event.target.value || null)}
              aria-label="Filter projects by technology"
            >
              <option value="">All technologies</option>
              {technologies.map((tech) => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
            <FaChevronDown aria-hidden="true" />
          </label>
        </div>
        {loading ? (
          <BeatLoader
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="Loading projects"
            wrapperStyle={{}}
            className="loader"
            visible={true}
            loading
            speedMultiplier={0.3}
          />
        ) : (
          <div className="portfolio-container flex wrap" aria-live="polite">
            {filteredProjects.map((project) => (
              <Card
                project={project}
                handleSelectTag={handleSelectTag}
                key={project.id}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Projects;
