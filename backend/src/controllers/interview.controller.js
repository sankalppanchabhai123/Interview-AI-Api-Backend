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

    // Accept both camelCase and lowercase field names from clients.
    const selfdescription = req.body.selfdescription ?? req.body.selfDescription;
    const jobdescription = req.body.jobdescription ?? req.body.jobDescription;

    const result = await generateInterviewReport({
        resume: resumeContent.text,
        selfdescription,
        jobdescription,
    })

    const interviewReport = await interviewReportModel.create({
        user: req.user.id,
        resume: resumeContent.text,
        selfDescription: selfdescription,
        jobDescription: jobdescription,
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
