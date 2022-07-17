import {Bson,MongoClient} from "https://deno.land/x/mongo@v0.30.1/mod.ts";

const client = new MongoClient();

//  "mongodb+srv://mudassir456:mudassir456@cluster0.bi8q1.mongodb.net/deno-explore?retryWrites=true&w=majority"
let connectionUrl: string = "mongodb+srv://mudassir456:mudassir456@cluster0.bi8q1.mongodb.net/deno-explore?authMechanism=SCRAM-SHA-1"

// https://cloud.mongodb.com/v2/5f11aa5fb5dc041e9a04d9e1#metrics/replicaSet/629e24b28265e90e2cb73e7d/explorer/New_DB/products/find

// "mongodb+srv://<username>:<password>@<db_cluster_url>/<db_name>?authMechanism=SCRAM-SHA-1"

await client.connect(connectionUrl)

const db = client.database('DENO_explorer')

export default db




