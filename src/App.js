import React, { useState } from "react";
import Home from "./components/Home/Home";
import Layout from "./components/layouts/layout";
import Login from "./components/Login/Login";
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (userData) => {
    console.log(userData);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <React.Fragment>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && (
          <Layout>
            <Home onLogout={logoutHandler} />
          </Layout>
        )}
      </main>
    </React.Fragment>
  );
}
