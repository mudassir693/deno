import { config as cfg } from "https://deno.land/x/dotenv/mod.ts";
import { opine } from "https://deno.land/x/opine@2.2.0/mod.ts";

const config = cfg()


console.log('whatsup Guys: This is DENO 🦕');


// app.ts

import route from './routes/userRoute.ts'

const app = opine();




app.get("/", function (req:any, res:any) {
  res.setStatus(200).json({data: "Hello World"});
});

app.use('/routes/',route)
console.log(config.PORT);

app.listen(
  3000,
  () => console.log("server has started on http://localhost:3000 🚀"),
);