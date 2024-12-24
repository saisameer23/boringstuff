// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Dynamic Timeline and Projects
document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');
    const projectsGrid = document.querySelector('.projects-grid');

    const timelineItems = [
        { year: "2021", description: "Started my journey as a Full-Stack Developer." },
        { year: "2022", description: "Built my first major project using React and Node.js." },
        { year: "2023", description: "Worked on multiple full-stack web applications." },
    ];

    timelineItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('timeline-item');
        div.innerHTML = `<strong>${item.year}</strong><p>${item.description}</p>`;
        timeline.appendChild(div);
    });

    const projects = [
        { name: "Project 1", description: "A full-stack eCommerce website", link: "#", image: "assets/images/project1.jpg" },
        { name: "Project 2", description: "A task management application", link: "#", image: "assets/images/project2.jpg" },
        { name: "Project 3", description: "A portfolio website", link: "#", image: "assets/images/project3.jpg" }
    ];

    projects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectsGrid.appendChild(card);
    });
});
