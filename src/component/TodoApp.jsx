import React, { useState } from "react";
import TodoForm from "./TodoForm";
import FilterForm from "./FilterForm";
import TaskList from "./TaskList";
import Button from "./Button";
/**
 * @typedef TodoAppProp
 * @returns
 */

const TodoApp = () => {
  const [filtervalue, setFiltervalue] = useState("all");
  const [tasks, setTasks] = useState([]); // Trạng thái khai báo ở đâu thì chỉ dùng được ở component đó

  const addTask = (title) => {
    // fun addTask nhận vào title
    const task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, task]); // ...task copy mảng đó ra, task là phần tử mới sẽ được thêm vào mảng
    // setTasks tạo ra mảng mới
  };
  const toggle = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const deleteTasks = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clear = () => {
    if (confirm("Are you sure you want to delete")) {
      setTasks([]);
    }
  };
  const handelFilterChange = (filtervalue) => {
    setFiltervalue(filtervalue);
  };
  const filterTasks = tasks.filter((task) =>
    filtervalue === "all"
      ? true
      : filtervalue === "done"
      ? task.completed
      : !task.completed
  );
  const pendingTask = tasks.filter((task) =>!task.completed).length;

  
  return (
    <div className="w mx-auto bg-white m-t p-d">
      <h1 className="text-center font m-b">Simple TodoApp</h1>
      <TodoForm onSubmit={addTask}></TodoForm>{" "}
      {/* callback EventProps Khi mà cha muốn lấy data từ con nó sẽ truyền một hàm callback */}
      <FilterForm
        filtervalue={filtervalue}
        onFilterChange={handelFilterChange}
      ></FilterForm>
      <TaskList onToggle={toggle} tasks={filterTasks}></TaskList>
      <div className="task-summary flex alian-center justi-center">
        <p className="task-summary-count">You have {pendingTask} pending task</p>

        <Button variant="danger" onClick={clear}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default TodoApp;
