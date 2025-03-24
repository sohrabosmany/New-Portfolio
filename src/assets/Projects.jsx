import React from 'react';
import './Projects.css';

function Projects() {
    // Project data
    const projects = [
        {
            id: 1,
            title: "MatchHub-Soccer",
            image: "./image/soccer1.png",
            description: "An API to fetch and display the live La Liga standings each season using Java, SpringBoot, Gradle, JavaScript, React, and MySQL.",
            githubLink: "https://github.com/sohrabosmany/MatchHub-Soccer"
        },
        {
            id: 2,
            title: "Portfolio - Projects",
            image: "./image/portfolio.png",
            description: "Created and conceptualized a personal portfolio website, implementing MySQL and PHP for the backend and seamlessly integrating Bootstrap, HTML, and CSS for the frontend.",
            githubLink: "https://github.com/sohrabosmany/Portfolio-Website"
        },
        {
            id: 3,
            title: "GitHub - Search API",
            image: "./image/Github-API.png",
            description: "Engineered a web application that features advanced username-driven search capabilities, allowing precise access to projects and GitHub repositories, built using JavaScript, the GitHub API, HTML, and CSS.",
            githubLink: "https://github.com/sohrabosmany/GitHub-API"
        },
        {
            id: 4,
            title: "Game-of-Life",
            image: "./image/game-of-life-loop-cropped.gif",
            description: "Developed and designed a universal Turing Machine, named 'Game of Life,' utilizing Java, advanced algorithms, and the foundational principles of computing learned in coursework.",
            githubLink: "https://github.com/sohrabosmany/Game-of-Life"
        }

    ];

    return (
        <div className="projects-page">
            <header className="projects-header">
                <h1>My Projects</h1>
                <a href="/" className="back-home">← Back to Home</a>
            </header>

            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>

                        <div className="project-content">
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">• {project.description}</p>

                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                               className="github-link">
                                <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        fill="#f0a04b"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;