function showAlert(text) {
	alert(text);
}
//Services page
/* Animação toggle nos tópicos */
//Seleciona os botões e os textos dos serviços
const toggleButtons = document.querySelectorAll("[id^=toggle_]");
const serviceTexts = document.querySelectorAll("[id^=serviceText_]");


 main
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

function validarFormulario() {
    var email = document.getElementById('email').value;
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var dataNascimento = document.getElementById('data_nascimento').value;
    var endereco = document.getElementById('endereco').value;
    var cep = document.getElementById('cep').value;
    var rg = document.getElementById('rg').value;
    var cpf = document.getElementById('cpf').value;
    var telefone = document.getElementById('telefone').value;
    var celular = document.getElementById('celular').value;

    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        document.getElementById('erroEmail').style.display = 'block';
        return false;
    } else {
        document.getElementById('erroEmail').style.display = 'none';
    }

    if (nome.trim() === '') {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }
    if (sobrenome.trim() === '') {
        alert('Por favor, preencha o campo Sobrenome.');
        return false;
    }
    if (dataNascimento.trim() === '') {
        alert('Por favor, selecione a Data de Nascimento.');
        return false;
    }
    if (endereco.trim() === '') {
        alert('Por favor, preencha o campo Endereço.');
        return false;
    }
    if (cep.trim() === '') {
        alert('Por favor, preencha o campo CEP.');
        return false;
    }
    if (rg.trim() === '') {
        alert('Por favor, preencha o campo RG.');
        return false;
    }
    if (cpf.trim() === '') {
        alert('Por favor, preencha o campo CPF.');
        return false;
    }
    if (telefone.trim() === '' && celular.trim() === '') {
        alert('Por favor, preencha ao menos um número de telefone.');
        return false;
    }

    document.getElementById('formulario').submit();
    alert('Formulário enviado com sucesso!');
}
function validar() {
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    // Validação do usuário (email)
    var regexUser = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexUser.test(user)) {
        document.getElementById('erroUser').style.display = 'block';
        return false;
    } else {
        document.getElementById('erroUser').style.display = 'none';
    }

    // Validação da senha
    if (password.length < 6) {
        document.getElementById('erroSenha').style.display = 'block';
        return false;
    } else {
        document.getElementById('erroSenha').style.display = 'none';
    }

    // Se todas as validações passarem, o formulário pode ser enviado
    return true;
}
