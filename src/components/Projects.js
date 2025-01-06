import React from 'react';

function Projects() {
    const projectList = [
        {
            title: "Event Management System",
            description: "Built with Node.js, React, MongoDB, and Express.",
            link: "https://github.com/fzSwift/CampusConnect.git"
        },
        {
            title: "Educational Video Game",
            description: "A game to help children improve math and spelling.",
            link: "https://github.com/fzSwift/video-game-project"
        }
    ];

    return (
        <section>
            <h2>Projects</h2>
            {projectList.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            ))}
        </section>
    );
}

export default Projects;
