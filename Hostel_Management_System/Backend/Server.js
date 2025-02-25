import express from "express";
import { connection } from "./postgreSQL/postgres.js";

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


connection();