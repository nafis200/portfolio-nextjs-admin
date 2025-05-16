import Register from "@/components/register/Register";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
  description: "Portfolio Login Page",
};

const RegisterPages = () => {
    return (
        <div>
            <Register/>
        </div>
    );
};

export default RegisterPages;