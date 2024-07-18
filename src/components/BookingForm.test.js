import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the Date Label", () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("Time input is disabled at first", () => {
  render(<BookingForm />);
  const timeInputElement = screen.getByTestId("res-time");
  expect(timeInputElement).toHaveAttribute("disabled");
});

test("Date input has no value at first", () => {
  render(<BookingForm />);
  const dateInputElement = screen.getByTestId("res-date");
  expect(dateInputElement).toHaveValue("");
});
