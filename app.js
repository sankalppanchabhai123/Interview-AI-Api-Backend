
const app = express();

app.get('/', (req, res) => {
    return res.send("hiii");
})

export default app;
module.exports = app;