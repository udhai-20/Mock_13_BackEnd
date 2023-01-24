const express = require("express");
require("dotenv").config();
const { connect } = require("./config/db");
const userRouter = require("./router/user.router");
const jobsRouter = require("./router/jobs.router");
const app = express();
const port = process.env.PORT || 8015;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("", userRouter);
app.use("/jobs", jobsRouter);

app.listen(port, async () => {
  try {
    await connect;
    console.log(`Server running on http://localhost:${port} db is connected`);
  } catch (err) {
    console.log("err", "connection to db is failed");
  }
});
