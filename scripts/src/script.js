
// Smooth Scroll Navigation

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {

        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);

        const targetElement = document.getElementById(targetId);

        if (!targetElement) return;

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });
});

// Section Reveal Animation

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => observer.observe(section));

// Typing Animation

const roles = [
    '.NET • ASP.NET Core Engineer',
    'Building Scalable Web Applications',
    '.NET • Angular Software Engineer'
];

let i = 0;
let j = 0;
let deleting = false;

const typing = document.querySelector('.typing');

function type() {
    const currentRole = roles[i];

    typing.textContent = deleting
        ? currentRole.slice(0, --j)
        : currentRole.slice(0, ++j);

    if (!deleting && j === currentRole.length) {
        setTimeout(() => {
            deleting = true;
        }, 2000);
    }

    if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % roles.length;
    }

    setTimeout(type, deleting ? 50 : 100);
}

window.addEventListener('DOMContentLoaded', type);

// Footer Year

document.getElementById('year').textContent = new Date().getFullYear();

// Particle Animation

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
}));

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#64ffda';

    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) {
            p.dx *= -1;
        }

        if (p.y < 0 || p.y > canvas.height) {
            p.dy *= -1;
        }
    });

    requestAnimationFrame(animate);
}

animate();

// Hamburger Menu Toggle

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

const cards = [
    document.querySelector('.stack-card1'),
    document.querySelector('.stack-card2'),
    document.querySelector('.stack-card3'),
    document.querySelector('.stack-card4'),
    document.querySelector('.stack-card5'),
    document.querySelector('.stack-card6')
];

const positions = [
    'stack-card1',
    'stack-card2',
    'stack-card3',
    'stack-card4',
    'stack-card5',
    'stack-card6'
];

setInterval(() => {

    const last = positions.pop();
    positions.unshift(last);

    cards.forEach((card, index) => {

        card.classList.remove(
            'stack-card1',
            'stack-card2',
            'stack-card3',
            'stack-card4',
            'stack-card5',
            'stack-card6'
        );

        card.classList.add(positions[index]);

    });

}, 2500);

    const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});