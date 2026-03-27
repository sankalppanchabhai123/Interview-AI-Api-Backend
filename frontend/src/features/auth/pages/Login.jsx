import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom"

// ── Icons ──────────────────────────────────────────────────────────────────────
const EyeIcon = ({ open }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {open ? (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ) : (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    )}
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

// ── Component ──────────────────────────────────────────────────────────────────
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  const navigate = useNavigate()

  const { handleLogin, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin({ email, password });
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  // Shared input class — dynamic focus ring
  const inputClass = (focused) =>
    `w-full bg-white/[0.07] rounded-xl px-4 py-3 text-white text-sm outline-none border transition-all placeholder:text-white/20
    ${focused
      ? "border-violet-500/70 shadow-[0_0_0_3px_rgba(139,92,246,0.18)]"
      : "border-white/10"
    }`;

  return (
    <div className="min-h-screen bg-[#0b0b12] flex items-center justify-center p-6 font-sans relative overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute -top-[10%] -left-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[10%] -right-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative w-full max-w-[420px]">

        {/* Card */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-9">

          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-7">
            <div className="w-[38px] h-[38px] rounded-[10px] bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-[0_4px_16px_rgba(124,58,237,0.4)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" />
                <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">Nucleus</span>
          </div>

          {/* Heading */}
          <h1 className="text-white text-[26px] font-bold mb-1.5 tracking-tight">Welcome back</h1>
          <p className="text-white/45 text-sm mb-7">Sign in to continue to your workspace</p>

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
            <span className="text-white/30 text-[11px] font-medium tracking-widest uppercase">or</span>
            <div className="flex-1 h-px bg-white/[0.08]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div>
              <label className="block text-white/55 text-[11px] font-semibold tracking-widest uppercase mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                placeholder="you@example.com"
                className={inputClass(emailFocused)}
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-white/55 text-[11px] font-semibold tracking-widest uppercase">
                  Password
                </label>
                <a href="#" className="text-violet-400 text-xs no-underline font-medium hover:text-violet-300">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPassFocused(true)}
                  onBlur={() => setPassFocused(false)}
                  placeholder="••••••••"
                  className={`${inputClass(passFocused)} pr-11`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-white/40 cursor-pointer flex items-center p-0.5"
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2.5">
              <div
                onClick={() => setRemember(!remember)}
                className={`w-[18px] h-[18px] rounded-[5px] flex-shrink-0 border-[1.5px] flex items-center justify-center cursor-pointer transition-all ${remember
                  ? "border-violet-600 bg-violet-600 shadow-[0_0_10px_rgba(124,58,237,0.45)]"
                  : "border-white/20 bg-white/5"
                  }`}
              >
                {remember && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="text-white/45 text-[13.5px] select-none">Keep me signed in</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 px-5 rounded-xl border-none bg-gradient-to-br from-violet-600 to-indigo-700 text-white text-sm font-semibold cursor-pointer shadow-[0_4px_20px_rgba(124,58,237,0.4)] flex items-center justify-center gap-2 transition-all hover:brightness-110 ${loading ? "opacity-80" : "opacity-100"}`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
                    <path fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </form>

          <p className="text-center text-white/35 text-[13px] mt-5">
            Don't have an account?{" "}
            <a href="/register" className="text-violet-400 no-underline font-medium hover:text-violet-300">
              Create one free
            </a>
          </p>
        </div>

        {/* Footer note */}
        <p className="text-center text-white/15 text-[11px] mt-4">
          Protected by 256-bit encryption · SOC 2 certified
        </p>
      </div>
    </div>
  );
}