import { Metadata } from "next";
import Login from "@/components/login/Login";

export const metadata: Metadata = {
  title: "Login Page",
  description: "Portfolio Login Page",
};

const LoginPage = () => {
  return (
    <div>
       <Login/>
    </div>
  );
};

export default LoginPage;
