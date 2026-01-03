document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (!target) return;

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));
const roles = [
  "Software Engineer",
  ".NET • ASP.NET Core • Angular",
  "Building Scalable Web Applications"
];

let i = 0, j = 0, deleting = false;
const typing = document.querySelector(".typing");

function type() {
    const word = roles[i];
    typing.textContent = deleting ? word.slice(0, --j) : word.slice(0, ++j);

    if (!deleting && j === word.length) setTimeout(() => deleting = true, 1200);
    if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % roles.length;
    }
    setTimeout(type, deleting ? 50 : 80);
}

document.addEventListener("DOMContentLoaded", type);

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
}));

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#64ffda";

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    requestAnimationFrame(animate);
}

animate();
