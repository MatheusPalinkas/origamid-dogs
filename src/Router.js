import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//#region components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//#endregion

//#region pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
//#endregion

import { UserStorage } from "./Contexts/UserContext";

export default function Router() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}
