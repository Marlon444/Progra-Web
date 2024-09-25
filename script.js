//MENU Y DESLIZAMIENTO

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajustar para evitar que el menú fijo cubra el título
            behavior: 'smooth'
        });
    });
});

// FLECHA Y FLUIDES DE DEZPLASAMIENTO
document.querySelector('.flecha-bajar a').addEventListener('click', function(e) {
    e.preventDefault(); 

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

   
    targetElement.scrollIntoView({ behavior: 'smooth' });
});
