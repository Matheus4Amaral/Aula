const Tasks = ({ tasks, onDeleteTasksClick, onCompleteTasksClick }) => {
  return (
    <div
      className="tasks"
      style={{ textDecoration: tasks.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{tasks.text}</p>
        <p className="category">({tasks.category})</p>
      </div>

      <div>
        <button
          className={`complete ${tasks.isCompleted === true && "remaker"}`}
          onClick={() => onCompleteTasksClick(tasks.id)}
        >
          {tasks.isCompleted === true ? "Refazer Tarefa" : "Completar"}
        </button>
        <button className="remove" onClick={() => onDeleteTasksClick(tasks.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Tasks;
