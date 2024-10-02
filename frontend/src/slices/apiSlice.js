//This is going to be the parent slice to our other api slices
//We are going to use the createApi function from the redux toolkit to create this slice

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

//This is the base query that is going to be used by the createApi function
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "user"], //tagTypes are used to group together actions that are related to the same entity
  endpoints: (builder) => ({}),
});
