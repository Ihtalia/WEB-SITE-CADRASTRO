document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    var id = document.getElementById('id');
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var telefone = document.getElementById('telefone');
    var confirma_senha = document.getElementById('confirma_senha');

    // Função para verificar se todos os campos estão preenchidos
    function verificarCampos() {
        if (!id.value ||!email.value ||!senha.value ||!telefone.value ||!confirma_senha.value) {
            alert("Por favor, preencha todos os campos.");
            return false;
        }
        return true;
    }

    // Função para verificar se as senhas coincidem
    function verificarSenhas() {
        if (senha.value!== confirma_senha.value) {
            alert("As senhas não coincidem.");
            return false;
        }
        return true;
    }

    // Verifica se todos os campos estão preenchidos
    if (!verificarCampos()) return;

    // Verifica se as senhas coincidem
    if (!verificarSenhas()) return;

    // Exibe uma mensagem de sucesso com animação
    var alertaSucesso = document.createElement('div');
    alertaSucesso.textContent = "Usuário cadastrado com sucesso!";
    alertaSucesso.style.position = 'fixed';
    alertaSucesso.style.top = '50%';
    alertaSucesso.style.left = '50%';
    alertaSucesso.style.transform = 'translate(-50%, -50%)';
    alertaSucesso.style.backgroundColor = '#007BFF';
    alertaSucesso.style.color = 'white';
    alertaSucesso.style.padding = '10px';
    alertaSucesso.style.borderRadius = '5px';
    alertaSucesso.style.zIndex = '9999';
    document.body.appendChild(alertaSucesso);

    // Remove o alerta após 3 segundos
    setTimeout(function() {
        document.body.removeChild(alertaSucesso);
    }, 3000);
});

// Adiciona animação de foco aos campos
var campos = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="tel"]');
campos.forEach(function(campo) {
    campo.addEventListener('focus', function() {
        this.style.borderColor = '#007BFF';
        this.style.boxShadow = '0 0 0 0.2rem rgba(0,123,255,.25)';
    });
    campo.addEventListener('blur', function() {
        this.style.borderColor = '#ddd';
        this.style.boxShadow = 'none';
    });
});
