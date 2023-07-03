import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');

  const [filterCompleted, setFilterCompleted] = useState(false);
//na alteração do formulario newTask vai ter o valor do input do formulario (event.target.value)
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
//se o valor de newTask nao for nulo, criará uma constante que terá um objeto com id aleatorio e com um titulo de valor de newTask,
//mudará o valor de tasks para o valor antigo mais o valor de dessa varivael e depois setará o valor de setNewTask para nulo,
// para apagar o input
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: Math.random().toString(),
        title: newTask
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };


  return (
    <div>
      <h2>ToDoList</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
     
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;