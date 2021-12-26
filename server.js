const express = require("express");
const app = express();
const routers = require("./routers");
const middleware = require('./middleware');
const HttpStatusCode = require("http-status-codes");

app.get("/", function (req, res) {
    res.json("NFT App Serve Project");
});

app.use(routers.userRouter);
app.use(routers.walletRouter);
app.use(routers.marketRouter);
app.use(routers.blockRouter);

app.use((req, res) => {
    res.status(HttpStatusCode.NOT_FOUND).send("404 NOT FOUND");
});

app.use(middleware.errorHandling);

module.exports = app;
