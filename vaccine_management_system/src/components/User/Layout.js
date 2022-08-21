import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";


const Layout = () => {
  return <>
    <CssBaseline />
      <Header/>
    <Outlet />
  </>;
};

export default Layout;