document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.querySelector(".header__scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  
    window.onscroll = function () {
      // Mostrar ou ocultar o botão com base no scroll
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };
  
    // Adicionar evento de clique para rolar para o topo
    scrollToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0; // Para navegadores mais antigos
      document.documentElement.scrollTop = 0; // Para navegadores modernos
    });
  });