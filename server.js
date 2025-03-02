const express = require("express")

const app = express();
app(80, () => { console.log("app is running on port 80"))
