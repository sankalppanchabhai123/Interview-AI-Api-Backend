const { GoogleGenAI } = require("@google/genai");

// async function tempResult(req, res) {
//     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//     const result = await model.generateContent("Explain quantum computing");
//     console.log(result.response.text);
//     return res.status(201).send(result);
// }

// module.exports = {
//     tempResult,
// }

const ai = new GoogleGenAI({
    apikey: process.env.GEMINI_API_KEY
})

async function invokeGeminiAi() {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Hello gemini: Explain what is Interview?"
    })

    console.log(response.text);
}

module.exports = {
    tempResult: invokeGeminiAi,
}