import { Router } from "https://deno.land/x/opine@2.2.0/mod.ts";

export const route = Router()

route.get('/hello',(req:any,res:any)=>{
    return  res.setStatus(200).json({data:"look's fine: "})
})

