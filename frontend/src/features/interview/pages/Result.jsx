import React from "react";

const Result = ({ reportData }) => {
    const data = reportData || {
        matchScore: 85,
        interviewQuestion: [
            {
                question: "Explain how you would design a scalable RESTful API for a high-traffic application using Node.js and Express. What database design considerations would you take into account?",
                intention: "Assess candidate understanding and communication.",
                answer: "Explain approach clearly with concrete examples."
            },
            {
                question: "Describe a scenario where you had to optimize a slow database query. What steps did you take and what was the outcome?",
                intention: "Assess candidate understanding and communication.",
                answer: "Explain approach clearly with concrete examples."
            },
            {
                question: "How do you implement rate limiting in an Express application? Can you provide code snippets or libraries you have used?",
                intention: "Assess candidate understanding and communication.",
                answer: "Explain approach clearly with concrete examples."
            },
            {
                question: "Explain the difference between optimistic and pessimistic locking in database transactions. When would you use each?",
                intention: "Assess candidate understanding and communication.",
                answer: "Explain approach clearly with concrete examples."
            },
            {
                question: "Walk us through your process for securing JWT authentication, including token refresh strategies and protection against common attacks.",
                intention: "Assess candidate understanding and communication.",
                answer: "Explain approach clearly with concrete examples."
            }
        ],
        behavioralQuestions: [
            {
                question: "Tell me about a time when you had to collaborate with a cross-functional team to deliver a feature under tight deadlines. How did you manage communication and expectations?",
                intention: "Assess candidate understanding and communication.",
                answer: "Explain approach clearly with concrete examples."
            },
            {
                question: "Describe a conflict you encountered with a teammate or stakeholder. How did you resolve it and what did you learn?",
                intention: "Assess candidate understanding and communication.",
                answer: "Explain approach clearly with concrete examples."
            },
            {
                question: "Give an example of a project where you had to learn a new technology quickly. How did you approach the learning process and ensure project success?",
                intention: "Assess candidate understanding and communication.",
                answer: "Explain approach clearly with concrete examples."
            }
        ],
        skillGaps: [
            {
                skill: "Limited exposure to microservices architecture and service orchestration",
                severity: "medium"
            },
            {
                skill: "Experience with advanced database scaling techniques such as sharding and replication",
                severity: "medium"
            },
            {
                skill: "Familiarity with CI/CD pipelines and automated deployment workflows",
                severity: "low"
            }
        ],
        preparationPlan: [
            {
                day: 1,
                focus: "Review microservices patterns and design principles; build a small demo service",
                tasks: ["Revise fundamentals", "Practice interview questions"]
            },
            {
                day: 2,
                focus: "Study sharding, replication, and read/write splitting in MongoDB and PostgreSQL; implement a sample schema",
                tasks: ["Revise fundamentals", "Practice interview questions"]
            },
            {
                day: 3,
                focus: "Set up a CI/CD pipeline using GitHub Actions and Docker; practice deploying to Render or AWS ECS",
                tasks: ["Revise fundamentals", "Practice interview questions"]
            },
            {
                day: 4,
                focus: "Brush up on advanced JWT security practices, including token revocation and short-lived refresh tokens",
                tasks: ["Revise fundamentals", "Practice interview questions"]
            },
            {
                day: 5,
                focus: "Practice coding interview questions on database design and API scalability; use LeetCode and CodeChef problems",
                tasks: ["Revise fundamentals", "Practice interview questions"]
            }
        ]
    };

    const getSeverityStyles = (severity) => {
        switch (severity) {
            case 'high':
                return {
                    badge: "bg-rose-50 text-rose-700 border-rose-200",
                    bar: "bg-rose-400",
                    width: "w-full",
                    dot: "bg-rose-400"
                };
            case 'medium':
                return {
                    badge: "bg-amber-50 text-amber-700 border-amber-200",
                    bar: "bg-amber-400",
                    width: "w-[60%]",
                    dot: "bg-amber-400"
                };
            case 'low':
                return {
                    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
                    bar: "bg-emerald-400",
                    width: "w-[30%]",
                    dot: "bg-emerald-400"
                };
            default:
                return {
                    badge: "bg-gray-50 text-gray-700 border-gray-200",
                    bar: "bg-gray-400",
                    width: "w-[50%]",
                    dot: "bg-gray-400"
                };
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center mb-6">
                        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-light text-slate-900 mb-3 tracking-tight">
                        Interview Assessment
                    </h1>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        A comprehensive review of your technical expertise and behavioral competencies
                    </p>
                </div>

                {/* Score Card */}
                <div className="mb-12">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 max-w-md mx-auto text-center hover:shadow-md transition-shadow">
                        <div className="relative inline-block">
                            <svg className="w-40 h-40">
                                <circle
                                    cx="80"
                                    cy="80"
                                    r="72"
                                    fill="none"
                                    stroke="#e2e8f0"
                                    strokeWidth="8"
                                />
                                <circle
                                    cx="80"
                                    cy="80"
                                    r="72"
                                    fill="none"
                                    stroke="#6366f1"
                                    strokeWidth="8"
                                    strokeDasharray={`${(data.matchScore / 100) * 452} 452`}
                                    strokeLinecap="round"
                                    transform="rotate(-90 80 80)"
                                    className="transition-all duration-1000"
                                />
                            </svg>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <span className="text-5xl font-semibold text-slate-900">{data.matchScore}</span>
                                <span className="text-slate-400 text-sm block mt-1">match score</span>
                            </div>
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <p className="text-sm text-slate-500">
                                Based on skill alignment and experience match
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technical Questions */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
                        <h2 className="text-2xl font-medium text-slate-800">Technical Evaluation</h2>
                    </div>
                    <div className="space-y-4">
                        {data.interviewQuestion.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                                <div className="px-6 py-4 bg-slate-50/50 border-b border-slate-100">
                                    <div className="flex items-start gap-3">
                                        <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                                            Q{index + 1}
                                        </span>
                                        <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
                                            {item.question}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-6 py-4 space-y-3">
                                    <div>
                                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Intention</span>
                                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.intention}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Expected Answer</span>
                                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Behavioral Questions */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-2xl font-medium text-slate-800">Behavioral Assessment</h2>
                    </div>
                    <div className="space-y-4">
                        {data.behavioralQuestions.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                                <div className="px-6 py-4 bg-slate-50/50 border-b border-slate-100">
                                    <div className="flex items-start gap-3">
                                        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                                            BQ{index + 1}
                                        </span>
                                        <p className="text-slate-700 font-medium leading-relaxed text-sm sm:text-base">
                                            {item.question}
                                        </p>
                                    </div>
                                </div>
                                <div className="px-6 py-4 space-y-3">
                                    <div>
                                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Intention</span>
                                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.intention}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Expected Answer</span>
                                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skill Gaps */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-amber-500 rounded-full"></div>
                        <h2 className="text-2xl font-medium text-slate-800">Growth Opportunities</h2>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <div className="space-y-5">
                            {data.skillGaps.map((gap, index) => {
                                const severity = getSeverityStyles(gap.severity);
                                return (
                                    <div key={index} className="group">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2 flex-1">
                                                <div className={`w-1.5 h-1.5 rounded-full ${severity.dot}`}></div>
                                                <span className="text-sm font-medium text-slate-700">{gap.skill}</span>
                                            </div>
                                            <span className={`${severity.badge} text-xs font-medium px-2.5 py-1 rounded-full border`}>
                                                {gap.severity} priority
                                            </span>
                                        </div>
                                        <div className="relative">
                                            <div className="overflow-hidden h-1.5 flex rounded-full bg-slate-100">
                                                <div className={`${severity.bar} rounded-full transition-all duration-500 ${severity.width}`} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Preparation Plan */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1 h-8 bg-slate-500 rounded-full"></div>
                        <h2 className="text-2xl font-medium text-slate-800">Development Roadmap</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {data.preparationPlan.map((day) => (
                            <div key={day.day} className="group">
                                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                                    <div className="px-5 py-4 bg-slate-50/30 border-b border-slate-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                                                Day {day.day}
                                            </span>
                                        </div>
                                        <p className="text-slate-800 font-medium text-sm leading-relaxed">
                                            {day.focus}
                                        </p>
                                    </div>
                                    <div className="px-5 py-4">
                                        <ul className="space-y-2">
                                            {day.tasks.map((task, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <svg className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{task}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-12 pt-8 text-center border-t border-slate-200">
                    <p className="text-sm text-slate-400">
                        This assessment is designed to guide your preparation and highlight areas for continued growth
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Result;