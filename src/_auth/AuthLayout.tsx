import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const AuthLayout = () => {
  const isAuthonticated = false;
  return (
    <>
      {isAuthonticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
