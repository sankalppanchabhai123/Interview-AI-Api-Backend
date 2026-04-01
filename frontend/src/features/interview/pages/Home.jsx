import { useState, useRef } from "react";

const UploadIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
);

const FileIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
    </svg>
);

const TrashIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
        <path d="M10 11v6" /><path d="M14 11v6" /><path d="M9 6V4h6v2" />
    </svg>
);

const SparkleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M19 16l.75 2.25L22 19l-2.25.75L19 22l-.75-2.25L16 19l2.25-.75L19 16z" />
        <path d="M5 16l.75 2.25L8 19l-2.25.75L5 22l-.75-2.25L2 19l2.25-.75L5 16z" />
    </svg>
);

export default function Home() {
    const [jobDesc, setJobDesc] = useState("");
    const [selfDesc, setSelfDesc] = useState("");
    const [resume, setResume] = useState(null);
    const [dragging, setDragging] = useState(false);
    const [focused, setFocused] = useState("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const fileRef = useRef();

    const handleFile = (file) => {
        if (!file) return;
        const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
        if (allowed.includes(file.type) || file.name.match(/\.(pdf|doc|docx)$/i)) {
            setResume(file);
        }
    };

    const onDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        handleFile(e.dataTransfer.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!jobDesc || !resume || !selfDesc) return;
        setLoading(true);
        setTimeout(() => { setLoading(false); setSubmitted(true); }, 2000);
    };

    const canSubmit = jobDesc.trim() && resume && selfDesc.trim();

    const inputBase = (key) => ({
        width: "100%",
        background: "rgba(255,255,255,0.06)",
        border: `1px solid ${focused === key ? "rgba(139,92,246,0.7)" : "rgba(255,255,255,0.1)"}`,
        borderRadius: 14,
        padding: "14px 18px",
        color: "#fff",
        fontSize: 14,
        outline: "none",
        resize: "vertical",
        fontFamily: "'Inter', system-ui, sans-serif",
        boxSizing: "border-box",
        transition: "all 0.2s",
        boxShadow: focused === key ? "0 0 0 3px rgba(139,92,246,0.15)" : "none",
        lineHeight: 1.6,
    });

    if (submitted) return (
        <div style={{ minHeight: "100vh", background: "#0b0b12", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', system-ui, sans-serif" }}>
            <div style={{ textAlign: "center", maxWidth: 380, padding: 24 }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #4338ca)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", boxShadow: "0 0 50px rgba(124,58,237,0.45)" }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                </div>
                <h2 style={{ color: "#fff", fontSize: 26, fontWeight: 700, margin: "0 0 10px", letterSpacing: "-0.5px" }}>Application Submitted!</h2>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, lineHeight: 1.7, margin: "0 0 32px" }}>
                    We've received your details. Our AI is analyzing your resume and profile. You'll hear back shortly.
                </p>
                <button onClick={() => { setSubmitted(false); setJobDesc(""); setSelfDesc(""); setResume(null); }}
                    style={{ padding: "12px 32px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #7c3aed, #4338ca)", color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
                    Start Over
                </button>
            </div>
        </div>
    );

    return (
        <div style={{ minHeight: "100vh", background: "#0b0b12", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px", fontFamily: "'Inter', system-ui, sans-serif", position: "relative", overflow: "hidden" }}>

            {/* Ambient glows */}
            <div style={{ position: "absolute", top: "-10%", left: "-5%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: "-15%", right: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(79,70,229,0.11) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ position: "relative", width: "100%", maxWidth: 680 }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: 44 }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.25)", borderRadius: 99, padding: "6px 16px", marginBottom: 20 }}>
                        <SparkleIcon />
                        <span style={{ color: "#a78bfa", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}>AI-Powered Career Assistant</span>
                    </div>
                    <h1 style={{ color: "#fff", fontSize: 38, fontWeight: 800, margin: "0 0 14px", letterSpacing: "-0.8px", lineHeight: 1.15 }}>
                        Land your dream job<br />
                        <span style={{ background: "linear-gradient(135deg, #a78bfa, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            with AI assistance
                        </span>
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
                        Paste the job description, upload your resume, and tell us about yourself. We'll craft a tailored application for you.
                    </p>
                </div>

                {/* Card */}
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 22, padding: "40px 40px 36px" }}>

                    {/* Step indicators */}
                    <div style={{ display: "flex", gap: 8, marginBottom: 36 }}>
                        {["Job Description", "Resume", "About You"].map((step, i) => (
                            <div key={step} style={{ flex: 1, display: "flex", alignItems: "center", gap: 8 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1 }}>
                                    <div style={{ width: 26, height: 26, borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #4338ca)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 11, fontWeight: 700, color: "#fff" }}>{i + 1}</div>
                                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 500, whiteSpace: "nowrap" }}>{step}</span>
                                </div>
                                {i < 2 && <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.08)", marginLeft: 4 }} />}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>

                        {/* Job Description */}
                        <div style={{ marginBottom: 28 }}>
                            <label style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.55)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7c3aed" }} />
                                Job Description
                            </label>
                            <textarea
                                rows={6}
                                value={jobDesc}
                                onChange={(e) => setJobDesc(e.target.value)}
                                onFocus={() => setFocused("job")}
                                onBlur={() => setFocused("")}
                                placeholder="Paste the full job description here — role responsibilities, requirements, company info..."
                                style={inputBase("job")}
                            />
                            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 6 }}>
                                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>{jobDesc.length} characters</span>
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div style={{ marginBottom: 28 }}>
                            <label style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.55)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7c3aed" }} />
                                Resume / CV
                            </label>

                            {resume ? (
                                <div style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.25)", borderRadius: 14, padding: "16px 20px" }}>
                                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(124,58,237,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#a78bfa", flexShrink: 0 }}>
                                        <FileIcon />
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <p style={{ color: "#fff", fontSize: 13, fontWeight: 500, margin: "0 0 3px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{resume.name}</p>
                                        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 11, margin: 0 }}>{(resume.size / 1024).toFixed(1)} KB</p>
                                    </div>
                                    <button type="button" onClick={() => setResume(null)} style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, padding: "6px 10px", color: "#f87171", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 500 }}>
                                        <TrashIcon /> Remove
                                    </button>
                                </div>
                            ) : (
                                <div
                                    onClick={() => fileRef.current.click()}
                                    onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                                    onDragLeave={() => setDragging(false)}
                                    onDrop={onDrop}
                                    style={{
                                        border: `2px dashed ${dragging ? "rgba(124,58,237,0.7)" : "rgba(255,255,255,0.12)"}`,
                                        borderRadius: 14, padding: "36px 24px", textAlign: "center", cursor: "pointer",
                                        background: dragging ? "rgba(124,58,237,0.06)" : "rgba(255,255,255,0.02)",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    <div style={{ color: "rgba(255,255,255,0.25)", marginBottom: 12, display: "flex", justifyContent: "center" }}>
                                        <UploadIcon />
                                    </div>
                                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, fontWeight: 500, margin: "0 0 6px" }}>
                                        Drop your resume here, or <span style={{ color: "#a78bfa", textDecoration: "underline" }}>browse</span>
                                    </p>
                                    <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, margin: 0 }}>Supports PDF, DOC, DOCX — max 10MB</p>
                                    <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" onChange={(e) => handleFile(e.target.files[0])} style={{ display: "none" }} />
                                </div>
                            )}
                        </div>

                        {/* Self Description */}
                        <div style={{ marginBottom: 32 }}>
                            <label style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.55)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7c3aed" }} />
                                About You
                            </label>
                            <textarea
                                rows={5}
                                value={selfDesc}
                                onChange={(e) => setSelfDesc(e.target.value)}
                                onFocus={() => setFocused("self")}
                                onBlur={() => setFocused("")}
                                placeholder="Tell us about yourself — your experience, key skills, career goals, and what makes you a great fit for this role..."
                                style={inputBase("self")}
                            />
                            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 6 }}>
                                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>{selfDesc.length} characters</span>
                            </div>
                        </div>

                        {/* Completion progress */}
                        <div style={{ marginBottom: 24 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>Profile completeness</span>
                                <span style={{ color: "#a78bfa", fontSize: 12, fontWeight: 600 }}>
                                    {[!!jobDesc.trim(), !!resume, !!selfDesc.trim()].filter(Boolean).length} / 3 fields
                                </span>
                            </div>
                            <div style={{ height: 4, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }}>
                                <div style={{
                                    height: "100%", borderRadius: 99, transition: "width 0.4s ease",
                                    background: "linear-gradient(90deg, #7c3aed, #818cf8)",
                                    width: `${([!!jobDesc.trim(), !!resume, !!selfDesc.trim()].filter(Boolean).length / 3) * 100}%`
                                }} />
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={!canSubmit || loading}
                            style={{
                                width: "100%", padding: "15px 24px", borderRadius: 14, border: "none",
                                background: canSubmit ? "linear-gradient(135deg, #7c3aed, #4338ca)" : "rgba(255,255,255,0.06)",
                                color: canSubmit ? "#fff" : "rgba(255,255,255,0.25)",
                                fontSize: 15, fontWeight: 700, cursor: canSubmit ? "pointer" : "not-allowed",
                                boxShadow: canSubmit ? "0 4px 24px rgba(124,58,237,0.4)" : "none",
                                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                                transition: "all 0.2s", letterSpacing: "-0.2px",
                            }}
                        >
                            {loading ? (
                                <>
                                    <svg style={{ animation: "spin 1s linear infinite" }} width="18" height="18" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
                                        <path fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Analyzing your profile...
                                </>
                            ) : (
                                <>
                                    <SparkleIcon />
                                    Generate My Application
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </>
                            )}
                        </button>

                    </form>
                </div>

                {/* Footer note */}
                <p style={{ textAlign: "center", color: "rgba(255,255,255,0.18)", fontSize: 12, marginTop: 20, lineHeight: 1.6 }}>
                    Your data is processed securely and never stored permanently.
                </p>
            </div>

            <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        textarea::placeholder { color: rgba(255,255,255,0.2) !important; }
        textarea { scrollbar-width: thin; scrollbar-color: rgba(124,58,237,0.3) transparent; }
      `}</style>
        </div>
    );
}