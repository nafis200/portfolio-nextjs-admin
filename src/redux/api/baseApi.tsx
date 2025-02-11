import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://portfolio-backend-gamma-gold.vercel.app/api',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  tagTypes: ['project', 'blogs', 'message'],
  endpoints: () => ({}), 
});
