import { TrashIcon } from "@heroicons/react/24/solid";
import { MouseEvent, MouseEventHandler } from "react";

export type TaskTypes = {
  onDelete: (id: string) => void;
  id: string;
  description: string;
  priority: number;
};

const Task = (props: TaskTypes) => {
  const deleteTask = (id: string) => {
    props.onDelete(id);
  };
  return (
    <div
      className={`card w-full ${
        props.priority === 0
          ? "bg-success"
          : props.priority === 1
          ? "bg-warning"
          : "bg-error"
      } text-primary-content bg-gradient-to-r from-${
        props.priority === 0
          ? "bg-success"
          : props.priority === 1
          ? "bg-warning"
          : "bg-error"
      } to-base-100`}
    >
      <div className="card-body">
        <div
          className={`badge shadow-lg badge-${
            props.priority === 0
              ? "bg-success"
              : props.priority === 1
              ? "bg-warning"
              : "bg-error"
          }  gap-2 self-end`}
        >
          {props.priority === 0
            ? "Low Priority"
            : props.priority === 1
            ? "Medium Priority"
            : "High Priority"}
        </div>
        <p>{props.description}</p>
        <button
          className="card-actions justify-end w-6 self-end"
          onClick={deleteTask.bind(this, props.id)}
        >
          <TrashIcon className="w-6 h-6 text-error" />
        </button>
      </div>
    </div>
  );
};

export default Task;
