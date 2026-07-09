function ListaTarefas() {
  const tarefas = [
    "Estudar React",
    "Fazer exercícios",
    "Assistir aula",
    "Treinar JavaScript",
  ];

  return (
    <>
      <h2>Lista de Tarefas</h2>

      <ul>
        {
          tarefas.map((tarefa, index) => (
            <li key={index}>{tarefa}</li>
          ))
        }
      </ul>
    </>
  );
}

export default ListaTarefas;