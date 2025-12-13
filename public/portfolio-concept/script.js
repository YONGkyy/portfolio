// Portfolio Website - Interactive Features
// =========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinksContainer = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
        const icon = this.querySelector('i');
        
        if (navLinksContainer.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinksContainer.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Smooth Scroll for Navigation Links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update Active Nav Link
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
    
    // Hero CTA Buttons
    const heroBtns = document.querySelectorAll('.hero .btn');
    heroBtns[0]?.addEventListener('click', function() {
        const projectsSection = document.getElementById('projects');
        const offsetTop = projectsSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
    
    heroBtns[1]?.addEventListener('click', function() {
        const contactSection = document.getElementById('contact');
        const offsetTop = contactSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
    
    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Show success message (in real scenario, you'd send to backend)
            showFormMessage('success', 'Thank you! Your message has been sent successfully.');
            
            // Reset form
            contactForm.reset();
            
            // In a real application, you would send the data to your backend:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // })
            // .then(response => response.json())
            // .then(data => showFormMessage('success', 'Message sent!'))
            // .catch(error => showFormMessage('error', 'Something went wrong.'));
        });
    }
    
    // Form Message Display
    function showFormMessage(type, message) {
        // Remove existing message if any
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.style.cssText = `
            padding: 1rem 1.5rem;
            margin-top: 1rem;
            border-radius: 0.75rem;
            font-weight: 500;
            animation: fadeInUp 0.4s ease-out;
            background: ${type === 'success' ? 'rgba(139, 157, 131, 0.15)' : 'rgba(220, 38, 38, 0.15)'};
            color: ${type === 'success' ? 'var(--color-accent-light)' : '#ef4444'};
            border: 1px solid ${type === 'success' ? 'var(--color-accent-primary)' : '#ef4444'};
        `;
        messageDiv.textContent = message;
        
        // Insert after form
        contactForm.appendChild(messageDiv);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => messageDiv.remove(), 300);
        }, 5000);
    }
    
    // Smooth Form Input Focus Effects
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.25s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
    
    // Project Card Tilt Effect (subtle 3D effect on hover)
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // Skill Tags Hover Animation
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        // Stagger animation on load
        setTimeout(() => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(10px)';
            setTimeout(() => {
                tag.style.transition = 'all 0.4s ease';
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, 50);
        }, index * 30);
    });
    
    // Social Links Hover Effect
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'glow 1.5s ease-in-out infinite';
            }, 10);
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.animation = 'none';
        });
    });
    
    // Parallax Effect for Hero Section
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const heroContent = hero.querySelector('.hero-content');
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
            heroContent.style.opacity = 1 - (scrolled / 500);
        }
    });
    
    // Stats Counter Animation
    const statsNumbers = document.querySelectorAll('.stat-number');
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                // Only animate if it's a number
                if (!isNaN(parseInt(finalValue))) {
                    animateCounter(target, parseInt(finalValue));
                }
                
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statsNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const duration = 1500;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + '+';
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, stepTime);
    }
    
    // Cursor Custom Trail Effect (Optional - uncomment if desired)
    // const cursor = document.createElement('div');
    // cursor.style.cssText = `
    //     position: fixed;
    //     width: 20px;
    //     height: 20px;
    //     border-radius: 50%;
    //     background: var(--color-accent-primary);
    //     pointer-events: none;
    //     mix-blend-mode: difference;
    //     transition: transform 0.1s ease;
    //     z-index: 10000;
    // `;
    // document.body.appendChild(cursor);
    
    // document.addEventListener('mousemove', (e) => {
    //     cursor.style.left = e.clientX - 10 + 'px';
    //     cursor.style.top = e.clientY - 10 + 'px';
    // });
    
    // Add scale effect on clickable elements
    const clickableElements = document.querySelectorAll('a, button');
    clickableElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.cursor = 'pointer';
        });
    });
    
    // Keyboard Navigation Accessibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Initial call to set active nav on page load
    updateActiveNavLink();
    
    console.log('%c Portfolio Website Loaded Successfully! ', 
                'background: #8B9D83; color: #0a0e0d; font-size: 16px; padding: 10px; border-radius: 5px;');
});

// Performance: Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
