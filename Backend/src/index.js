import express from "express";
import cors from "cors";
import multer from "multer";
import morgan from "morgan";

import { router } from "./Router/index.js";



const app = express();
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;

app.get("/", (_, res) => res.json({ success: true, result: "it works baby" }))

app.use("/api/friends", router.friendsRouter)












app.listen(PORT, () => console.log("app RUNNING at port" + PORT));
