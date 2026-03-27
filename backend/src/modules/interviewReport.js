const mongooese = require("mongoose")

const mainSchema = new mongooese.Schema({
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
    interviewQuestions: [interviewQuestion],
    behaviralQuestions: [behaviralQuestion],

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

const interviewSchema = mongooese.model("interview data", mainSchema);

module.exports = interviewSchema;