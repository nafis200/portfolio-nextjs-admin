
"use server";

import { cookies } from "next/headers";

type LoginData = {
  email: string;
  password: string;
};

type LoginSuccessResponse = {
  success: true;
  message: string;
  data: {
    jwtPayload: {
      email: string;
      role: string;
    };
  };
};

type LoginErrorResponse = {
  success: false;
  message: string;
};

export type LoginResponse = LoginSuccessResponse | LoginErrorResponse;

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      const { email, role } = result.data.jwtPayload;

      (await cookies()).set("user", JSON.stringify({ email, role }), {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
        path: "/",
      });
    }

    return result;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong during login.",
    };
  }
};
