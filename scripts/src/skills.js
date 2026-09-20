const skills = {
    "Frontend": [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "Angular",
        "Blazor",
        "Bootstrap",
        "jQuery"
    ],

    "Backend": [
        "C#",
        "Python",
        ".NET 8",
        "ASP.NET Core",
        "ASP.NET MVC",
        "Web API",
        "ADO.NET",
        "RESTful APIs",
        "OOP"
    ],

    "Databases": [
        "SQL Server",
        "MySQL",
        "Qdrant",
        "Vector Database"
    ],

    "DevOps & Infrastructure": [
        "Docker",
        "Docker Compose",
        "Kubernetes (k3s)",
        "Azure DevOps",
        "Jenkins",
        "Harbor Registry",
        "CI/CD",
        "Linux",
        "IIS",
        "MinIO"
    ],

    "Monitoring & Tools": [
        "OpenTelemetry",
        "Jaeger",
        "Git",
        "GitHub",
        "Postman",
        "Locust",
        "Agile/Scrum"
    ]
};

function createSkillItem(skill) {
    return `
        <div class="skill-item">
            <span>${skill}</span>
        </div>
    `;
}

function createSkillCategory(category, skillList, reverse = false) {
    const skillsHTML = skillList
        .map(createSkillItem)
        .join("");

    // Duplicate for infinite marquee
    const duplicatedSkillsHTML = skillsHTML + skillsHTML;

    return `
        <h3 class="skills-category">
            ${category}
        </h3>

        <div class="skills-marquee ${reverse ? "reverse" : ""}">
            <div class="skills-track">
                ${duplicatedSkillsHTML}
            </div>
        </div>
    `;
}

function loadSkills() {
    const container = document.getElementById("skillsContainer");

    if (!container) return;

    const categories = Object.entries(skills);

    container.innerHTML = categories
        .map(([category, skillList], index) => {
            // Alternate direction
            const reverse = index % 2 !== 0;

            return createSkillCategory(
                category,
                skillList,
                reverse
            );
        })
        .join("");
}

document.addEventListener("DOMContentLoaded", loadSkills);