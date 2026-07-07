// import do Array de objetos
import alunos from './utils/alunos.js'

// Função para adicionar um novo aluno
const adicionarAluno = (nome, notas) => {
  alunos.push({
    nome,
    notas,
  });
};

// Função para calcular a média
const calcularMedia = (notas) => {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
};

// Adicionando novos alunos
adicionarAluno("Laura Pereira", [4, 2.0, 1.4, 3.2]);
adicionarAluno("Maria", [6, 6.3, 8, 7.6]);

// Exibindo todos os alunos com suas médias
console.log("=== LISTA DE ALUNOS ===");

alunos.forEach((aluno) => {
  const media = calcularMedia(aluno.notas);

  console.log(`Nome: ${aluno.nome}`);
  console.log(`Notas: ${aluno.notas.join(", ")}`);
  console.log(`Média: ${media.toFixed(2)}`);
  console.log(" ");
});

// Filtrando alunos aprovados
console.log("=== ALUNOS APROVADOS ===");

const aprovados = alunos.filter((aluno) => calcularMedia(aluno.notas) >= 7);

aprovados.forEach((aluno) => {
  console.log(
    `${aluno.nome} - Média: ${calcularMedia(aluno.notas).toFixed(2)}`,
  );
});

console.log(" ");

// Imprimindo a situação de todos os alunos
console.log("=== SITUAÇÃO DOS ALUNOS ===");
alunos.forEach((aluno) => {
  const media = calcularMedia(aluno.notas);
  const situacao = media >= 7 ? "Aprovado" : "Reprovado";
  console.log(
    `${aluno.nome} - Média: ${media.toFixed(2)} - Situação: ${situacao}`,
  );
});

console.table(
    alunos.map(aluno => ({
        Nome: aluno.nome,
        Notas: aluno.notas.join(", "),
        Média: calcularMedia(aluno.notas).toFixed(2),
        Situação: calcularMedia(aluno.notas) >= 7 ? "Aprovado" : "Reprovado"
    }))
);