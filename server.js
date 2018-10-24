const express = require("express");

const app = express();
const path = require("path");

const outputDirectory = "dist";

// middleware to define filder static files
app.use(express.static(outputDirectory));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, outputDirectory, "index.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
