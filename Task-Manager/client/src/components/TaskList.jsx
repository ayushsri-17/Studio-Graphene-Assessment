import "../App.css";

export default function TaskList({ tasks, ondeleteTask, onToggleTask, onEditTask }) {
  return (
    <div className="container">
      <h2 className="title">Tasks</h2>

      {tasks.length === 0 ? (
        <p className="emptyMessage">No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="taskCard">
            <h3 className="taskTitle">{task.title}</h3>

            <p className="taskDescription">{task.description}</p>  

            {task.dueDate && (
              <p className="taskDate">
                <strong>Due Date:</strong>{" "}
                {new Date(task.dueDate).toLocaleDateString()}
              </p>
            )}

            <p className="taskStatus">
              <strong>Status:</strong>{" "}
              {task.completed ? "✅ Completed" : "⏳ Active"}
            </p>
            <button className="deleteButton" onClick={() => ondeleteTask(task._id)}>
             Delete
            </button>
            <button 
              className={`toggleButton ${task.completed ? 'activeState' : 'completeState'}`}
              onClick={() => onToggleTask(task._id)}
            >
              {task.completed ? "Mark Active" : "Mark Complete"}
            </button>
            <button className="editButton" onClick={() => onEditTask(task)}>
              Edit
            </button>
           
          </div>
        )) 
      )}
    </div>
  );
}