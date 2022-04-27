import React, { useEffect } from "react";
import "@fontsource/pridi";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomeLayout from "./components/layouts/HomeLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AccountSettingPage from "./pages/AccountSetting";
import CuponSettingPage from "./pages/CuponSetting";
import IdeaDataPage from "./pages/IdeaData";
import LogicMessagePage from "./pages/LogicMessage";
import { MantineProvider } from "@mantine/core";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MantineProvider
      theme={{
        fontFamily: "Pridi, serif",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route onEnter={() => { window.location.reload()}} path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route
              path="/accountsetting/"
              element={<AccountSettingPage />}
            ></Route>
            <Route path="/cuponsetting/" element={<CuponSettingPage />}></Route>
            <Route path="/ideadata/" element={<IdeaDataPage />}></Route>
            <Route path="/logicmsg/" element={<LogicMessagePage />}></Route>
          </Route>
          <Route element={<HomeLayout />}>
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
