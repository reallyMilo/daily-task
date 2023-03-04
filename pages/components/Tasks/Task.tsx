import { TrashIcon } from "@heroicons/react/24/solid";
import { MouseEvent, MouseEventHandler } from "react";

export type TaskTypes = {
  id: string;
  description: string;
  priority: number;
};

const Task = (props: TaskTypes) => {
  return (
    <div className="card w-full bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{props.description}</h2>
        <button className="card-actions justify-end">
          <TrashIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Task;
