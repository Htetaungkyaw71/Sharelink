import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loadState } from "./localStorage";

export const linkServices = createApi({
  reducerPath: "linkServices",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      const user = loadState();
      console.log(user);
      headers.set("Authorization", `Bearer ${user.token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    Getlinks: builder.query({
      query: () => {
        return {
          url: `links`,
          method: "GET",
        };
      },
      transformResponse: (response) => response,
    }),
    Createlink: builder.mutation({
      query: ({ platform, url }) => ({
        url: `links`,
        method: "POST",
        body: {
          platform,
          url,
        },
      }),
      transformResponse: (response) => response,
    }),
    Deletelink: builder.mutation({
      query: ({ id }) => ({
        url: `links/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response) => response,
    }),
    // Updatelink: builder.mutation({
    //   query: ({ id, name, email }) => ({
    //     url: `link/${id}`,
    //     method: "PUT",
    //     body: {
    //       name,
    //       email,
    //     },
    //   }),
    //   transformResponse: (response) => response,
    // }),
  }),
});

export const {
  useGetlinksQuery,
  useCreatelinkMutation,
  useDeletelinkMutation,
} = linkServices;
