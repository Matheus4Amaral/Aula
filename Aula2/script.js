document.getElementById("cadastro").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("rNome").textContent = document.getElementById("nome").value;

    document.getElementById("rEmail").textContent = document.getElementById("email").value;

    document.getElementById("rTelefone").textContent = document.getElementById("telefone").value;

    document.getElementById("rCurso").textContent = document.getElementById("curso").value;

    document.getElementById("rSexo").textContent = document.querySelector('input[name="sexo"]:checked').value;

    let interesses = [];

    document.querySelectorAll(".check input:checked").forEach(function(item){
        interesses.push(item.value);
    });

    document.getElementById("rInteresses").textContent = interesses.join(", ");

    document.getElementById("rObs").textContent = document.getElementById("obs").value;

    document.getElementById("formulario").style.display = "none";

    document.getElementById("resultado").style.display = "block";

});

function voltar(){

    document.getElementById("resultado").style.display = "none";

    document.getElementById("formulario").style.display = "block";

    document.getElementById("cadastro").reset();

}