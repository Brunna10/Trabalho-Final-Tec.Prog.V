start();

var idNome = 0;
var idTel = 0;
var idEmail = 0;
var idDescricao = 0;

function start() {
    var buttonSave = document.getElementById('salvar');
    buttonSave.onclick = function () {
        saveLocalStorage();
    };

    var buttonCancel = document.getElementById('cancelar');
    buttonCancel.onclick = function () {
        cancel();
    };

    var buttonRegister = document.getElementById('cadastros');
    buttonRegister.onclick = function () {
        loadRegisters();
    }
}

function saveLocalStorage() {
    var inputName = document.getElementById('nome');
    var inputTel = document.getElementById('telefone');
    var inputEmail = document.getElementById('email');
    var inputDescricao = document.getElementById('descricao');

    if (inputName.value.trim() == '' || inputTel.value.trim() == '' ||
        inputEmail.value.trim() == '' || inputDescricao.value.trim() == ''){
        alert("Informe todos os campos.");
    } else {
        if (confirm("Deseja salvar?") == true) {
            localStorage.setItem('NOME_' + idNome.toString(), inputName.value);
            localStorage.setItem('TEL_' + idTel.toString(), inputTel.value);
            localStorage.setItem('EMAIL_' + + idEmail.toString(), inputEmail.value);
            localStorage.setItem('DESCRICAO_' + + idDescricao.toString(), inputDescricao.value);
            
            clearFields();

            alert("Dados salvos com sucesso.");

            idNome++;
            idTel++;
            idEmail++;
            idDescricao++;
        }
    }
}

function cancel() {
    if (confirm("Deseja cancelar?") == true) {
        alert("Operação cancelada.");
        clearFields();
    }
}

function clearFields() {
    var inputName = document.getElementById('nome');
    var inputTel = document.getElementById('telefone');
    var inputEmail = document.getElementById('email');
    var inputDescricao = document.getElementById('descricao');

    inputName.value = '';
    inputTel.value = '';
    inputEmail.value = '';
    inputDescricao.value = '';
}

function loadRegisters() {
    window.location.href = "html/registers.html"; //Abre nova pagina 
}