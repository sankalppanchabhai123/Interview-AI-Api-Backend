const app = require("./src/app");
const connectDb = require("./src/config/database");
const { tempResult: generateInterviewReport } = require("./src/services/ai.services");
const { resume, selfdescription, jobdescription } = require("./src/services/temp")

connectDb();
generateInterviewReport({ resume, selfdescription, jobdescription })

app.listen(3000, () => {
    console.log("server listening on port 3000")
})