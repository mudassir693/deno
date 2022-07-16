console.log('whatsup Guys: This is DENO 🦕');

import { opine } from "https://deno.land/x/opine@2.2.0/mod.ts";

import {route} from './routes/userRoute.ts'

const app = opine();

app.get("/", function (req:any, res:any) {
  res.send("Hello World");
});

app.use('/routes/',route)

app.listen(
  3000,
  () => console.log("server has started on http://localhost:3000 🚀"),
);