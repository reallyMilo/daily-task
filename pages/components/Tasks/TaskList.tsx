import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Container from "../UI/Container";
import Grid from "../UI/Grid";
import Task, { TaskTypes } from "./Task";

const TaskList = (props: { Tasks: TaskTypes[] }) => {
  if (props.Tasks.length === 0) {
    return (
      <Container className="mt-9 flex gap-3 items-center">
        <InformationCircleIcon className="w-6 h-6 inline-block" />
        <h2 className="inline-block text-2xl">
          Nothing to do yet. Set Some Tasks!
        </h2>
      </Container>
    );
  }

  return (
    <Container className="mt-9">
      <Grid>
        {props.Tasks.map((task) => {
          return (
            <Task
              id={task.id}
              key={task.id}
              description={task.description}
              priority={task.priority}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default TaskList;
