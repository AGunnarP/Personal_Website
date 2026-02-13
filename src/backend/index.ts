import express from "express";
import { LeetCode } from "leetcode-query";
import cors from "cors";
import path from "path";
import fs from "fs";

import type { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(cors());



const STATIC_DIR = "../../dist";
const staticPath = path.resolve(process.cwd(), STATIC_DIR);

const logStream = fs.createWriteStream('./app.log', { flags: 'a' });

app.get("/api/rank", async (req: Request, res: Response) => {

    try{



        logStream.write(`${req.method} ${req.url}\n`);

        const leetcode = new LeetCode();
        const contest_info = leetcode.user_contest_info("AnthonyPage");
        const percentage = (await contest_info).userContestRanking.topPercentage;

        logStream.write(`\nTop percentage: ${percentage}\n`)

        res.status(200).json(percentage);

    }catch(err){

        res.status(500).json("Something went wrong while getting contest scores")

    }

});

app.use(express.static(staticPath));

app.get("*", (_req, res) =>{

    res.sendFile(path.join(staticPath, "index.html"));

});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:${3000}`);
});