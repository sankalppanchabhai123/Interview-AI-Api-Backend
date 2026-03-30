const pdfParse = require("pdf-parse")
const { tempResult: generateInterviewReport } = require("../services/ai.services");
const interviewReportModel = require("../modules/interviewReport");

async function generateInterviewReportController(req, res) {

    const resumeContent = await (new pdfParse.PDFParse(req.file.buffer)).getText();
    const { selfDescription, jobdescription } = req.body
    const result = generateInterviewReport({
        resume: resumeContent.text,
        selfDescription,
        jobdescription,
    })

    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobdescription,
        ...result,
    })

    res.status(201).json({
        message: "Interview report generated successfully",
        interviewReport,
    })
}


module.exports = {
    generateInterviewReportController,
}
