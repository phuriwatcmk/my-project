import React, { useState, useEffect, Fragment } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomeLayout from "./components/layouts/HomeLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AccountSettingPage from "./pages/AccountSetting";
import CuponSettingPage from "./pages/CuponSetting";
import IdeaDataPage from "./pages/IdeaData";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/accountsetting/" element={<AccountSettingPage />}></Route>
          <Route path="/cuponsetting/" element={<CuponSettingPage />}></Route>
          <Route path="/ideadata/" element={<IdeaDataPage />}></Route>

        </Route>
        <Route element={<HomeLayout />}>
          <Route path="/home" element={<Home />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
