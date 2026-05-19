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