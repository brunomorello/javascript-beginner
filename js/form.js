
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    
    event.preventDefault();

    //obtendo o formulario
    var form = document.querySelector("#form-adiciona");

    //obtendo um Objeto Paciente a partir dos valores do formulario
    var paciente = getPacientfromForm(form);

    // verificar se existe algum erro nos dados do paciente
    var errors = validPacient(paciente);

    if (errors.length > 0) {
        showErrorMessages(errors);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var errorsLi = document.querySelector("#mensagens-erro");
    errorsLi.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {

    //obtendo a tr um paciente
    var pacienteTr = createTrForPacient(paciente);
    pacienteTr.classList.add("paciente");

    //inserindo a tr do Paciente na tbody
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function getPacientfromForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

function createTd(dado, classe) {

    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;

}

function createTrForPacient(paciente) {

    var tr = document.createElement("tr");

    tr.appendChild(createTd(paciente.nome, "info-nome"));
    tr.appendChild(createTd(paciente.peso, "info-peso"));
    tr.appendChild(createTd(paciente.altura, "info-altura"));
    tr.appendChild(createTd(paciente.gordura, "info-gordura"));
    tr.appendChild(createTd(paciente.imc, "info-imc"));

    return tr;

}

function validPacient(paciente) {

    var errors = [];

    if (paciente.nome.length == 0) errors.push("O Nome não pode ser em branco!");
    if (paciente.peso.length == 0) errors.push("O Peso não pode ser em branco!");
    if (paciente.altura.length == 0) errors.push("A Altura não pode ser em branco!");
    if (paciente.gordura.length == 0) errors.push("A Gordura não pode ser em branco!");
    if (paciente.imc.length == 0) errors.push("O IMC não pode ser em branco!");

    if (validaPeso(paciente.peso)) errors.push("O Peso é inválido!");
    if (validaAltura(paciente.altura)) errors.push("A Altura é inválida!");

    return errors;

}

function showErrorMessages(errors) {

    var ulErrors = document.querySelector("#mensagens-erro");
    ulErrors.innerHTML = "";

    errors.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ulErrors.appendChild(li);
    });

}