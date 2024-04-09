function showAlert(text) {
    alert(text);
}
//Services page
    /* Animação toggle nos tópicos */
    //Seleciona os botões e os textos dos serviços
    const toggleButtons = document.querySelectorAll('[id^=toggle_]');
    const serviceTexts = document.querySelectorAll('[id^=serviceText_]');

    // Adiciona evento de clique a cada botão
    toggleButtons.forEach((button, index) => {
        button.addEventListener('click', function () {
            // Verifica se o texto do serviço está visível
            if (serviceTexts[index].style.display === 'none') {
                // Se estiver invisível, torna-o visível
                serviceTexts[index].style.display = 'block';
            } else {
                // Caso contrário, torna-o invisível
                serviceTexts[index].style.display = 'none';
            }
        });
    });
