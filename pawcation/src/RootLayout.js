import { Outlet } from "react-router-dom";

import NavbarComp  from "./Components/NavbarComp";

function RootLayout() {
  return (
    <>
      <NavbarComp />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
