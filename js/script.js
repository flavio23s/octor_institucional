// You can add custom interactivity here, such as animations, event handling, etc.
console.log('Website loaded successfully');

// Função para lidar com o envio do formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Exibe o pop-up de sucesso
    document.getElementById('successPopup').style.display = 'block';

    // Limpa os campos do formulário
    document.getElementById('contactForm').reset();
});

// Função para exibir o popup com o título e a descrição
function showPopup(title) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-description").innerText = `Aqui vai a descrição do ${title}`;
    document.getElementById("popup").style.display = "flex"; // Mostra o popup
  }
  
  // Função para fechar o popup
  function closePopup() {
    document.getElementById("popup").style.display = "none"; // Esconde o popup
  }
  
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("navigation").classList.toggle("active");
});
