import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import BookingPage from "./pages/BookingPage";
import Homepage from "./pages/Homepage";
import MenuPage from "./pages/MenuPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='homepage' />}></Route>
          <Route path='homepage' element={<Homepage />}></Route>
          <Route path='booking' element={<BookingPage />}></Route>
          <Route path='menu' element={<MenuPage />}></Route>
          <Route path='login' element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
