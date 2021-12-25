const app = require("express")();
const bodyParser = require("body-parser");
const serve = require("./server");

//socket.io
const http = require("http").Server(app);

const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(serve);

http.listen(PORT, () => {
    console.log("Ready on http://localhost:" + PORT);
});
