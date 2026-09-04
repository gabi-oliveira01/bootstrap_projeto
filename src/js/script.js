document.addEventListener("DOMContentLoaded", () => {
  const modalAdocao = document.getElementById("modalAdocao");
  const formAdocao = document.getElementById("formAdocao");

  // 1. Atualiza dinamicamente o título do Modal com o nome do pet clicado
  if (modalAdocao) {
    modalAdocao.addEventListener("show.bs.modal", (event) => {
      const button = event.relatedTarget;
      const petName = button.getAttribute("data-pet-name") || "este pet";
      const modalTitle = modalAdocao.querySelector(".modal-title");

      modalTitle.textContent = `Formulário de Adoção: ${petName}`;
    });
  }

  // 2. Manipula o envio do formulário com feedback e fechamento do modal
  if (formAdocao) {
    formAdocao.addEventListener("submit", (event) => {
      event.preventDefault();

      // Mensagem de confirmação para o usuário
      alert(
        "Recebemos sua solicitação com sucesso! Entraremos em contato via WhatsApp em breve.",
      );

      // Limpa os campos do formulário
      formAdocao.reset();

      // Fecha o modal via API do Bootstrap
      const modalInstance = bootstrap.Modal.getInstance(modalAdocao);
      if (modalInstance) {
        modalInstance.hide();
      }
    });
  }
});
