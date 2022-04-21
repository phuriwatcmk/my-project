import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader/MainHeader";

const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Layout;
