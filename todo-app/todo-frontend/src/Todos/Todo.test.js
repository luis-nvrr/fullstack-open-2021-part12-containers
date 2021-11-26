import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Todo from "./Todo";

test("renders todo's text and it's done status", () => {
  const todo = {
    text: "Write code",
    done: true,
  };

  const component = render(<Todo todo={todo} />);

  const text = component.container.querySelector("#todo-text");
  const done = component.container.querySelector("#done");

  expect(`${text.textContent} ${done.textContent}`).toEqual(
    `${todo.text} This todo is done`
  );
});
