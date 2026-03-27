const { GoogleGenerativeAI } = require("@google/generative-ai");

async function tempResult(req, res) {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent("Explain quantum computing");
    console.log(result.response.text());
    return res.status(201).send(result);
}

module.exports = {
    tempResult,
}
