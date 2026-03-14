const express = require("express");
const cors = require("cors");

const jobsRoute = require("./routes/jobs");
const authRoute = require("./routes/auth");
const applicationRoute = require("./routes/application");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", jobsRoute);
app.use("/api", authRoute);
app.use("/api", applicationRoute);

app.get("/", (req,res)=>{
 res.send("Job Board API Running");
});

app.listen(5000, ()=>{
 console.log("Server running on port 5000");
});