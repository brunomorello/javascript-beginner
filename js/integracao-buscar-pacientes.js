
//Script responsável por fazer uma conexão assincrona em um endpoint para obter uma lista de pacientes

var btnAdicionarPacientes = document.querySelector("#buscar-pacientes");

btnAdicionarPacientes.addEventListener("click", function () {

	var xhr = new XMLHttpRequest();
	var endPoint = "https://api-pacientes.herokuapp.com/pacientes";

	// abrindo a conexao e configurando o tipo de requisicao - GET
	xhr.open("GET", endPoint);
	xhr.send();

	xhr.addEventListener("load", function () {

		var erroAjax = document.querySelector("#erro-ajax");

		if (xhr.status == 200) {

			erroAjax.classList.add("invisivel");

			// resposta em texto da requisicao
			var xhrResponse = xhr.responseText;

			//convertendo a resposta da requisicao de String para um Array de Objetos - JSON
			var pacientes = JSON.parse(xhrResponse);

			pacientes.forEach(function (paciente) {
				adicionaPacienteNaTabela(paciente);
			});

		} else {
			erroAjax.classList.remove("invisivel");
		}


	});

});