import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const featureItems = [
    "Role-Specific Questions",
    "Skill Gap Detection",
    "ATS Resume Insights",
    "Behavioral Preparation",
    "Action Plan Output",
];

export default function Home() {
    const [jobDesc, setJobDesc] = useState("");
    const [selfDesc, setSelfDesc] = useState("");
    const [resume, setResume] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const fileRef = useRef(null);

    const handleFile = (file) => {
        if (!file) return;
        const allowed = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (allowed.includes(file.type) || file.name.match(/\.(pdf|doc|docx)$/i)) {
            setResume(file);
        }
    };

    const onDrop = (event) => {
        event.preventDefault();
        setDragging(false);
        handleFile(event.dataTransfer.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!jobDesc.trim() || !selfDesc.trim() || !resume) return;

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 2000);
    };

    const filledCount = [Boolean(jobDesc.trim()), Boolean(selfDesc.trim()), Boolean(resume)].filter(Boolean).length;
    const canSubmit = filledCount === 3;

    return (
        <div className="min-h-screen bg-[#4472e5] font-['Poppins',sans-serif] text-white p-[clamp(14px,2vw,22px)_clamp(12px,2vw,20px)_28px]">
            <div className="max-w-[1060px] mx-auto">
                {/* Navigation Pill */}
                <header className="min-h-[50px] rounded-full bg-[rgba(145,176,255,0.36)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] border border-[rgba(194,219,255,0.35)] flex items-center justify-between p-[5px_clamp(16px,2.2vw,26px)] gap-1">
                    <div className="flex items-center gap-1.5 font-bold text-[clamp(17px,2vw,24px)] tracking-[0.2px] text-[#f7fbff]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f2f6ff] shadow-[0_0_0_4px_rgba(255,255,255,0.06)]" />
                        <span>InterviewAI</span>
                    </div>

                    <nav className="flex items-center gap-1.5 text-[clamp(13px,1.25vw,17px)] font-semibold">
                        <Link to="/login" className="text-[#0f172a] no-underline p-[clamp(4px,0.6vw,7px)_clamp(8px,0.9vw,10px)] rounded-full">
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="no-underline text-white bg-[#2f68ea] rounded-full p-[clamp(2px,0.8vw,5px)_clamp(20px,2.2vw,24px)] shadow-[0_3px_10px_rgba(12,39,108,0.3)]"
                        >
                            Register
                        </Link>
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="flex flex-col items-center text-center pt-[clamp(44px,6vw,70px)] px-2.5">
                    <h1 className="m-0 max-w-[900px] text-[clamp(44px,5vw,64px)] leading-[1.07] tracking-[-1.2px] font-bold text-[#f6f9ff]">
                        Crack Interviews With
                        <br />
                        AI-Powered Preparation
                    </h1>

                    <p className="mt-[clamp(28px,4vw,52px)] mb-0 max-w-[760px] text-[clamp(20px,2.35vw,34px)] font-['Poppins',sans-serif] leading-[1.25] font-normal text-[#071426]">
                        Paste your job description, share your background, and upload your resume
                        <br />
                        to generate a personalized interview report and preparation roadmap.
                    </p>

                    <div className="mt-[clamp(14px,2.6vw,62px)] flex gap-[clamp(10px,2.5vw,24px)] flex-wrap justify-center">
                        <button
                            type="button"
                            className="border-none rounded-full bg-black text-white p-[clamp(10px,1.25vw,14px)_clamp(24px,3.1vw,38px)] text-[clamp(14px,1.25vw,20px)] font-bold tracking-[0.1px] cursor-pointer"
                        >
                            Generate My Interview Plan
                        </button>
                        <button
                            type="button"
                            className="border-0.1 border-[#141414] rounded-full bg-[#f3f3f1] text-[#0f1216] p-[clamp(9px,1.1vw,13px)_clamp(22px,2.8vw,34px)] text-[clamp(14px,1.18vw,19px)] font-bold cursor-pointer"
                        >
                            View Sample Report
                        </button>
                    </div>

                    <div className="mt-[clamp(34px,5.2vw,70px)] flex justify-center gap-[clamp(10px,2vw,22px)] flex-wrap">
                        {featureItems.map((item) => (
                            <div key={item} className="flex items-center gap-2.5 text-[#f6f9ff] text-[clamp(13px,1.35vw,18px)] font-medium tracking-[0.1px]">
                                <span className="w-6 h-6 rounded-full bg-[#dce6fb] shadow-[inset_0_0_0_1px_rgba(26,42,73,0.14)] relative flex-shrink-0">
                                    <span className="w-[7px] h-[7px] rounded-full bg-[#0b1327] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                </span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Form Card */}
                <section className="mt-[clamp(48px,8vw,110px)] mx-auto w-[min(720px,100%)] rounded-[26px] border border-[rgba(202,220,255,0.45)] bg-[rgba(68,114,229,0.42)] shadow-[0_16px_35px_rgba(17,42,107,0.2),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-[6px] p-[clamp(16px,3vw,26px)]">
                    <h2 className="m-0 text-[#f6f9ff] text-[clamp(18px,2.1vw,25px)] font-bold">
                        Create Your Interview Input Packet
                    </h2>
                    <p className="mt-1.5 mb-0 text-[rgba(240,247,255,0.9)] text-[clamp(12px,1.4vw,16px)]">
                        Complete all three inputs below to generate your AI interview report.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-[18px] grid gap-3.5">
                        {/* Job Description */}
                        <div>
                            <label className="block mb-1.5 text-[13px] font-semibold text-[#ecf3ff]">
                                Job Description
                            </label>
                            <textarea
                                rows={5}
                                value={jobDesc}
                                onChange={(event) => setJobDesc(event.target.value)}
                                placeholder="Paste role responsibilities, requirements, and company context"
                                className="w-full rounded-[14px] border border-[rgba(205,224,255,0.42)] bg-[rgba(39,77,175,0.52)] text-[#f8fbff] p-[11px_12px] text-[14px] outline-none box-border placeholder:text-[rgba(248,251,255,0.6)]"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label className="block mb-1.5 text-[13px] font-semibold text-[#ecf3ff]">
                                Resume / CV
                            </label>
                            {resume ? (
                                <div className="rounded-[14px] border border-dashed border-[rgba(205,224,255,0.7)] bg-[rgba(39,77,175,0.35)] p-3.5 cursor-pointer text-left">
                                    <div className="text-[14px] font-semibold">{resume.name}</div>
                                    <div className="mt-1 text-[12px] opacity-85">
                                        {(resume.size / 1024).toFixed(1)} KB
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setResume(null)}
                                        className="mt-2 border-none bg-transparent text-[#f8fbff] cursor-pointer underline p-0 text-[12px]"
                                    >
                                        Remove file
                                    </button>
                                </div>
                            ) : (
                                <div
                                    className={`rounded-[14px] border border-dashed p-3.5 cursor-pointer text-left transition-all
                                        ${dragging
                                            ? "border-white bg-[rgba(39,77,175,0.62)]"
                                            : "border-[rgba(205,224,255,0.7)] bg-[rgba(39,77,175,0.35)]"
                                        }`}
                                    onClick={() => fileRef.current?.click()}
                                    onDragOver={(event) => {
                                        event.preventDefault();
                                        setDragging(true);
                                    }}
                                    onDragLeave={() => setDragging(false)}
                                    onDrop={onDrop}
                                >
                                    <div className="text-[14px] font-semibold">Drop resume here or click to upload</div>
                                    <div className="mt-1 text-[12px] opacity-85">
                                        Supported formats: PDF, DOC, DOCX
                                    </div>
                                    <input
                                        ref={fileRef}
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={(event) => handleFile(event.target.files?.[0])}
                                        className="hidden"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Self Description */}
                        <div>
                            <label className="block mb-1.5 text-[13px] font-semibold text-[#ecf3ff]">
                                Self Description
                            </label>
                            <textarea
                                rows={4}
                                value={selfDesc}
                                onChange={(event) => setSelfDesc(event.target.value)}
                                placeholder="Summarize your experience, strengths, and target role"
                                className="w-full rounded-[14px] border border-[rgba(205,224,255,0.42)] bg-[rgba(39,77,175,0.52)] text-[#f8fbff] p-[11px_12px] text-[14px] outline-none box-border placeholder:text-[rgba(248,251,255,0.6)]"
                            />
                        </div>

                        {/* Submit Section */}
                        <div className="flex items-center justify-between gap-2">
                            <span className="text-[12px] text-[#e8f0ff]">
                                Profile completion: {filledCount}/3
                            </span>
                            <button
                                type="submit"
                                disabled={!canSubmit || loading}
                                className={`border-none rounded-full bg-black text-white text-[15px] font-bold p-3 px-[18px] cursor-pointer
                                    ${(!canSubmit || loading) ? "opacity-56 cursor-not-allowed" : ""}`}
                            >
                                {loading ? "Analyzing your profile..." : "Generate Interview Report"}
                            </button>
                        </div>
                    </form>

                    {submitted ? (
                        <div className="mt-3.5 rounded-[14px] p-2.5 px-3 bg-[rgba(36,170,84,0.2)] border border-[rgba(95,213,137,0.5)] text-[#e8ffef] text-[13px]">
                            Interview packet submitted. Your personalized report is being generated.
                        </div>
                    ) : null}
                </section>
            </div>
        </div>
    );
}