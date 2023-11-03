import { Outlet, Navigate } from "react-router-dom";
import sideimage from '../../public/assets/images/side-img.svg';
const AuthLayout = () => {
  const isAuthonticated = false;
  return (
    <>
      {isAuthonticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img src={sideimage} alt="logo" className="xl-block h-screen w-1/2 object-cover bg-no-repeat" />
        </>
      )}
    </>
  );
};

export default AuthLayout;
