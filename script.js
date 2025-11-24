// ===== WAIT FOR DOM TO BE READY =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM LOADED - Starting initialization');
    
    // ===== NAVIGATION MENU =====
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navOverlay = document.getElementById('nav-overlay');
    
    // Show menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show');
            navOverlay.classList.add('show');
            document.body.style.overflow = 'hidden';
            console.log('Menu opened');
        });
    }
    
    // Hide menu function
    const hideMenu = () => {
        navMenu.classList.remove('show');
        navOverlay.classList.remove('show');
        document.body.style.overflow = '';
        console.log('Menu closed');
    };
    
    // Hide menu on close button click
    if (navClose) {
        navClose.addEventListener('click', hideMenu);
    }
    
    // Hide menu on overlay click
    if (navOverlay) {
        navOverlay.addEventListener('click', hideMenu);
    }
    
    // ===== NAVIGATION LINKS =====
    const navLinks = document.querySelectorAll('.nav__link');
    console.log('Found', navLinks.length, 'navigation links');
    
    navLinks.forEach((link, index) => {
        const href = link.getAttribute('href');
        console.log(`Link ${index}: "${link.textContent.trim()}" -> ${href}`);
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            console.log('============================');
            console.log('CLICKED:', targetId);
            console.log('============================');
            
            const targetSection = document.querySelector(targetId);
            
            if (!targetSection) {
                console.error('Section not found:', targetId);
                alert('Section not found: ' + targetId);
                return;
            }
            
            console.log('Found section:', targetSection.id);
            
            // Close mobile menu
            hideMenu();
            
            // Get header height
            const header = document.getElementById('header');
            const headerHeight = header ? header.offsetHeight : 80;
            
            // Calculate position
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            console.log('Scrolling to:', targetPosition);
            
            // Scroll
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
    
    // ===== ACTIVE LINK ON SCROLL =====
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;
        const header = document.getElementById('header');
        const headerOffset = header ? header.offsetHeight + 20 : 100;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - headerOffset;
            const sectionId = section.getAttribute('id');
            const link = document.querySelector(`.nav__link[href*="${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link?.classList.add('active');
            } else {
                link?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', scrollActive);
    
    // ===== HEADER SHADOW ON SCROLL =====
    const header = document.getElementById('header');
    
    function shadowHeader() {
        if (window.scrollY >= 50) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        }
    }
    
    window.addEventListener('scroll', shadowHeader);
    
    // ===== SCROLL TO TOP BUTTON =====
    const scrollTopBtn = document.getElementById('scroll-top');
    
    function showScrollTop() {
        if (window.scrollY >= 400) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }
    
    window.addEventListener('scroll', showScrollTop);
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== SCROLL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards
    document.querySelectorAll('.service__card, .testimonial__card, .why-choose__card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ===== PHONE NUMBER FORMATTING =====
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = `(${value}`;
                } else if (value.length <= 6) {
                    value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
                } else {
                    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
                }
            }
            
            e.target.value = value;
        });
    });
    
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero__content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
    
    // Check scroll position on load
    scrollActive();
    shadowHeader();
    showScrollTop();
    
    console.log('Initialization complete!');
});

// ===== CONTACT FORM HANDLING (DEMO MODE) =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('form-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalOk = document.getElementById('modal-ok');
    
    if (!contactForm) return;
    
    // Show modal function
    function showModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
    
    // Hide modal function
    function hideModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }
    
    // Form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show modal instead of sending
        showModal();
        
        // Reset form after showing modal
        setTimeout(() => {
            contactForm.reset();
        }, 500);
    });
    
    // Close modal on button click
    if (modalOk) {
        modalOk.addEventListener('click', hideModal);
    }
    
    // Close modal on X button
    if (modalClose) {
        modalClose.addEventListener('click', hideModal);
    }
    
    // Close modal on overlay click
    if (modalOverlay) {
        modalOverlay.addEventListener('click', hideModal);
    }
    
    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });
});
