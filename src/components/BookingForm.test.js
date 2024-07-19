// React testing
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
// React router
import { MemoryRouter } from "react-router-dom";
// Components
import BookingForm from "./BookingForm";
// Utils
import { getToday } from "../utils/helper";

// Mock functions
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();
const mockInitializeTimes = jest.fn();
const mockSetAvailableTimes = jest.fn();

const initialState = {
  date: "",
  time: "",
  guests: "",
  occasion: ""
};

const availableTimes = ["18:00", "19:00", "20:00"];

const renderBookingForm = (state = initialState) =>
  render(
    <MemoryRouter>
      <BookingForm
        state={state}
        dispatch={mockDispatch}
        availableTimes={availableTimes}
        setAvailableTimes={mockSetAvailableTimes}
        initializeTimes={mockInitializeTimes}
        submitForm={mockSubmitForm}
      />
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

test("Shows error message when date is not provided", () => {
  renderBookingForm();
  fireEvent.click(screen.getByText("Make Your Reservation"));
  const errorMessage = screen.getByText("Date is required.");
  expect(errorMessage).toBeInTheDocument();
});

test("Shows error message when time is not provided", () => {
  renderBookingForm({ ...initialState, date: getToday() });
  fireEvent.change(screen.getByTestId("res-date"), {
    target: { value: getToday() }
  });
  fireEvent.click(screen.getByText("Make Your Reservation"));
  const errorMessage = screen.getByText("Time is required.");
  expect(errorMessage).toBeInTheDocument();
});

test("Shows error message when guests are out of range", () => {
  renderBookingForm({ ...initialState, date: getToday(), time: "18:00" });
  fireEvent.change(screen.getByTestId("res-date"), {
    target: { value: getToday() }
  });
  fireEvent.change(screen.getByTestId("res-time"), {
    target: { value: "18:00" }
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "0" }
  });
  fireEvent.click(screen.getByText("Make Your Reservation"));
  const errorMessage = screen.getByText(
    "Number of guests must be between 1 and 10."
  );
  expect(errorMessage).toBeInTheDocument();
});

test("Shows error message when occasion is not provided", () => {
  renderBookingForm({
    ...initialState,
    date: getToday(),
    time: "18:00",
    guests: 2
  });
  fireEvent.change(screen.getByTestId("res-date"), {
    target: { value: getToday() }
  });
  fireEvent.change(screen.getByTestId("res-time"), {
    target: { value: "18:00" }
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "2" }
  });
  fireEvent.click(screen.getByText("Make Your Reservation"));
  const errorMessage = screen.getByText("Occasion is required.");
  expect(errorMessage).toBeInTheDocument();
});

test("Submits form with valid data", () => {
  mockSubmitForm.mockReturnValue(true);

  renderBookingForm({
    ...initialState,
    date: getToday(),
    time: "18:00",
    guests: 2,
    occasion: "birthday"
  });
  fireEvent.change(screen.getByTestId("res-date"), {
    target: { value: getToday() }
  });
  fireEvent.change(screen.getByTestId("res-time"), {
    target: { value: "18:00" }
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "2" }
  });
  fireEvent.change(screen.getByLabelText("Occasion"), {
    target: { value: "birthday" }
  });

  fireEvent.click(screen.getByText("Make Your Reservation"));

  expect(mockSubmitForm).toHaveBeenCalledWith({
    id: expect.any(String),
    date: getToday(),
    time: "18:00",
    numberOfGuests: 2,
    occasion: "birthday"
  });
  expect(mockDispatch).toHaveBeenCalledWith({ type: "reset" });
  expect(mockSetAvailableTimes).toHaveBeenCalledWith([]);
});

test("Initializes times when date is selected", () => {
  renderBookingForm();
  fireEvent.change(screen.getByTestId("res-date"), {
    target: { value: getToday() }
  });
  expect(mockInitializeTimes).toHaveBeenCalledWith(getToday());
});
