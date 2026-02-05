import express from "express";
import { LeetCode } from "leetcode-query";
import cors from "cors";
import path from "path";
const app = express();
app.use(express.json());
app.use(cors());
const leetcode = new LeetCode();
const contest_info = leetcode.user_contest_info("AnthonyPage");
const STATIC_DIR = "../../dist";
const staticPath = path.resolve(process.cwd(), STATIC_DIR);
app.get("/api/rank", async (res) => {
    try {
        res.status(200).json((await contest_info).userContestRanking.topPercentage);
    }
    catch (err) {
        res.status(500).json({ response: "Something went wrong while getting contest scores" });
    }
});
app.use(express.static(staticPath));
app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
});
app.listen(3000, () => {
    console.log(`Server running at http://localhost:${3000}`);
});
//# sourceMappingURL=index.js.map