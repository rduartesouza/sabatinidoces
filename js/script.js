// Adicione qualquer efeito adicional, se necessário
$(document).ready(function() {
    $('#musicPlayer')[0].volume = 0.5; // Ajusta o volume inicial
});

$(document).ready(function() {
    const player = $('#musicPlayer')[0];

    player.addEventListener('loadedmetadata', function() {
        const duration = player.duration;
        const randomStart = Math.random() * duration;
        player.currentTime = randomStart; // Define o tempo de início
        player.volume = 0.5; // Ajusta o volume inicial
        player.play(); // Tenta iniciar a reprodução
    });

    // Se o autoplay falhar, reinicia o áudio
    player.addEventListener('play', function() {
        if (player.paused) {
            player.play();
        }
    });
});


