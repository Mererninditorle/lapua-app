const express = require("express");
// const router = require("./");
const app = express();
const port = process.env.PORT || 1911;

app.get("/", (rq,rs) => {
    rs.send("<h1>Портал здорового питания</h1>");
});

app.listen(port), e => {console.log("succes")};