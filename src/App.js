// React
import { useReducer, useState } from "react";
// React router
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// Pages
import BookingPage from "./pages/BookingPage";
import Homepage from "./pages/Homepage";
import MenuPage from "./pages/MenuPage";
import LoginPage from "./pages/LoginPage";
import ConfirmationPage from "./pages/ConfirmationPage";
// Components
import AppLayout from "./components/AppLayout";
// Utils
import { fetchAPI, submitAPI } from "../src/utils/helper";
// Styles
import "./App.css";

const initialState = {
  date: "",
  time: "",
  guests: "",
  occasion: ""
};

function bookingReducer(state, action) {
  switch (action.type) {
    case "change_date":
      return { ...state, date: action.payload };

    case "change_time":
      return { ...state, time: action.payload };

    case "change_guests":
      return { ...state, guests: action.payload };

    case "change_occasion":
      return { ...state, occasion: action.payload };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [confirmedBooking, setConfirmedBooking] = useState("");

  function initializeTimes(date) {
    const fetchAvailableTimes = fetchAPI(new Date(date));
    setAvailableTimes(fetchAvailableTimes);
  }

  function submitForm(newBooking) {
    const submitResponse = submitAPI(newBooking);
    console.log(newBooking);
    setConfirmedBooking(newBooking);
    return submitResponse;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='homepage' />}></Route>
          <Route path='homepage' element={<Homepage />}></Route>
          <Route
            path='booking'
            element={
              <BookingPage
                state={state}
                dispatch={dispatch}
                availableTimes={availableTimes}
                setAvailableTimes={setAvailableTimes}
                initializeTimes={initializeTimes}
                submitForm={submitForm}
              />
            }></Route>
          <Route
            path='confirmation'
            element={
              <ConfirmationPage confirmedBooking={confirmedBooking} />
            }></Route>
          <Route path='menu' element={<MenuPage />}></Route>
          <Route path='login' element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
