// Obtenha os modais
var loginModal = document.getElementById("loginModal");
var doacaoModal = document.getElementById("doacaoModal");

// Obtenha os botões que abrem os modais
var entrarButton = document.getElementById("entrarButton"); // Certifique-se de que esse ID está correto
var doarButton = document.getElementById("doarButton"); // Certifique-se de que esse ID está correto

// Obtenha os elementos <span> que fecham os modais
var closeButtons = document.getElementsByClassName("close");

// Quando o usuário clica nos botões, abra o respectivo modal
entrarButton.onclick = function() {
    loginModal.style.display = "block";
}

doarButton.onclick = function() {
    doacaoModal.style.display = "block";
    resetDoacaoModal(); // Reseta os campos do modal de doação
}

// Quando o usuário clica no <span> (x), feche o modal
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        loginModal.style.display = "none";
        doacaoModal.style.display = "none";
    }
}

// Quando o usuário clica fora do modal, feche-o
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == doacaoModal) {
        doacaoModal.style.display = "none";
    }
}

// Função para resetar os campos do modal de doação
function resetDoacaoModal() {
    // Desmarcar todos os inputs de rádio
    var doacaoRadios = doacaoModal.querySelectorAll('input[name="doacao"]');
    doacaoRadios.forEach(function(radio) {
        radio.checked = false;
    });

    // Limpar campo de valor "Outro"
    var outroValorInput = document.getElementById("outroValor");
    if (outroValorInput) {
        outroValorInput.value = '';
    }

    // Desmarcar todos os inputs de pagamento
    var pagamentoRadios = doacaoModal.querySelectorAll('input[name="pagamento"]');
    pagamentoRadios.forEach(function(radio) {
        radio.checked = false;
    });
}
let slideIndex = 0;
showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0; // Volta para o primeiro slide
    } else if (n < 0) {
        slideIndex = slides.length - 1; // Vai para o último slide
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Esconde todos os slides
    }

    slides[slideIndex].style.display = "block"; // Mostra o slide atual
    slides[slideIndex].classList.add("active"); // Adiciona a classe active ao slide atual
}
