import React from "react";

const ProjectCard = ({ project, handleSelectTag }) => {
  const hasImage = !!project.image;

  return (
    <article className="project-card">
      <div className="img flex justify-center align-center relative">
        {hasImage ? (
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="object-cover"
          />
        ) : (
          <div className="gradient-box">
            <span className="title">{project.title}</span>
            <span className="subtitle">
              {project.type || "Backend Project"}
            </span>
            <div className="tech-list">
              {project.technologies?.slice(0, 3).map((tech) => (
                <span key={tech} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.demoUrl || project.sourceUrl ? (
          <div className="button-group flex justify-evenly align-center absolute bottom-2 w-full">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                View Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.title}`}
              >
                View Source
              </a>
            )}
            </div>
        ) : null}
      </div>

      <div className="project-details">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        {project.technologies?.length > 0 && (
          <div className="technologies flex align-center flex-wrap gap-2">
            {project.technologies.map((technology) => (
              handleSelectTag ? (
                <button
                  type="button"
                  key={technology}
                  onClick={() => handleSelectTag(technology)}
                >
                  {technology}
                </button>
              ) : (
                <span key={technology}>{technology}</span>
              )
            ))}
          </div>
        )}

        {(project.demoUrl || project.sourceUrl) && (
          <div className="button-group flex align-center mt-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                View Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.title}`}
              >
                View Source
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
