const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const dotenv = require("dotenv").config();

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/openai", require("./routes/OpenAiRouter"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
