const express = require("express");
const app = express();
app.use(express.json());

let currentCount = 0;

app.post("/update-count", (req, res) => {
    if (req.body.secret !== process.env.SECRET_KEY) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    currentCount = req.body.count;
    res.json({ ok: true });
});

app.get("/count", (req, res) => {
    res.json({ count: currentCount });
});

app.listen(process.env.PORT || 3000, () => console.log("Running!"));
