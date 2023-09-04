const meuVideo = document.getElementById("meuVideo");

    // Função para recarregar o vídeo
    function recarregarVideo() {
        meuVideo.load(); // Recarrega o vídeo
        meuVideo.play(); // Inicia a reprodução novamente
    }

    // Adicione um ouvinte de evento para quando a página for recarregada
    window.addEventListener("load", recarregarVideo);