const app = require("./src/app");
const connectDb = require("./src/config/database");

connectDb();

app.listen(3000, () => {
    console.log("server listening on port 3000")
})