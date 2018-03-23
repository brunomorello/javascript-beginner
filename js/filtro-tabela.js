//Script para filtrar pacientes da tabela
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {

	var pacientes = document.querySelectorAll(".paciente");

	if (this.value.length > 0) {

		for (var i = 0; i < pacientes.length; i++) {
			
			var paciente = pacientes[i];

			var tdPaciente = paciente.querySelector(".info-nome");
			var nomePaciente = tdPaciente.textContent;
			var regex = new RegExp(this.value, "i");

			// Usa o regex para verificar se o valor digitado pelo
			//    usuário existe em qualquer string da tabela
			if (regex.test(nomePaciente)) {

				console.log(regex);
				console.log(nomePaciente);

				paciente.classList.remove("invisivel");

			} else {

				paciente.classList.add("invisivel");
				
			}

		}

	} else {

		for (var i = 0; i < pacientes.length; i++) {
			
			var paciente = pacientes[i];
			paciente.classList.remove("invisivel");
		}

	}
});