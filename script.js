// --- Mensaje al adoptar un árbol ---
const botonesAdoptar = document.querySelectorAll('.boton-adoptar1, .boton-adoptar2, .boton-adoptar3, .boton-adoptar4');

botonesAdoptar.forEach(boton => {
    boton.addEventListener('click', () => {
        const nombreArbol = boton.parentElement.querySelector('h2').textContent;
        boton.textContent = "¡Adoptado!";
        boton.style.backgroundColor = "#2E7D32";
        boton.disabled = true;

        alert(`🌿 ¡Gracias por adoptar un ${nombreArbol}! Pronto recibirás más información.`);
    });
});

// --- Validación del formulario de suscripción ---
const form = document.querySelector('.form-suscripcion');
const inputCorreo = document.querySelector('.correo');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = inputCorreo.value.trim();

    if (correo === "" || !correo.includes("@") || !correo.includes(".")) {
        alert("⚠️ Por favor ingresa un correo electrónico válido.");
    } else {
        alert("✅ ¡Gracias por suscribirte a Adopta tu Árbol!");
        inputCorreo.value = "";
    }
});

// --- Filtro de árboles (selector de tipo) ---
const selector = document.querySelector('.opcion');
selector.addEventListener('change', () => {
    const valor = selector.options[selector.selectedIndex].text;
    const textoMostrando = document.querySelector('.s2');

    textoMostrando.textContent = valor;

    alert(`🌳 Mostrando: ${valor}`);
});
// --- Mensaje al hacer clic en "Donar" ---
const botonDonar = document.querySelector('.b2');
botonDonar.addEventListener('click', () => {
    alert("💚 ¡Gracias por tu generosa donación! Tu aporte ayudará a plantar más árboles y cuidar el medio ambiente.");
});