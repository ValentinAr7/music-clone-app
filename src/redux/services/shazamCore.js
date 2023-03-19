import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
           prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'd784bbf8bemsh937dbecae345d21p133f8ejsne9677a6edd2d')

            return headers;
            }
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => '/charts/world'})
        }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi

