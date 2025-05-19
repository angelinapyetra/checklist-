// src/components/TaskList.jsx
import React from "react";

function TaskList({ tasks, onToggle, onRemove }) {
  if (tasks.length === 0) return <p>Nenhuma tarefa para mostrar.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? "completed" : ""}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p><strong>Dias:</strong> {task.days.join(", ")}</p>
          <p><strong>Matéria:</strong> {task.subject}</p>

          <button onClick={() => onToggle(index)}>
            {task.completed ? "Desmarcar" : "Concluir"}
          </button>
          <button className="remove-btn" onClick={() => onRemove(index)}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
