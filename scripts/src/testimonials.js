const testimonials = [
    {
        message: `"Elango is a highly dedicated and dependable resource who consistently delivers tasks on time with great quality. He has taken strong ownership of critical POC initiatives in our team, especially in the NextlySign. His worked on the HAProxy server setup and the complex bulk download logic for NextlySign demonstrated excellent technical skills, problem-solving ability, and commitment to successful delivery."`,
        name: "Aravindakumar Thangaraj",
        designation: "Technical Lead",
        company: "ClaySys Technologies",
        linkedin: "https://www.linkedin.com/in/aravindakumar-thangaraj-34556314/"
    },
    {
        message: `"It was great working with Elangovan. He learns things quickly, handles multitasking across projects really well, and always makes sure deliverables are completed on time with good quality."`,
        name: "Mohnish V",
        designation: "Senior Software Engineer",
        company: "ClaySys Technologies",
        linkedin: "https://www.linkedin.com/in/heymoni/"
    },
    {
        message: `"I’ve really enjoyed working with Elangovan on our projects. He is very approachable and always willing to help the team whenever needed. His problem-solving skills and ability to handle challenges calmly and efficiently have made collaboration smooth and productive."`,
        name: "Shiny Raphael",
        designation: "Senior Software Test Engineer",
        company: "ClaySys Technologies",
        linkedin: "https://www.linkedin.com/in/shiny-raphael-k-ab62261a9/"
    },
    {
        message: `"I had the opportunity to work with Elangovan on an AI/ML project, and he is one of the best developers I’ve worked with. He has strong technical expertise, actively contributes ideas in discussions, and consistently delivers quality solutions. He is also approachable and collaborative, making him a great team member. I believe he has strong potential for technical leadership and mentoring roles."`,
        name: "Gayathri Santhosh",
        designation: "Project Manager",
        company: "ClaySys Technologies",
        linkedin: "https://www.linkedin.com/in/gayathri-santhosh-96a72a248/"
    },
    {
        message: `"It has been a pleasure working with Elangovan. He is a quick learner, highly dependable, and consistently delivers quality work on time. His ability to manage multiple responsibilities, solve problems efficiently, and support the team whenever needed makes him a valuable contributor to any project."`,
        name: "Aswani V D",
        designation: "Senior Software Engineer",
        company: "ClaySys Technologies",
        linkedin: "https://www.linkedin.com"
    },
    {
        message: `"I have worked with Elangovan for 2 years and have always trusted his work. He brings clarity to timelines, takes ownership, and delivers consistently.

In critical situations, he stays focused and ensures key things get done without needing close follow-up.

He is also quick to adapt to new tools, languages, and techniques. Whenever unfamiliar work came up, he would research it thoroughly and deliver on it reliably."`,
        name: "Shivam Kurtarkar",
        designation: "Senior AI/ML Engineer",
        company: "ClaySys Technologies",
        linkedin: "https://www.linkedin.com/in/shivam-kurtarkar/"
    },
    {
        message: `"I really appreciate working with Elangovan. He is a skilled and dependable developer who always keeps his work clean, organized, and well-structured. He pays attention to details and puts genuine effort into everything he does. He is also supportive and easy to work with as a team member. His dedication and quality of work make him a valuable part of the project and the organization."`,
        name: "Devika Raju",
        designation: "Software Test Engineer",
        company: "ClaySys Technologies",
        linkedin: "https://www.linkedin.com/in/devika-raju-17231a32b/"
    }
];

function createTestimonialCard(testimonial) {
    const linkedin = testimonial.linkedin
        ? `
            <a href="${testimonial.linkedin}"
               target="_blank"
               rel="noopener noreferrer"
               class="linkedin-handle">
                <i class="fab fa-linkedin"></i>
                ${testimonial.name}
            </a>
        `
        : `
            <span class="linkedin-handle">
                <i class="fab fa-linkedin"></i>
                ${testimonial.name}
            </span>
        `;

    return `
        <div class="testimonial-card">
            <p>${testimonial.message}</p>

            <div class="testimonial-user">
                ${linkedin}

                <span class="designation">
                    ${testimonial.designation}
                </span>

                <span>
                    ${testimonial.company}
                </span>
            </div>
        </div>
    `;
}

function loadTestimonials() {
    const track = document.getElementById("testimonialTrack");

    if (!track) return;

    const testimonialHTML = testimonials
        .map(createTestimonialCard)
        .join("");

    track.innerHTML = testimonialHTML + testimonialHTML;
}

document.addEventListener("DOMContentLoaded", loadTestimonials);