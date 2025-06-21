document.addEventListener('DOMContentLoaded', () => {
    // 1. Navegación responsiva (Menú hamburguesa)
    const burger = document.getElementById('burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        // Animar los links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animación del botón hamburguesa
        burger.classList.toggle('toggle');
    });

    // Cerrar el menú al hacer clic en un enlace (para móvil)
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navItems.forEach(link => {
                link.style.animation = ''; // Reiniciar la animación
            });
        });
    });

    // 2. Desplazamiento suave (Smooth scrolling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Calcula el desplazamiento teniendo en cuenta la altura de la barra de navegación fija
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const offsetTop = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });


    // 3. Simulación de envío de formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            formStatus.textContent = 'Enviando mensaje...';
            formStatus.style.color = '#0A2647'; // Usando primary-color para el estado de envío

            setTimeout(() => {
                formStatus.textContent = '¡Mensaje enviado con éxito! Te responderemos pronto.';
                formStatus.style.color = '#28a745'; // Verde para éxito
                contactForm.reset();
            }, 2000);
        });
    }

    // Ya no hay botones "Más Info", por lo tanto, no se necesita lógica JavaScript para ellos.
});