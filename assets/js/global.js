function showAlert(text) {
	alert(text);
}
//Services page
/* Animação toggle nos tópicos */
//Seleciona os botões e os textos dos serviços
const toggleButtons = document.querySelectorAll("[id^=toggle_]");
const serviceTexts = document.querySelectorAll("[id^=serviceText_]");


#TODO: JS sem ação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
