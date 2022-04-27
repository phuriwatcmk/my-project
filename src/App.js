import React, { useEffect } from "react";
import "@fontsource/pridi";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { MantineProvider } from "@mantine/core";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomeLayout from "./components/layouts/HomeLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";

import CuponSettingPage from "./pages/CuponSetting";
import IdeaDataPage from "./pages/IdeaData";
import LogicMessagePage from "./pages/LogicMessage";
import SchoolManagePage from "./pages/SchoolManage";
import MemberManagePage from "./pages/MemberManage";
import EditIdeaPage from "./pages/EditIdea";
import SubschoolManagePage from "./pages/SubschoolManage";
import AdminManagePage from "./pages/AccountSetting";
import SchoolPage from './pages/SchoolPage';
import IdeaPage from "./pages/IdeaPage";
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
          <Route
            onEnter={() => {
              window.location.reload();
            }}
            path="/"
            element={<Login />}
          />
          <Route element={<Layout />}>
            <Route
              path="adminmanage"
              element={<AdminManagePage />}
            ></Route>
            <Route path="membermanage" element={<MemberManagePage />}></Route>
            <Route path="school" element={<SchoolManagePage />}>
              <Route path="schoolmanage" element={<SchoolPage />}></Route>
              <Route path="subschool" element={<SubschoolManagePage />}></Route>
            </Route>

            <Route path="cuponsetting" element={<CuponSettingPage />}></Route>

            <Route path="idea" element={<IdeaPage />}>
              <Route path="ideadata" element={<IdeaDataPage />}></Route>
              <Route path="editidea" element={<EditIdeaPage />}></Route>
            </Route>
            
            <Route path="logicmsg" element={<LogicMessagePage />}></Route>
          </Route>
          <Route element={<HomeLayout />}>
            <Route path="home" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
