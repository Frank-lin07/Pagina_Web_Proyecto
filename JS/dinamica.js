const header = document.querySelector('header');
const logoTexto = document.querySelector('.logo h1');
const iconoMenu = document.querySelector('.btn-menu label');

const colores = {
    'hero': {
        fondo:  '#D3D45C',
        texto:  '#E40605',
        icono:  '#E40605'
    },
    'sinopsis': {
        fondo:  '#8C5011',
        texto:  '#D3D45C',
        icono:  '#D3D45C'
    },
    'cortometraje': {
        fondo:  '#E40605',
        texto:  '#F9C521',
        icono:  '#F9C521'
    },

    'testimonios': {
        fondo:  '#E2728B',
        texto:  '#8C5011',
        icono:  '#8C5011'
},

    'visitanos': {
        fondo:  '#F9C521',
        texto:  '#8C5011',
        icono:  '#8C5011'
    },

    'redes': {
        fondo:  '#D3B1D4',
        texto:  '#8C5011',
        icono:  '#8C5011'
}
};

const secciones = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let seccionActual = 'hero';

    secciones.forEach(seccion => {
        const top = seccion.offsetTop - 80;
        if (window.scrollY >= top) {
            seccionActual = seccion.id;
        }
    });

    const config = colores[seccionActual];
    header.style.background = config.fondo;
    logoTexto.style.color   = config.texto;
    iconoMenu.style.color   = config.icono;
});