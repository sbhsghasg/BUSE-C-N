function konfetiPatlat() {
    var duration = 10 * 1000; // 10 saniye
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 10,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 10,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

// Sayfa yüklendiğinde otomatik konfeti patlat
window.onload = konfetiPatlat;
