document.getElementById('cambiar-seccion').addEventListener('click', function() {
    // Oculta la sección actual y muestra la otra
    document.getElementById('seccion1').classList.toggle('oculta');
    document.getElementById('seccion2').classList.toggle('visible');
});