import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userServices = createApi({
  reducerPath: "userServices",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sharelink-xcsw.onrender.com/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    GetUser: builder.query({
      query: ({ id }) => {
        return {
          url: `user/${id}`,
          method: "GET",
          mode: "cors",
        };
      },
      transformResponse: (response) => response,
    }),
    Getpreview: builder.query({
      query: ({ name }) => {
        return {
          url: `preview/${name}`,
          method: "GET",
          mode: "cors",
        };
      },
      transformResponse: (response) => response,
    }),
    UpdateUser: builder.mutation({
      query: ({ id, name, email }) => ({
        url: `user/${id}`,
        method: "PUT",
        mode: "cors",
        body: {
          name,
          email,
        },
      }),
      transformResponse: (response) => response,
    }),
    SignIn: builder.mutation({
      query: ({ email, password }) => ({
        url: "signin",
        method: "POST",
        mode: "cors",
        body: {
          email,
          password,
        },
      }),
      transformResponse: (response) => response,
    }),
    SignUp: builder.mutation({
      query: ({ name, email, password }) => ({
        url: "user",
        method: "POST",
        mode: "cors",
        body: {
          name,
          email,
          password,
        },
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useGetpreviewQuery,
} = userServices;
