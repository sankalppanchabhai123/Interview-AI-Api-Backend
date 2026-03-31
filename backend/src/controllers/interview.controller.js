const pdfParse = require("pdf-parse")
const { tempResult: generateInterviewReport } = require("../services/test");
const { interviewReportModel } = require("../modules/interviewReport");
async function generateInterviewReportController(req, res) {

    const data = new Uint8Array(
        req.file.buffer.buffer,
        req.file.buffer.byteOffset,
        req.file.buffer.byteLength
    );

    const resumeContent = await (new pdfParse.PDFParse(data)).getText();
    const { selfDescription, jobdescription } = req.body
    const result = await generateInterviewReport({
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
