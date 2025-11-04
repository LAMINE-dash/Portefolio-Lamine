   // Initialisation d'EmailJS avec votre Public Key
        emailjs.init('M-VCkaZsziq60ME-x');

        // Menu mobile
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');
        
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Fermer le menu au clic sur un lien
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
        
        // Hero section animations
        document.addEventListener('DOMContentLoaded', function() {
            // Counter animation
            function animateCounters() {
                const counters = document.querySelectorAll('.stat-number');
                
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'));
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += step;
                        if (current < target) {
                            counter.textContent = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                });
            }

            // Animations pour les boutons de service
document.addEventListener('DOMContentLoaded', function() {
    const serviceButtons = document.querySelectorAll('.request-service-btn');
    
    // Ajouter les icônes aux boutons
    serviceButtons.forEach(btn => {
        // Créer l'icône
        const icon = document.createElement('i');
        icon.className = 'fas fa-arrow-right';
        btn.appendChild(icon);
        
        // Animation au survol
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Effet de clic
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-1px) scale(1.02)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        // Animation de focus pour l'accessibilité
        btn.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        btn.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Animation de chargement simulée (optionnelle)
    function simulateLoading(button) {
        button.classList.add('loading');
        button.innerHTML = '<i class="fas fa-spinner"></i> Traitement...';
        
        setTimeout(() => {
            button.classList.remove('loading');
            button.classList.add('success');
            button.innerHTML = '<i class="fas fa-check"></i> Demandé !';
            
            setTimeout(() => {
                button.classList.remove('success');
                button.innerHTML = 'Demander ce service <i class="fas fa-arrow-right"></i>';
            }, 2000);
        }, 1500);
    }
    
    // Option: Décommentez pour voir l'animation de chargement
    
    serviceButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            simulateLoading(this);
        });
    });
    
});

// Animation supplémentaire pour l'interaction des cartes de service
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const btn = this.querySelector('.request-service-btn');
        if (btn) {
            btn.style.transform = 'translateY(-2px)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const btn = this.querySelector('.request-service-btn');
        if (btn && !btn.classList.contains('loading')) {
            btn.style.transform = 'translateY(0)';
        }
    });
});
            
            // Intersection Observer for counter animation
            const heroObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        heroObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            heroObserver.observe(document.getElementById('hero'));
            
            // Typing effect
            const jobTitles = ['Développeur Front-End', 'Designer UI/UX', 'Freelance', 'Support Technique'];
            let currentIndex = 0;
            const typedElement = document.querySelector('.job-typed');
            
            function typeWriter() {
                const currentText = jobTitles[currentIndex];
                let charIndex = 0;
                
                function type() {
                    if (charIndex < currentText.length) {
                        typedElement.textContent = currentText.substring(0, charIndex + 1);
                        charIndex++;
                        setTimeout(type, 100);
                    } else {
                        setTimeout(erase, 2000);
                    }
                }
                
                function erase() {
                    if (charIndex > 0) {
                        typedElement.textContent = currentText.substring(0, charIndex - 1);
                        charIndex--;
                        setTimeout(erase, 50);
                    } else {
                        currentIndex = (currentIndex + 1) % jobTitles.length;
                        setTimeout(typeWriter, 500);
                    }
                }
                
                type();
            }
            
            // Start typing effect
            typeWriter();
            
            // Floating elements interaction
            const floatingElements = document.querySelectorAll('.floating-element');
            
            floatingElements.forEach(element => {
                element.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.2)';
                });
                
                element.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                });
            });
            
            // Scroll to about section
            const scrollIndicator = document.querySelector('.scroll-indicator');
            
            scrollIndicator.addEventListener('click', function() {
                const aboutSection = document.getElementById('about');
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = aboutSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });

        // Animation des barres de compétences
        const skillBars = document.querySelectorAll('.skill-progress');
        
        function animateSkills() {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 100);
            });
        }
        
        // Filtrage du portfolio - Version améliorée
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Retirer la classe active de tous les boutons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Ajouter la classe active au bouton cliqué
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                portfolioItems.forEach((item, index) => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        // Animation d'apparition
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });

        // Animation au défilement
        function checkScroll() {
            const triggerBottom = window.innerHeight / 5 * 4;
            
            // Barres de compétences
            const skillsSection = document.querySelector('#about');
            const skillsSectionTop = skillsSection.getBoundingClientRect().top;
            
            if (skillsSectionTop < triggerBottom) {
                animateSkills();
                window.removeEventListener('scroll', checkScroll);
            }
        }
        
        window.addEventListener('scroll', checkScroll);
        
        // Gestion du modal de demande de service
        const serviceModal = document.getElementById('service-modal');
        const requestServiceBtns = document.querySelectorAll('.request-service-btn');
        const closeModal = document.querySelector('.close-modal');
        const cancelRequestBtn = document.getElementById('cancel-request');
        const serviceTypeInput = document.getElementById('service-type');
        const serviceRequestForm = document.getElementById('service-request-form');
        const confirmationMessage = document.getElementById('confirmation-message');
        
      // Ouvrir le modal avec le service sélectionné automatiquement
requestServiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const service = btn.getAttribute('data-service');
        
        // Remplir automatiquement le champ service
        serviceTypeInput.value = service;
        
        // Afficher le service dans le formulaire de manière plus visible
        const serviceDisplay = document.getElementById('service-display');
        if (serviceDisplay) {
            serviceDisplay.textContent = service;
            serviceDisplay.style.color = 'var(--primary-color)';
            serviceDisplay.style.fontWeight = '600';
        }
        
        // Ouvrir le modal
        serviceModal.style.display = 'block';
        confirmationMessage.style.display = 'none';
        serviceRequestForm.reset();
        serviceRequestForm.style.display = 'block';
        
        // Focus sur le premier champ pour une meilleure UX
        setTimeout(() => {
            document.getElementById('client-name').focus();
        }, 300);
    });
});
        // Fermer le modal
        closeModal.addEventListener('click', () => {
            serviceModal.style.display = 'none';
        });
        
        cancelRequestBtn.addEventListener('click', () => {
            serviceModal.style.display = 'none';
        });
        
        // Fermer le modal en cliquant à l'extérieur
        window.addEventListener('click', (e) => {
            if (e.target === serviceModal) {
                serviceModal.style.display = 'none';
            }
        });
        
        // Fonction pour afficher les notifications
        function showNotification(message, type) {
            // Créer une notification toast
            const notification = document.createElement('div');
            notification.className = `notification ${type}`;
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 5px;
                color: white;
                font-weight: bold;
                z-index: 3000;
                transition: all 0.3s ease;
                ${type === 'success' ? 'background-color: #2ecc71;' : 'background-color: #e74c3c;'}
            `;
            
            document.body.appendChild(notification);
            
            // Supprimer la notification après 5 secondes
            setTimeout(() => {
                notification.remove();
            }, 5000);
        }
        
        // Fonction pour envoyer l'email via EmailJS
        function sendServiceRequestEmail(data) {
            console.log("🚀 Envoi EmailJS en cours...", data);
            
            // Paramètres pour EmailJS
            const templateParams = {
                service: data.service,
                name: data.name,
                email: data.email,
                phone: data.phone || 'Non renseigné',
                budget: data.budget || 'Non spécifié',
                deadline: data.deadline || 'Non spécifié',
                details: data.details,
                date: data.date
            };

            // Envoi de l'email via EmailJS
            emailjs.send('service_3s3hf2n', 'template_7zxldj1', templateParams)
                .then(function(response) {
                    console.log('✅ SUCCESS!', response.status, response.text);
                    showNotification('Demande envoyée avec succès! Je vous répondrai rapidement.', 'success');
                }, function(error) {
                    console.log('❌ FAILED...', error);
                    showNotification('Erreur: ' + (error.text || 'Veuillez réessayer'), 'error');
                    // Réafficher le formulaire en cas d'erreur
                    serviceRequestForm.style.display = 'block';
                    confirmationMessage.style.display = 'none';
                });
        }
        
        // Soumission du formulaire de demande de service
        serviceRequestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const serviceData = {
                service: serviceTypeInput.value,
                name: document.getElementById('client-name').value,
                email: document.getElementById('client-email').value,
                phone: document.getElementById('client-phone').value,
                budget: document.getElementById('budget').value,
                deadline: document.getElementById('deadline').value,
                details: document.getElementById('project-details').value,
                date: new Date().toLocaleString('fr-FR')
            };
            
            // Validation basique
            if (!serviceData.name || !serviceData.email || !serviceData.details) {
                showNotification('Veuillez remplir tous les champs obligatoires', 'error');
                return;
            }
            
            // Envoi de l'email
            sendServiceRequestEmail(serviceData);
            
            // Affichage du message de confirmation
            serviceRequestForm.style.display = 'none';
            confirmationMessage.style.display = 'block';
            
            // Fermeture automatique du modal après 5 secondes
            setTimeout(() => {
                serviceModal.style.display = 'none';
            }, 5000);
        });
        
        // Soumission du formulaire de contact
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Récupération des données
            const contactData = {
                name: document.getElementById('contact-name').value,
                email: document.getElementById('contact-email').value,
                subject: document.getElementById('contact-subject').value,
                message: document.getElementById('contact-message').value
            };
            
            // Validation
            if (!contactData.name || !contactData.email || !contactData.message) {
                showNotification('Veuillez remplir tous les champs obligatoires', 'error');
                return;
            }
            
            // Envoi via EmailJS
            emailjs.send('service_3s3hf2n', 'template_7zxldj1', {
                service: 'Message de contact - ' + (contactData.subject || 'Sans sujet'),
                name: contactData.name,
                email: contactData.email,
                phone: 'Non renseigné',
                budget: 'Non spécifié',
                deadline: 'Non spécifié',
                details: `Sujet: ${contactData.subject || 'Non spécifié'}\n\nMessage: ${contactData.message}`,
                date: new Date().toLocaleString('fr-FR')
            })
            .then(() => {
                showNotification('Message envoyé avec succès! Je vous répondrai rapidement.', 'success');
                contactForm.reset();
            })
            .catch(error => {
                console.log('❌ Erreur contact:', error);
                showNotification('Erreur lors de l\'envoi du message', 'error');
            });
        });
        
        // Soumission du formulaire de newsletter
        const newsletterForm = document.querySelector('.newsletter-form');
        
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!email) {
                showNotification('Veuillez entrer une adresse email', 'error');
                return;
            }
            
            // Validation email basique
            if (!email.includes('@') || !email.includes('.')) {
                showNotification('Veuillez entrer une adresse email valide', 'error');
                return;
            }
            
            // Envoi de l'email pour newsletter
            emailjs.send('service_3s3hf2n', 'template_7zxldj1', {
                service: 'Nouvel abonné newsletter',
                name: 'Abonné Newsletter',
                email: email,
                phone: 'Non renseigné',
                budget: 'Non spécifié',
                deadline: 'Non spécifié',
                details: 'Nouvelle inscription à la newsletter',
                date: new Date().toLocaleString('fr-FR')
            })
            .then(() => {
                showNotification('Merci de votre abonnement à notre newsletter!', 'success');
                newsletterForm.reset();
            })
            .catch(error => {
                console.log('❌ Erreur newsletter:', error);
                showNotification('Merci de votre abonnement!', 'success'); // On affiche quand même le succès
                newsletterForm.reset();
            });
        });
        
        // Smooth scroll pour les liens d'ancrage
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (window.innerWidth <= 768) {
                        nav.classList.remove('active');
                        menuToggle.classList.remove('active');
                    }
                }
            });
        });
        
        // Animation du footer au survol des liens
        document.querySelectorAll('.footer-links a').forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(5px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });
        
        // Back to top button
        const backToTopBtn = document.querySelector('.back-to-top');
        
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Animation des cartes de service au survol
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Test de connexion EmailJS au chargement
        document.addEventListener('DOMContentLoaded', function() {
            console.log("✅ Portfolio chargé avec EmailJS");
            console.log("Public Key: M-VCkaZsziq60ME-x");
            console.log("Service ID: service_3s3hf2n");
            console.log("Template ID: template_7zxldj1");
            
            // Vérification que tous les éléments sont chargés
            console.log("Modal service:", serviceModal ? "✅ Trouvé" : "❌ Non trouvé");
            console.log("Boutons service:", requestServiceBtns.length);
            console.log("Form contact:", contactForm ? "✅ Trouvé" : "❌ Non trouvé");
        });
        
        // Gestion du responsive - fermer le menu quand on redimensionne
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
        
        // Chargement des images avec effet de fade
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                
                img.onload = function() {
                    this.style.opacity = '1';
                };
                
                // Si l'image est déjà chargée
                if (img.complete) {
                    img.style.opacity = '1';
                }
            });
        });