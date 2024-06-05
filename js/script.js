document.addEventListener('DOMContentLoaded', () => {
    const contenedorQR = document.getElementById('contenedorQR');
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const link = document.getElementById('link').value;
        contenedorQR.innerHTML = '';
        new QRCode(contenedorQR, link);
    });
});
