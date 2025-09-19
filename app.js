(function() {
  emailjs.init("0tXlVPYzdd05PES_1"); // Public Key
})();

document.getElementById("questionarioReforma").addEventListener("submit", function(event) {
  event.preventDefault();

  // Agora usando um template separado para reforma
  emailjs .send( " service_vo4vkdf " , " template_f9rohrw " ) ;
    .then(function() {
      alert("✅ Questionário de reforma enviado com sucesso!");
    }, function(error) {
      alert("❌ Erro ao enviar. Verifique a configuração do EmailJS.");
      console.error(error);
    });
});
