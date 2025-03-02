const Express = require("express")

const app = Express();
app(80, () => { console.log("app is running on port 80"))
