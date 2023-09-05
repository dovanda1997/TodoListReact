import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks = [], onToggle }) => {
  const isEmpty = tasks.length === 0;

  if (isEmpty)
    return (
      <ul className="task-list">
        <li className="task-empty">Nothing here</li>
      </ul>
    );

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} onToggle={onToggle}></TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
