      /*
       * JavaScript da landing page Clima & Elétrica
       * - Atualiza o ano do rodapé.
       * - Valida o formulário de orçamento.
       * - Abre o WhatsApp com a mensagem preenchida, após configurar o número.
       */
      const WHATSAPP_NUMBER = ""; // Informe país + DDD + número, somente dígitos.
      const SERVICE_AREA = "Cidade/região a informar";

      document.addEventListener("DOMContentLoaded", () => {
        const year = document.getElementById("year");
        const serviceArea = document.getElementById("serviceAreaDisplay");
        const form = document.getElementById("quoteForm");
        const floatWhatsApp = document.getElementById("floatWhatsApp");

        if (year) year.textContent = new Date().getFullYear();
        if (serviceArea) serviceArea.textContent = SERVICE_AREA;

        const validWhatsApp = () => /^\\d{12,13}$/.test(WHATSAPP_NUMBER);

        const openWhatsApp = (message) => {
          if (!validWhatsApp()) {
            alert(
              "O WhatsApp comercial ainda não foi configurado. Edite WHATSAPP_NUMBER no JavaScript e informe o número com país, DDD e telefone.",
            );
            return;
          }
          const url =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(message);
          window.open(url, "_blank", "noopener,noreferrer");
        };

        if (form) {
          form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value.trim();

            if (!name || !service) {
              alert("Preencha seu nome e selecione o serviço desejado.");
              return;
            }

            const whatsappMessage =
              `Olá! Meu nome é ${name} e gostaria de solicitar um orçamento para ${service}.` +
              (message ? ` Detalhes do serviço: ${message}` : "");

            openWhatsApp(whatsappMessage);
          });
        }

        if (floatWhatsApp) {
          floatWhatsApp.addEventListener("click", (event) => {
            event.preventDefault();
            openWhatsApp(
              "Olá! Gostaria de solicitar um orçamento para ar-condicionado ou serviços elétricos.",
            );
          });
        }
      });
    
