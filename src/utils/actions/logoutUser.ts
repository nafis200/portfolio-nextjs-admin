"use server";

import { cookies } from "next/headers";

export const logoutUser = async () => {
  const cookieStore = cookies();
  (await cookieStore).delete("user");
};
