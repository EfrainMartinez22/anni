// Función para crear corazones flotantes
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    // Posición aleatoria dentro de la ventana visible
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = Math.random() * window.innerHeight + "px";

    // Eliminar el corazón después de 3 segundos
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Crear corazones cada 500ms
setInterval(createHeart, 500);

// Galería de imágenes interactiva
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const images = [
        "img/ft1.png", "img/ft2.png", "img/ft3.png", "img/ft4.png", "img/ft5.png", "img/ft6.png",
        "img/ft7.png", "img/ft8.png", "img/ft9.png", "img/ft10.png", "img/ft11.png", "img/ft12.png",
        "img/ft13.png", "img/ft14.png", "img/ft15.png", "img/ft16.png"
    ];

    // Tamaño del bloque de imágenes (6 imágenes por fila)
    const chunkSize = 6;

    // Dividir las imágenes en bloques de 6
    for (let i = 0; i < images.length; i += chunkSize) {
        // Obtener un bloque de 6 imágenes
        const chunk = images.slice(i, i + chunkSize);

        // Crear una fila para el bloque de imágenes
        const row = document.createElement("div");
        row.classList.add("gallery-row");

        // Agregar las imágenes al bloque
        chunk.forEach((src) => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Foto juntos";
            img.onclick = () => openLightbox(src);
            row.appendChild(img);
        });

        // Agregar la fila a la galería
        gallery.appendChild(row);
    }

    // Manejar la reproducción de música
    const backgroundMusic = document.getElementById("background-music");
    const playMusicBtn = document.getElementById("play-music-btn");
    const playIcon = document.getElementById("play-icon");

    if (backgroundMusic && playMusicBtn) {
        // Intentar reproducir automáticamente
        backgroundMusic.play().catch(() => {
            console.log("La reproducción automática fue bloqueada por el navegador.");
        });

        // Cambiar el ícono y el texto del botón al reproducir/pausar
        playMusicBtn.addEventListener("click", () => {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
                playIcon.textContent = "⏸️";
                playMusicBtn.innerHTML = `<span id="play-icon">⏸️</span> Pausar Música`;
            } else {
                backgroundMusic.pause();
                playIcon.textContent = "▶️";
                playMusicBtn.innerHTML = `<span id="play-icon">▶️</span> Reproducir Música`;
            }
        });
    }
});

// Abrir lightbox
function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    if (lightbox && lightboxImg) {
        lightbox.style.display = "flex";
        lightboxImg.src = src;
    }
}

// Cerrar lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

// Cerrar lightbox al hacer clic fuera de la imagen
const lightbox = document.getElementById("lightbox");
if (lightbox) {
    lightbox.onclick = function(event) {
        if (event.target === this) {
            closeLightbox();
        }
    };
}