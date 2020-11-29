import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//#region components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";
//#endregion

//#region pages
import Photo from "./Pages/Photo";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Conta from "./Pages/Conta";
//#endregion

import { UserStorage } from "./Contexts/UserContext";

export default function Router() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <ProtectedRoute path="conta/*" element={<Conta />} />
          <Route path="foto/:id" element={<Photo />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}
