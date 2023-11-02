import AuthLayout from "./_auth/AuthLayout";
import Signinform from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";

import { Home } from "./_root/Pages";
import RootLayout from "./_root/RootLayout";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public route */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<Signinform />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        {/* Private route */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
