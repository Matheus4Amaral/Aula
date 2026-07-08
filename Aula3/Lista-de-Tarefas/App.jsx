import { useState } from "react";

import Tasks from "./components/Tasks";
import TasksForm from "./components/TasksForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

import DATA from "./utils/Data";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState(DATA);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const onAddTasksSubmit = (text, category) => {
    const newTasks = [
      {
        id: tasks.length + 1,
        text,
        category,
        isCompleted: false,
      },
    ];
    setTasks([...tasks, ...newTasks]);
  };

  const onCompleteTasksClick = (id) => {
    const newTasks = [...tasks];
    newTasks.map((tasks) =>
      tasks.id === id ? (tasks.isCompleted = !tasks.isCompleted) : tasks,
    );
    setTasks(newTasks);
  };

  const onDeleteTasksClick = (id) => {
    const newTasks = [...tasks];
    const filteredTasks = newTasks.filter((tasks) =>
      tasks.id != id ? tasks : null,
    );
    setTasks(filteredTasks);
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="tasks-list">
        {tasks
          .filter((tasks) =>
            filter === "All"
              ? true
              : filter === "Completed"
                ? tasks.isCompleted
                : !tasks.isCompleted,
          )
          .filter((tasks) =>
            tasks.text.toLowerCase().includes(search.toLowerCase()),
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text),
          )
          .map((tasks) => (
            <Tasks
              key={tasks.id}
              tasks={tasks}
              onDeleteTasksClick={onDeleteTasksClick}
              onCompleteTasksClick={onCompleteTasksClick}
            />
          ))}
      </div>

      <TasksForm onAddTasksSubmit={onAddTasksSubmit} />
    </div>
  );
}

export default App;
