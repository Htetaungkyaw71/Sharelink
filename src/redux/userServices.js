import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userServices = createApi({
  reducerPath: "userServices",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
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
        };
      },
      transformResponse: (response) => response,
    }),
    Getpreview: builder.query({
      query: ({ name }) => {
        return {
          url: `preview/${name}`,
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
    UpdateImage: builder.mutation({
      query: ({ id, image }) => {
        // const formData = new FormData();
        // formData.append("image", image);
        console.log(image);
        // console.log(formData);
        return {
          url: `user/image/${id}`,
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: { image },
          formData: true,
          transformResponse: (response) => {
            console.log("API Response:", response);
            return response;
          },
        };
      },
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
  useGetpreviewQuery,
  useUpdateImageMutation,
} = userServices;
