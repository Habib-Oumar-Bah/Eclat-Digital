/* =============================================================
   ÉCLAT DIGITAL - SCRIPTS
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // 1. DÉFILEMENT FLUIDE (SMOOTH SCROLL)
    // Permet de glisser doucement vers les sections lors d'un clic sur le menu
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === "#") return; // Si c'est juste un lien vide
            
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // On calcule la position avec un petit décalage pour ne pas coller au menu fixe
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. EFFET DE TRANSPARENCE SUR LE HEADER
    // Le menu devient plus sombre ou change de style quand on commence à scroller
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(26, 34, 56, 0.98)";
            header.style.padding = "10px 0";
            header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
        } else {
            header.style.background = "rgba(26, 34, 56, 0.95)";
            header.style.padding = "15px 0";
            header.style.boxShadow = "none";
        }
    });

    // 3. GESTION DU BOUTON DE FORMULAIRE
    // Change le texte du bouton après le clic pour éviter les envois multiples
    const contactForm = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.contact-form .btn-cta');

    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            submitBtn.innerText = "Envoi en cours...";
            submitBtn.style.opacity = "0.7";
            submitBtn.style.pointerEvents = "none";
        });
    }

    // 4. ANIMATION SIMPLE AU SCROLL (REVEAL)
    // Fait apparaître les éléments quand ils entrent dans l'écran
    const revealElements = document.querySelectorAll('.service-card, .avantage-item, .price-card');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Initialisation des styles pour l'animation
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Lancer une fois au chargement
});