import { Router } from "https://deno.land/x/opine@2.2.0/mod.ts";
import db from '../config/DB_Config.ts';
import {ObjectId}  from 'https://deno.land/x/mongo@v0.30.1/mod.ts'


interface User{
    Name: string;
    Email:string
}

const User =  db.collection<User>("users")

const route = Router()

route.get('/hello',async (req:any,res:any)=>{
    const body= {
        Name: "Mudassir Siddiqui.",
        Email: "mudassirsiddiqui27@gmail.com"
    }

    // const newUser = new User(body)

    const resp: any = await User.insertOne({
        Name: "Mudassir Siddiqui.",
        Email: "mudassirsiddiqui27@gmail.com"
    })

    console.log('resp: ',resp)

    return  res.setStatus(200).json({data: resp})
})


route.get('/get',async (req:any,res:any)=>{

    const resp = await User.find().toArray()
    return  res.setStatus(200).json({data: resp})
})

route.get('/update',async(req:any,res:any)=>{
    const newData = {
        Name:"Updated User(2)",
        Email:"upd@gmail.com"
    }

    const resp = await User.updateOne({Name: "ObjectId('62d42e7bdd3bae09cc41ad0d')"}, {$set:newData} )
    console.log('here is resp: ', resp)

    return res.setStatus(200).json({data:resp})

})
export default route