// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const welcomeContainer = document.querySelector('.welcome-container');
    const mainContent = document.querySelector('.main-content');
    const generateQRButton = document.getElementById('generateQRButton');
    const qrcodeContainer = document.getElementById('qrcode-container');

    // Mostrar la animación de bienvenida
    setTimeout(() => {
        welcomeContainer.classList.add('active'); // Activar la animación
    }, 500); // Retraso inicial

    // Ocultar la animación y mostrar el contenido principal inmediatamente después
    setTimeout(() => {
        welcomeContainer.classList.remove('active'); // Desactivar la animación
        welcomeContainer.classList.add('hidden'); // Ocultar el contenedor de bienvenida

        // Mostrar el contenido principal inmediatamente
        mainContent.classList.remove('hidden'); // Hacer visible el contenido
        setTimeout(() => {
            mainContent.classList.add('visible'); // Activar la animación del contenido
        }, 50); // Pequeño retraso para asegurar la transición
    }, 3000); // Duración total de la animación de bienvenida (3 segundos)

    // Función para generar el código QR
    generateQRButton.addEventListener('click', function () {
        // Limpiar el contenedor antes de generar un nuevo código QR
        qrcodeContainer.innerHTML = '';

        // URL de la página actual
        const url = window.location.href;

        // Generar el código QR
        new QRCode(qrcodeContainer, {
            text: url, // Texto del código QR (la URL de la página)
            width: 150, // Ancho del código QR
            height: 150, // Altura del código QR
        });
    });
});