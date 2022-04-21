import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader/MainHeader";

const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <div className="max-w-screen-2xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-outline border-gray-200 rounded-lg h-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Layout;
