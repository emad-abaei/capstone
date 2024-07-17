import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

test("Date input is changed", async () => {
  render(<BookingForm />);
  const dateInputElement = screen.getByTestId("res-date");

  fireEvent.change(dateInputElement, { target: { value: "2025-05-24" } });

  await waitFor(() => {
    expect(dateInputElement.value).toBe("2025-05-24");
  });
});
