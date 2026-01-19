import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { useEffect } from "react";

const MainContent = styled.main`
  padding-top: 80px; /* Space for fixed navbar */
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
};

export default Layout;
