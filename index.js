require("dotenv").config();

const express = require('express')
const routes = require('./server/routes/index')
const app = express()


const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

//error handling
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "production")
    res.status(500).json({ error: "internal server error" });
  else return next(err);
});

app.listen(PORT)