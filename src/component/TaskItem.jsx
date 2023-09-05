import React from "react";
import Button from "./Button";
// import * as ai from "react-icons/ai";

const TaskItem = ({ id, title, completed, onToggle }) => {
  const handelChange = () => {
    onToggle(id);
  };
  return (
    <li className="task-item p-d m-b boder-item">
      <label>
        <input type="checkbox" checked={completed} onChange={handelChange} />
        <span className="task-title">{title}</span>
        {/* <Button>
            <ai.AiOutlineDelete />
        </Button> */}
      </label>
    </li>
  );
};

export default TaskItem;
