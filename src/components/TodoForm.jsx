import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;

    // limpar campos
    addTodo(value, category);
    setValue("");
    setCategory("");
    // adicionar todo
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa: </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudo">Estudo</option>
        </select>
        <button>Criar Tarefa </button>
      </form>
    </div>
  );
};

export default TodoForm;
