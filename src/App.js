// React
import { useReducer } from "react";
// React router
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// Components
import AppLayout from "./components/AppLayout";
import BookingPage from "./pages/BookingPage";
import Homepage from "./pages/Homepage";
import MenuPage from "./pages/MenuPage";
import LoginPage from "./pages/LoginPage";
// Styles
import "./App.css";

const initialState = {
  date: "",
  time: "",
  guests: "1",
  occasion: "birthday"
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

const initializeTimes = [];

function updateTimes(state, action) {
  if (action.type === "update_times") {
    return [...state, action.payload];
  }

  return state;
}

function App() {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  const [stateTimes, dispatchTimes] = useReducer(updateTimes, initializeTimes);

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
                stateTimes={stateTimes}
                dispatchTimes={dispatchTimes}
              />
            }></Route>
          <Route path='menu' element={<MenuPage />}></Route>
          <Route path='login' element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
