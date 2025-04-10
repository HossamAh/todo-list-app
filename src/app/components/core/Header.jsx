'use client';

import { useDispatch, useSelector } from "react-redux";
import {getUser} from "../../Thunks/userThunk";
import { useEffect } from "react";
import axios from "axios";
import nextConfig from "../../../../next.config.mjs";
import { useRouter } from 'next/navigation';

export default function Header(){
    const {user,loadingStatus} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    const handleLogout = async ()=>{
        try{

            await axios.get(nextConfig.env.API_URL+"/api/logout",{withCredentials:true});
            router.push("/");
        }
        catch(err){
            console.log(err);
        }
    }
    return(
        <header className="my-6 bg-white p-4 flex items-center justify-center rounded-2xl shadow-2xl container mx-auto">
            <nav className="flex items-center justify-between ">
                {loadingStatus==="completed"?
                    <div className="flex gap-4">
                        <p className="text-base bg-gray-600 text-black font-semibold p-2 rounded-xl ">Welcome {user.name}</p>
                        <button className="text-base bg-gray-600 text-black font-semibold p-2 rounded-xl " onClick={handleLogout}> Logout</button>
                    </div>
                    :
                    loadingStatus==="loading"?
                    <p>Loading ...</p>
                    :
                    <div className="flex gap-4">
                    <p className="text-base bg-gray-600 text-black font-semibold p-2 rounded-xl ">Welcome Guest</p>
                    <a className="text-base bg-gray-600 text-black font-semibold p-2 rounded-xl " href="/login"> Register</a>
                    </div>
                }
            </nav>
        </header>
    );
}