import { baseApi } from "@/redux/api/baseApi";


const projectManagementApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllproject: builder.query({
            query:()=>{
                return {
                    url:"/project",
                    method:"GET"
                }
            },
            providesTags:['project']
        })
    })
})


export const {  } = projectManagementApi;