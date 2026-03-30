const mongoose = require("mongoose")

const mainSchema = new mongoose.Schema({
    jobDescription: {
        type: String,
        required: [true, "Jobdescription is required"]
    },
    resume: {
        type: String,
    },
    selfDescription: {
        type: String,
    },
    matchScrore: {
        type: Number,
        min: 0,
        max: 100,
    },
    technicalQuestions: [interviewQuestion],
    behaviralQuestions: [behaviralQuestion],
    skillGaps: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    }
})

const interviewQuestion = new mongooese.Schema({
    interviewQuestions: {
        type: String,
        required: [true, "interviewQuestions required"]
    },
    intension: {
        type: String,
        required: [true, "intension required"]
    },
    answer: {
        type: String,
        required: [true, "answer required"]
    }
}, {
    _id: false,
})

const behaviralQuestion = new mongooese.Schema({
    interviewQuestions: {
        type: String,
        required: [true, "interviewQuestions required"]
    },
    intension: {
        type: String,
        required: [true, "intension required"]
    },
    answer: {
        type: String,
        required: [true, "answer required"]
    }
}, {
    _id: false,
})

const skillGapSchema = new mongooes.Schema({
    skill: {
        type: String,
        required: [true, "Skill is required"]
    },
    severity: {
        type: String,
        enum: ["low", "medium", "high"],
        requred: [true, "Severity is required"]
    }
}, {
    _id: false,
})

const preparationPlanSchema = new mongooese.Schema({
    day: {
        type: Number,
        required: [true, "Day is required"]
    },
    focus: {
        type: String,
        required: [true, "Focus is required"]
    },
    taks: {
        type: String,
        required: [true, "Task is required"]
    }
})

const interviewReportModel = mongooese.model("interviewReport", mainSchema);

module.exports = interviewReportModel;