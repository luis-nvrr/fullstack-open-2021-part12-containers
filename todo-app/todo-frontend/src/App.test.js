import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const SubmitButton = screen.getByText(/Submit/i);
  expect(SubmitButton).toBeInTheDocument();
});
