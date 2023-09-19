import React from "react";
import { Task } from "./reusable/Task";

export const List = ({tasks,handleDelete,handleCheckBox}) => {
  return (
    <div className="container">
      <p className="text-center fs-3 mb-3">Let's get some work done</p>
      <div className="tasks-list text-start">
        {tasks.map((task, idx) => (
          <Task
            handleDelete={() => handleDelete(task.id)}
            handleCheckBox={handleCheckBox}
            key={idx}
           task={task}
          />
        ))}
      </div>
    </div>
  );
};
