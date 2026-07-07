/*let nome = "Amaral";

function mostrarNome() {
    console.log(nome);
}

mostrarNome();*/




/*function teste() {
    let nome = "Santiago";
    console.log(nome);
}

teste();

//console.log(nome); // Erro*/




/*if (true) {
    const nome = "Tiago";
    console.log(nome);
}

console.log(nome); // Erro*/




const global = "Livre";
function teste() {
  const funcao = "Presa";
  if (true) {
    let bloco = "Escondida";
    console.log(bloco);
  }  
  console.log(funcao);
}

teste();

console.log(global);