// Language switching functionality
let currentLanguage = localStorage.getItem('language') || 'pl';

// Loading animation
function handleLoadingAnimation() {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        // Remove hash from URL to prevent infinite loading
        if (window.location.hash === '#home') {
            history.replaceState(null, null, ' ');
        }
        
        // Add a class to body when loading is complete
        document.body.classList.add('loaded');
        
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                loader.remove(); // Completely remove the loader from DOM
            }, 500);
        }, 1000); // Reduced from 1500ms to 1000ms for better UX
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'pl' : 'en';
    localStorage.setItem('language', currentLanguage);
    const langButton = document.querySelector('.lang-switch');
    langButton.textContent = currentLanguage.toUpperCase();
    updateContent();
}

function updateContent() {
    // Update navigation
    document.querySelector('.nav-brand').textContent = translations[currentLanguage].nav.brand;
    document.querySelector('[href="#about"]').textContent = translations[currentLanguage].nav.about;
    document.querySelector('[href="#projects"]').textContent = translations[currentLanguage].nav.projects;
    document.querySelector('[href="#experience"]').textContent = translations[currentLanguage].nav.experience;
    document.querySelector('[href="#contact"]').textContent = translations[currentLanguage].nav.contact;

    // Update hero section
    document.querySelector('.hero-title').textContent = translations[currentLanguage].hero.title;
    document.querySelector('.hero-subtitle').textContent = translations[currentLanguage].hero.subtitle;

    // Update about section
    document.querySelector('#about .section-title').textContent = translations[currentLanguage].about.title;
    document.querySelector('.about-text').innerHTML = translations[currentLanguage].about.description;

    // Update skills section
    document.querySelector('#skills .section-title').textContent = translations[currentLanguage].skills.title;
    document.querySelectorAll('.skills-category h3').forEach((element, index) => {
        if (index === 0) element.textContent = translations[currentLanguage].skills.technical;
        if (index === 1) element.textContent = translations[currentLanguage].skills.soft;
        if (index === 2) element.textContent = translations[currentLanguage].skills.methodologies;
    });

    // Update skills lists
    const technicalList = document.querySelector('.technical-skills');
    const softList = document.querySelector('.soft-skills');
    const methodologiesList = document.querySelector('.methodologies-list');

    if (technicalList) {
        technicalList.innerHTML = translations[currentLanguage].skills.technicalList
            .map(skill => `<li class="skill-item">${skill}</li>`).join('');
    }
    if (softList) {
        softList.innerHTML = translations[currentLanguage].skills.softList
            .map(skill => `<li class="skill-item">${skill}</li>`).join('');
    }
    if (methodologiesList) {
        methodologiesList.innerHTML = translations[currentLanguage].skills.methodologiesList
            .map(skill => `<li class="skill-item">${skill}</li>`).join('');
    }

    // Update experience section
    document.querySelector('#experience .section-title').textContent = translations[currentLanguage].experience.title;

    // Update experience content
    const webmasterExp = document.querySelector('.webmaster-experience');
    const internExp = document.querySelector('.intern-experience');
    
    if (webmasterExp) {
        webmasterExp.querySelector('h3').textContent = translations[currentLanguage].experience.webmaster.title;
        webmasterExp.querySelector('.company').textContent = translations[currentLanguage].experience.webmaster.company;
        webmasterExp.querySelector('.period').textContent = translations[currentLanguage].experience.webmaster.period;
        webmasterExp.querySelector('.experience-summary').textContent = translations[currentLanguage].experience.webmaster.summary;
        
        const responsibilitiesList = webmasterExp.querySelector('.responsibilities-list');
        responsibilitiesList.innerHTML = translations[currentLanguage].experience.webmaster.responsibilities
            .map(resp => `<li>${resp}</li>`).join('');
        
        webmasterExp.querySelector('h4').textContent = currentLanguage === 'pl' ? 'Główne obowiązki:' : 'Key Responsibilities:';
    }

    if (internExp) {
        internExp.querySelector('h3').textContent = translations[currentLanguage].experience.intern.title;
        internExp.querySelector('.company').textContent = translations[currentLanguage].experience.intern.company;
        internExp.querySelector('.period').textContent = translations[currentLanguage].experience.intern.period;
        internExp.querySelector('.description').textContent = translations[currentLanguage].experience.intern.description;
    }

    // Update education section
    document.querySelector('#education .section-title').textContent = translations[currentLanguage].education.title;
    const universityEdu = document.querySelector('.university-education');
    const technicalEdu = document.querySelector('.technical-education');

    if (universityEdu) {
        universityEdu.querySelector('h3').textContent = translations[currentLanguage].education.university.school;
        universityEdu.querySelector('.degree').textContent = translations[currentLanguage].education.university.degree;
        universityEdu.querySelector('.period').textContent = translations[currentLanguage].education.university.period;
    }

    if (technicalEdu) {
        technicalEdu.querySelector('h3').textContent = translations[currentLanguage].education.technical.school;
        technicalEdu.querySelector('.degree').textContent = translations[currentLanguage].education.technical.degree;
        technicalEdu.querySelector('.period').textContent = translations[currentLanguage].education.technical.period;
    }

    // Update languages section
    const languagesSection = document.querySelector('#languages');
    if (languagesSection) {
        languagesSection.querySelector('.section-title').textContent = translations[currentLanguage].languages.title;
        const languageItems = languagesSection.querySelectorAll('.language-item');
        languageItems.forEach((item, index) => {
            if (index === 0) item.querySelector('p').textContent = translations[currentLanguage].languages.polish;
            if (index === 1) item.querySelector('p').textContent = translations[currentLanguage].languages.english;
            if (index === 2) item.querySelector('p').textContent = translations[currentLanguage].languages.german;
        });
    }

    // Update projects section
    document.querySelector('#projects .section-title').textContent = translations[currentLanguage].projects.title;
    populateProjects(); // Call populateProjects to update project cards with current language

    // // Update contact section
    document.querySelector('#contact .section-title').textContent = translations[currentLanguage].contact.title;
    document.querySelector('.contact-content p').textContent = translations[currentLanguage].contact.description;
    
    // // Update contact information
    // const contactInfo = document.querySelector('.contact-info');
    // if (contactInfo) {
    //     contactInfo.innerHTML = `
    //         <div class="contact-item">
    //             <i class="fas fa-phone"></i>
    //             <a href="tel:${translations[currentLanguage].contact.phone}">${translations[currentLanguage].contact.phone}</a>
    //         </div>
    //         <div class="contact-item">
    //             <i class="fas fa-envelope"></i>
    //             <a href="mailto:${translations[currentLanguage].contact.email}">${translations[currentLanguage].contact.email}</a>
    //         </div>
    //         <div class="contact-item">
    //             <i class="fab fa-facebook"></i>
    //             <a href="https://${translations[currentLanguage].contact.facebook}" target="_blank">${translations[currentLanguage].contact.facebook}</a>
    //         </div>
    //     `;
    // }
}

// Mobile menu functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Project data
const projects = [
    {
        title: {
            en: 'School Project "Librus"',
            pl: 'Projekt szkolny "Librus"'
        },
        description: {
            en: 'A project emulating the "Librus" platform (2018) using relational databases. The website features functionality for assigning tasks to students and allowing them to respond to teachers with attachments. Includes online meeting creation capabilities.',
            pl: 'Projekt imitujący stronę "Librus" (2018r.) z wykorzystaniem relacyjnych baz danych. Strona z możliwością zadawania zadań dla uczniów oraz odpowiadania nauczycielom dodatkowo wysyłając załączniki. Tworzenie spotkań online.'
        },
        image: 'assets/projects/projects_wizytowka.webp',
        github: 'https://github.com/ehoze',
        demo: '#'
    },
    {
        title: {
            en: 'Course World - Udemy Clone',
            pl: 'Świat Kursów - Udemy 2.0'
        },
        description: {
            en: 'Designed and implemented a comprehensive e-learning platform inspired by Udemy using the Laravel framework. The platform features advanced functionalities including online payment system, user fund management, full user account management with profile editing, and automated email notification system. Also implemented a fully functional e-commerce system with a responsive user interface, all integrated with a relational database. The project achieved significant advancement, fulfilling all key functional requirements.',
            pl: 'Zaprojektowałem i zaimplementowałem kompleksową platformę e-learningową wzorowaną na Udemy, wykorzystując framework Laravel. Platforma oferuje zaawansowane funkcjonalności, takie jak system płatności online, zarządzanie środkami użytkownika, pełną obsługę kont użytkowników wraz z edycją profili, oraz zautomatyzowany system powiadomień e-mail. Zaimplementowano również w pełni funkcjonalny sklep internetowy z responsywnym interfejsem użytkownika, wszystko zintegrowane z relacyjną bazą danych. Projekt osiągnął znaczący poziom zaawansowania, realizując wszystkie kluczowe założenia funkcjonalne.'
        },
        image: 'assets/projects/projects_bcomp.webp',
        github: 'https://github.com/ehoze',
        demo: '#'
    }
];

// Populate projects
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title[currentLanguage]}" class="project-image">
            <div class="project-info">
                <h3 class="project-title">${project.title[currentLanguage]}</h3>
                <p class="project-description">${project.description[currentLanguage]}</p>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" class="project-link">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.demo}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    updateContent();
    const langButton = document.querySelector('.lang-switch');
    langButton.textContent = currentLanguage.toUpperCase();
    
    // Move handleLoadingAnimation to the end
    setTimeout(() => {
        handleLoadingAnimation();
    }, 500);
});

// Remove any duplicate initialization code