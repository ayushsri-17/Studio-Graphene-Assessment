import { useState, useEffect } from "react";

const TaskForm = ({ onAddTask, editingTask, onUpdateTask,  }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!title.trim()) {
    alert("Title is required");
    return;
  }

  const taskData = {
    title,
    description,
    dueDate,
  };

  if (editingTask) {
    onUpdateTask(editingTask._id, taskData);
  } else {
    onAddTask(taskData);
  }

  setTitle("");
  setDescription("");
  setDueDate("");
};


  useEffect(() => {
  if (editingTask) {
    setTitle(editingTask.title);
    setDescription(editingTask.description || "");
    setDueDate(
      editingTask.dueDate
        ? editingTask.dueDate.split("T")[0]
        : ""
    );
  }
}, [editingTask]);

  return (
    <form onSubmit={handleSubmit} className="taskForm">
    <h3 className="formTitle">{editingTask? "Edit Task": "Create New Task"}</h3>      
      <div className="formGroup">
        <label className="formLabel">Task Title</label>
        <input
          type="text"
          className="formInput"
          placeholder="e.g., Design landing page"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="formGroup">
        <label className="formLabel">Description</label>
        <textarea
          className="formInput formTextarea"
          placeholder="Add details about this task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="formGroup">
        <label className="formLabel">Due Date</label>
        <input
          type="date"
          className="formInput"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

     <button 
        type="submit" 
        className={`formButton ${editingTask ? 'updateVariant' : 'addVariant'}`}
      >
        {editingTask ? "Update Task" : "Add Task"}
      </button>
     </form>
  );
};

export default TaskForm;