import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../componanets/Navbar/Navbar";
import Auth from "../Pages/Auth/Auth";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Authcheck from "../AuthCheck/Authcheck";

const MainLayout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Authcheck>
                <Home />
              </Authcheck>
            }
          />
          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default MainLayout;
