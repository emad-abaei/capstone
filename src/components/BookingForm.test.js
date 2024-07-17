import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the Date Label", () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
