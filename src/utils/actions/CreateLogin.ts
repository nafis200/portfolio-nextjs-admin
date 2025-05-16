"use server";

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
    const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong during login.",
    };
  }
};
