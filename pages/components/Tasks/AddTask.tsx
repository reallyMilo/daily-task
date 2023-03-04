import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskTypes } from "./Task";
const AddTask = (props) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(0);
  const [validTask, setValidTask] = useState(false);

  const taskDescriptionHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTask(event.target.value);
  };
  const taskPriorityHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(Number(event.target.id));
  };

  useEffect(() => {
    const taskCheck = setTimeout(() => {
      if (task.trim().length > 0 && priority >= 0 && priority <= 2) {
        setValidTask(true);
      } else {
        setValidTask(false);
      }
    }, 200);

    return () => {
      clearTimeout(taskCheck);
    };
  }, [task, priority]);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const TaskData: TaskTypes = {
      id: uuidv4(),
      description: task,
      priority: priority,
    };
    props.onAddTask(TaskData);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="task-description">Task</label>
      <textarea
        name="task-description"
        className="textarea textarea-primary w-full my-4"
        placeholder="Description"
        onChange={taskDescriptionHandler}
      ></textarea>
      <label htmlFor="task-priority">Task Priority</label>
      <div className="flex gap-5 my-4">
        <div className="flex gap-2">
          <label htmlFor="task-priority">Low</label>
          <input
            id="0"
            type="radio"
            name="task-priority"
            className="toggle toggle-success"
            onChange={taskPriorityHandler}
            defaultChecked
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="task-priority">Medium</label>
          <input
            id="1"
            type="radio"
            name="task-priority"
            className="toggle toggle-warning"
            onChange={taskPriorityHandler}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="task-priority">High</label>
          <input
            id="2"
            type="radio"
            name="task-priority"
            className="toggle toggle-error"
            onChange={taskPriorityHandler}
          />
        </div>
      </div>
      <button
        type="submit"
        className={`btn btn-primary my-4 ${validTask ? "" : "btn-disabled"}`}
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
