import { supabase } from "$lib/server/supaBaseClient";
import { fail, json, redirect, type RequestHandler } from "@sveltejs/kit";
export const POST:RequestHandler= async({request})=>{
    await googleSignin();
    return json("some random code")
}

const googleSignin = async ()=>{
    const {data,error} = await supabase.auth.signInWithOAuth({
        provider:'google',
        options:{
            redirectTo:"http://localhost:5173/products"
        }
    })
    
    if(data.url){
        redirect(307,data.url)
        return "307";
    }
    if(error)return "error";
}