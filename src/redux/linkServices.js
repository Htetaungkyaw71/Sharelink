import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { loadState } from "./localStorage";

export const linkServices = createApi({
  reducerPath: "linkServices",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://sharelink-xcsw.onrender.com/api/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      const user = loadState();
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
          mode: "cors",
        };
      },
      transformResponse: (response) => response,
      keepUnusedDataFor: 0,
    }),

    Createlink: builder.mutation({
      query: ({ platform, url }) => ({
        url: `links`,
        method: "POST",
        mode: "cors",
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
        mode: "cors",
      }),
      transformResponse: (response) => response,
    }),
    Updatelink: builder.mutation({
      query: ({ id, platform, url }) => ({
        url: `links/${id}`,
        method: "PUT",
        mode: "cors",
        body: {
          platform,
          url,
        },
      }),
      transformResponse: (response) => response,
    }),
  }),
});

export const {
  useGetlinksQuery,
  useCreatelinkMutation,
  useDeletelinkMutation,
  useUpdatelinkMutation,
} = linkServices;
