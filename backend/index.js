const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//Mail Routes
const MailRoutes = require("./routes/MailRoute");
app.use("/api/mail", MailRoutes);


app.listen(port, () => {
    console.log(`Serve is running on port http://localhost:${port}`);
});


module.exports = app;