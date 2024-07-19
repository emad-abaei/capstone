import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

import React from "react";
import userEvent from "@testing-library/user-event";

const renderBookingForm = () =>
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );

test("Renders the Date Label", () => {
  renderBookingForm();
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("Time input is disabled at first", () => {
  renderBookingForm();
  const timeInputElement = screen.getByTestId("res-time");
  expect(timeInputElement).toHaveAttribute("disabled");
});

test("Date input has no value at first", () => {
  renderBookingForm();
  const dateInputElement = screen.getByTestId("res-date");
  expect(dateInputElement).toHaveValue("");
});
