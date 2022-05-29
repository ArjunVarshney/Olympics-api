const express = require("express");
require("./db/conn");
const router = require("./routers/men");
const app = express();
const port = process.env.port || 3000;

app.use(router)
app.use(express.json());


app.listen(port, () => {
  console.log("connection is live..");
});
