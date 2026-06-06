import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

//ADD TASK

  const handleAddTask = async (taskData) => {
    try {
      const newTask = await createTask(taskData);

      setTasks((prevTasks) => [newTask, ...prevTasks]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  //DELETE TASK

 const handleDeleteTask = async (id) => {
    const confirmed = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmed) return;

  try {
    await deleteTask(id);

    setTasks((prevTasks) =>
      prevTasks.filter((task) => task._id !== id)
    );
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};

//TOGGLE TASK
 
const handleToggleTask = async (id) => {
  try {
    const task = tasks.find((task) => task._id === id);

    const updatedTask = await updateTask(id, {
      completed: !task.completed,
    });

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id ? updatedTask : task
      )
    );
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

//EDIT TASKS
const handleEditTask = (task) => {
  setEditingTask(task);
};

//UPDATE TASKS
const handleUpdateTask = async (id, updatedData) => {
  try {
    const updatedTask = await updateTask(id, updatedData);

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === id ? updatedTask : task
      )
    );

    setEditingTask(null);
  } catch (error) {
    console.error("Error updating task:", error);
  }
};

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Task Manager</h1>
      <TaskForm onAddTask={handleAddTask}
      editingTask={editingTask} 
      onUpdateTask={handleUpdateTask} />
      
      <TaskList
        tasks={tasks}
        ondeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
        onEditTask={handleEditTask}
        onUpdateTask={handleUpdateTask}


      />
    </div>
  );
}

export default App;