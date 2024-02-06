var express = require("express");
var app = express();

app.get("/api/v1/users", (req, res) => {
  res.send({ message: "ok" });
});

app.listen(3005);
