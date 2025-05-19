// src/components/TaskForm.jsx
import React, { useState } from "react";

const daysOptions = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
const subjectOptions = ["Matemática", "História", "Português", "Física"];

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [days, setDays] = useState([]);
  const [subject, setSubject] = useState("");

  const handleDayChange = (day) => {
    if (days.includes(day)) {
      setDays(days.filter((d) => d !== day));
    } else {
      setDays([...days, day]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !subject || days.length === 0) {
      alert("Por favor, preencha título, escolha pelo menos um dia e selecione uma matéria.");
      return;
    }

    onAdd({
      title,
      description,
      days,
      subject,
      completed: false,
    });

    // Limpa o form
    setTitle("");
    setDescription("");
    setDays([]);
    setSubject("");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Descrição (opcional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className="days-checkboxes">
        <p>Escolha os dias da semana:</p>
        {daysOptions.map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              checked={days.includes(day)}
              onChange={() => handleDayChange(day)}
            />
            {day}
          </label>
        ))}
      </div>

      <div className="subject-select">
        <p>Escolha a matéria:</p>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">-- Selecione --</option>
          {subjectOptions.map((subj) => (
            <option key={subj} value={subj}>
              {subj}
            </option>
          ))}
        </select>
      </div>

      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default TaskForm;