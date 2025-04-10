import axios from "axios";
import nextConfig from "../../../next.config.mjs";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getUser = createAsyncThunk("user/getUser",async ()=>{
    let response = await axios.get(nextConfig.env.API_URL+"/api/user/profile",{withCredentials:true});
    return response.data;
})