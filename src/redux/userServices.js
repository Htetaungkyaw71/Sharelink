import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userServices = createApi({
  reducerPath: "userServices",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      //   const user = loadState();
      //   console.log(user);
      //   headers.set("Authorization", `Bearer ${user.token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    GetUser: builder.query({
      query: ({ id }) => {
        console.log(id);
        return {
          url: `user/${id}`,
          method: "GET",
        };
      },
      transformResponse: (response) => response,
    }),
    UpdateUser: builder.mutation({
      query: ({ id, name, email }) => ({
        url: `user/${id}`,
        method: "PUT",
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
} = userServices;
