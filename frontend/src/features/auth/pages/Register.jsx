import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

// ── Icons ──────────────────────────────────────────────────────────────────────
const Eye = ({ open }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {open
            ? (<><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>)
            : (<><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /></>)
        }
    </svg>
);

const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
);

const GithubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

// ── Password strength helpers ──────────────────────────────────────────────────
const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"];
const strengthColor = ["", "text-red-500", "text-orange-500", "text-yellow-400", "text-green-500"];
const strengthBar = ["", "bg-red-500", "bg-orange-500", "bg-yellow-400", "bg-green-500"];

const getStrength = (pw) =>
    [pw.length >= 8, /[A-Z]/.test(pw), /[0-9]/.test(pw), /[^A-Za-z0-9]/.test(pw)].filter(Boolean).length;

const requirements = [
    { label: "8+ characters", test: (pw) => pw.length >= 8 },
    { label: "Uppercase letter", test: (pw) => /[A-Z]/.test(pw) },
    { label: "Number", test: (pw) => /[0-9]/.test(pw) },
    { label: "Special character", test: (pw) => /[^A-Za-z0-9]/.test(pw) },
];

// ── Success screen ─────────────────────────────────────────────────────────────
function SuccessScreen({ onBack }) {
    return (
        <div className="min-h-screen bg-[#0b0b12] flex items-center justify-center font-sans">
            <div className="text-center max-w-xs px-6">
                <div className="w-18 h-18 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(124,58,237,0.4)] w-[72px] h-[72px]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                </div>
                <h2 className="text-white text-2xl font-bold mb-2">Account created!</h2>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                    Welcome aboard! Check your inbox to verify your email before signing in.
                </p>
                <button
                    onClick={"/login"}
                    className="px-7 py-3 rounded-xl border-none bg-gradient-to-br from-violet-600 to-indigo-700 text-white text-sm font-semibold cursor-pointer"
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
}

// ── Main Register component ────────────────────────────────────────────────────
export default function Register() {
    // Simple, flat state — one field per key
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [showPw, setShowPw] = useState(false);
    const [showCf, setShowCf] = useState(false);
    const [focused, setFocused] = useState("");
    const [agreed, setAgreed] = useState(false);
    const [done, setDone] = useState(false);
    const navigate = useNavigate();

    const { handleRegister, loading } = useAuth();

    const strength = getStrength(password);
    const match = confirm.length > 0 && password === confirm;
    const mismatch = confirm.length > 0 && password !== confirm;

    // ── Field border helper ──────────────────────────────────────────────────
    const fieldBorder = (key, override) => {
        if (override) return override;
        return focused === key
            ? "border-violet-500/70 shadow-[0_0_0_3px_rgba(139,92,246,0.18)]"
            : "border-white/10";
    };

    // ── Submit ───────────────────────────────────────────────────────────────
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleRegister({ username, email, password });
            setDone(true);
            navigate("/login")
        } catch (err) {
            console.error("Register error:", err);
        }
    };

    if (done) return <SuccessScreen onBack={() => setDone(false)} />;

    return (
        <div className="min-h-screen bg-[#0b0b12] flex items-center justify-center p-6 font-sans relative overflow-hidden">

            {/* Ambient blobs */}
            <div className="absolute -top-[15%] -right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute -bottom-[10%] -left-[5%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.13)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative w-full max-w-[440px]">

                {/* Card */}
                <div className="bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-9">

                    {/* Logo */}
                    <div className="flex items-center gap-2.5 mb-6">
                        <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-[0_4px_16px_rgba(124,58,237,0.4)]">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" />
                                <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="text-white font-bold text-lg tracking-tight">Nucleus</span>
                    </div>

                    <h1 className="text-white text-[25px] font-bold mb-1.5 tracking-tight">Create your account</h1>
                    <p className="text-white/40 text-sm mb-6">Join thousands of teams already using Nucleus</p>

                    {/* Social buttons */}
                    <div className="flex gap-2.5 mb-5">
                        {[{ icon: <GoogleIcon />, label: "Google" }, { icon: <GithubIcon />, label: "GitHub" }].map(({ icon, label }) => (
                            <button key={label} type="button"
                                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl border border-white/10 bg-white/5 text-white/80 text-[13.5px] font-medium cursor-pointer hover:bg-white/10 transition-colors"
                            >
                                {icon} {label}
                            </button>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="flex-1 h-px bg-white/[0.08]" />
                        <span className="text-white/30 text-[11px] font-medium tracking-widest uppercase">or sign up with email</span>
                        <div className="flex-1 h-px bg-white/[0.08]" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3.5">

                        {/* Username */}
                        <div>
                            <label className="block text-white/50 text-[11px] font-semibold tracking-widest uppercase mb-1.5">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Jane Smith"
                                className={`w-full bg-white/[0.07] rounded-xl px-4 py-[11px] text-white text-sm outline-none border transition-all placeholder:text-white/20 autofill:shadow-[0_0_0_100px_#1a1030_inset] autofill:text-white ${fieldBorder("username")}`}
                                onFocus={() => setFocused("username")}
                                onBlur={() => setFocused("")}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-white/50 text-[11px] font-semibold tracking-widest uppercase mb-1.5">Email address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className={`w-full bg-white/[0.07] rounded-xl px-4 py-[11px] text-white text-sm outline-none border transition-all placeholder:text-white/20 ${fieldBorder("email")}`}
                                onFocus={() => setFocused("email")}
                                onBlur={() => setFocused("")}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-white/50 text-[11px] font-semibold tracking-widest uppercase mb-1.5">Password</label>
                            <div className="relative">
                                <input
                                    type={showPw ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Min. 8 characters"
                                    className={`w-full bg-white/[0.07] rounded-xl px-4 py-[11px] pr-11 text-white text-sm outline-none border transition-all placeholder:text-white/20 ${fieldBorder("password")}`}
                                    onFocus={() => setFocused("password")}
                                    onBlur={() => setFocused("")}
                                />
                                <button type="button" onClick={() => setShowPw(!showPw)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-white/40 cursor-pointer flex">
                                    <Eye open={showPw} />
                                </button>
                            </div>

                            {/* Strength meter */}
                            {password.length > 0 && (
                                <div className="mt-2.5">
                                    <div className="flex gap-1 mb-1.5">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className={`flex-1 h-[3px] rounded-full transition-all ${i <= strength ? strengthBar[strength] : "bg-white/10"}`} />
                                        ))}
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/35 text-[11px]">Password strength</span>
                                        <span className={`text-[11px] font-semibold ${strengthColor[strength]}`}>{strengthLabel[strength]}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-3 gap-y-1 mt-2.5">
                                        {requirements.map(({ label, test }) => {
                                            const pass = test(password);
                                            return (
                                                <div key={label} className="flex items-center gap-1.5">
                                                    <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center transition-all border ${pass ? "bg-green-500 border-green-500" : "bg-white/[0.08] border-white/15"}`}>
                                                        {pass && <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l1.8 1.8 3.2-3.6" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                                                    </div>
                                                    <span className={`text-[11px] ${pass ? "text-white/60" : "text-white/30"}`}>{label}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Confirm password */}
                        <div>
                            <label className="block text-white/50 text-[11px] font-semibold tracking-widest uppercase mb-1.5">Confirm password</label>
                            <div className="relative">
                                <input
                                    type={showCf ? "text" : "password"}
                                    value={confirm}
                                    onChange={(e) => setConfirm(e.target.value)}
                                    placeholder="Repeat your password"
                                    className={`w-full bg-white/[0.07] rounded-xl px-4 py-[11px] pr-11 text-white text-sm outline-none border transition-all placeholder:text-white/20 ${mismatch ? "border-red-500/60 shadow-[0_0_0_3px_rgba(239,68,68,0.12)]"
                                        : match ? "border-green-500/60 shadow-[0_0_0_3px_rgba(34,197,94,0.12)]"
                                            : fieldBorder("confirm")
                                        }`}
                                    onFocus={() => setFocused("confirm")}
                                    onBlur={() => setFocused("")}
                                />
                                <button type="button" onClick={() => setShowCf(!showCf)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-white/40 cursor-pointer flex">
                                    <Eye open={showCf} />
                                </button>
                                {match && (
                                    <div className="absolute right-10 top-1/2 -translate-y-1/2 text-green-500">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                                    </div>
                                )}
                            </div>
                            {mismatch && <p className="text-red-400 text-xs mt-1.5">Passwords do not match</p>}
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-2.5 !mt-5">
                            <div
                                onClick={() => setAgreed(!agreed)}
                                className={`w-[18px] h-[18px] rounded-[5px] flex-shrink-0 mt-0.5 border-[1.5px] flex items-center justify-center cursor-pointer transition-all ${agreed ? "border-violet-600 bg-violet-600 shadow-[0_0_10px_rgba(124,58,237,0.4)]" : "border-white/20 bg-white/5"
                                    }`}
                            >
                                {agreed && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5.5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                            </div>
                            <span className="text-white/40 text-[13px] leading-relaxed">
                                I agree to the{" "}
                                <a href="#" className="text-violet-400 no-underline font-medium hover:text-violet-300">Terms of Service</a>
                                {" "}and{" "}
                                <a href="#" className="text-violet-400 no-underline font-medium hover:text-violet-300">Privacy Policy</a>
                            </span>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading || !agreed}
                            className={`w-full py-3.5 px-5 rounded-xl border-none text-sm font-semibold flex items-center justify-center gap-2 transition-all !mt-5 ${agreed
                                ? "bg-gradient-to-br from-violet-600 to-indigo-700 text-white cursor-pointer shadow-[0_4px_20px_rgba(124,58,237,0.35)] hover:brightness-110"
                                : "bg-white/[0.07] text-white/30 cursor-not-allowed"
                                }`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
                                        <path fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Creating account...
                                </>
                            ) : (
                                <>
                                    Create account
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </>
                            )}
                        </button>
                    </form>

                    <p className="text-center text-white/35 text-[13px] mt-5">
                        Already have an account?{" "}
                        <a href="/login" className="text-violet-400 no-underline font-medium hover:text-violet-300">Sign in</a>
                    </p>
                </div>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-4 mt-4">
                    {["SOC 2 Certified", "256-bit SSL", "GDPR Ready"].map(badge => (
                        <span key={badge} className="text-white/20 text-[11px] flex items-center gap-1">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}