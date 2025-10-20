import React from "react";

const ProjectCard = ({ project, handleSelectTag }) => {
  const hasImage = !!project.image;

  return (
    <div className="project-card" key={project.id}>
      <div className="img flex justify-center align-center relative">
        {hasImage ? (
          <img
            src={project.image}
            alt={project.title}
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
              >
                View Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
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
              <a
                href="javascript:void(0);"
                key={technology}
                onClick={() => handleSelectTag(technology)}
              >
                {technology}
              </a>
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
              >
                View Demo
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
