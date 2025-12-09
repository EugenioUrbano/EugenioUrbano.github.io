// Função para newsletter
document.addEventListener('DOMContentLoaded', function() {
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                alert('Obrigado por se inscrever na nossa newsletter!');
                this.reset();
            }
        });
    }

    // Formulário de contato
    const contactForm = document.querySelector('form');
    if (contactForm && contactForm.action.includes('contato')) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação básica
            const nome = document.getElementById('nome');
            const email = document.getElementById('email');
            const assunto = document.getElementById('assunto');
            const mensagem = document.getElementById('mensagem');
            
            if (!nome.value || !email.value || !assunto.value || !mensagem.value) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            
            // Simular envio
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }

    // Botão de busca
    const searchButton = document.querySelector('.btn-danger[type="submit"]');
    if (searchButton) {
        searchButton.addEventListener('click', function(e) {
            const searchInput = this.closest('form').querySelector('input[type="text"]');
            if (!searchInput.value.trim()) {
                e.preventDefault();
                alert('Digite algo para buscar.');
                searchInput.focus();
            }
        });
    }
});