const header = document.querySelector('header');
const logoTexto = document.querySelector('.logo h1');
const iconoMenu = document.querySelector('.btn-menu label');

const colores = {
    'corto-hero': {
        fondo:  '#1a1a1a',
        texto:  '#FF8F0F',
        icono:  '#FF8F0F'
    },
    'corto-video': {
        fondo:  '#E40605',
        texto:  '#F9C521',
        icono:  '#F9C521'
    },
    'corto-creditos': {
        fondo:  '#8C5011',
        texto:  '#F9C521',
        icono:  '#F9C521'
    }
};

const secciones = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let seccionActual = 'corto-hero';

    secciones.forEach(seccion => {
        const top = seccion.offsetTop - 80;
        if (window.scrollY >= top) {
            seccionActual = seccion.id;
        }
    });

    const config = colores[seccionActual];
    if (config) {
        header.style.background = config.fondo;
        logoTexto.style.color   = config.texto;
        iconoMenu.style.color   = config.icono;
    }
});

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        if (!destino) return;
        document.getElementById('btn-menu').checked = false;
        const alturaHeader = 70;
        const posicion = destino.offsetTop - alturaHeader;
        window.scrollTo({ top: posicion, behavior: 'smooth' });
    });
});

/**ANIMACIONES DE ENTRADA**/ 
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.animar, .animar-izquierda, .animar-derecha').forEach(el => {
    observador.observe(el);
});