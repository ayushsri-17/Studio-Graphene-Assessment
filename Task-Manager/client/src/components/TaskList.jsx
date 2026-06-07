import "../App.css";

export default function TaskList({
  tasks,
  onDeleteTask,
  onToggleTask,
  onEditTask,
}) {
  return (
    <div className="container">
      <h2 className="title">Tasks</h2>

      {tasks.length === 0 ? (
        <p className="emptyMessage">
          No tasks yet. Create your first task 🚀
        </p>
      ) : (
        tasks.map((task) => {
          const isOverdue =
            task.dueDate &&
            new Date(task.dueDate) < new Date() &&
            !task.completed;

          return (
            <div
              key={task._id}
              className={`taskCard ${isOverdue ? "overdue" : ""}`}
            >
              <h3 className="taskTitle">{task.title}</h3>

              {task.description && (
                <p className="taskDescription">
                  {task.description}
                </p>
              )}

              <p className="taskStatus">
                <strong>Status:</strong>{" "}
                {task.completed
                  ? "✅ Completed"
                  : "⏳ Active"}
              </p>

              {task.dueDate && (
                <p className="taskDate">
                  <strong>Due Date:</strong>{" "}
                  {new Date(
                    task.dueDate
                  ).toLocaleDateString()}
                </p>
              )}

              {isOverdue && (
                <p className="overdueText">
                  ⚠️ Overdue Task
                </p>
              )}

              <div className="taskActions">
                <button
                  className={`toggleButton ${
                    task.completed
                      ? "activeState"
                      : "completeState"
                  }`}
                  onClick={() =>
                    onToggleTask(task._id)
                  }
                >
                  {task.completed
                    ? "Mark Active"
                    : "Mark Complete"}
                </button>

                <button
                  className="editButton"
                  onClick={() =>
                    onEditTask(task)
                  }
                >
                  Edit
                </button>

                <button
                  className="deleteButton"
                  onClick={() =>
                    onDeleteTask(task._id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}