import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Settings from "./pages/Settings.jsx";
import Users from "./pages/Users.jsx";
import Account from "./pages/Account.jsx";

function App() {
  return (
    // GlobalStyles are in the main.jsx file
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to={"dashboard"} />} />
        <Route path={"dashboard"} element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="login" element={<Login />} />
        <Route path="users" element={<Users />} />
        <Route path="setting" element={<Settings />} />
        <Route path="account" element={<Account />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
