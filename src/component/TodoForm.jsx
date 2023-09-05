import React, { useState } from "react";
import Button from "./Button";

const TodoForm = ({ onSubmit }) => {
  // onSubmit là hàm từ cha truyền xuống thằng con
  const [title, setTitle] = useState("");

  const handelChange = (e) => {
    setTitle(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault(); // ngăn tải lại trang
    onSubmit(title); // nhận hàm từ cha truyền xuống tham số title(giá trị use nhập) 
    setTitle(""); // đặt lại value input là rỗng sau khi mình creat
  };
  return (
    <form action="" className="todo-list flex gap m-b" onSubmit={handelSubmit}>
      <input
        type="text"
        value={title}
        onChange={handelChange}
        className="todo-input p-d-input outline boder flex-1"
        placeholder="What do you want to do?"
      ></input>
      <Button variant="primary">Create</Button>
    </form>
  );
};

export default TodoForm;
