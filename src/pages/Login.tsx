import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import colors from "@/components/colors";
import { isAuthenticated, loginWithCredentials } from "@/lib/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation() as any;

  if (isAuthenticated()) {
    navigate("/admin", { replace: true });
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const ok = loginWithCredentials(email, password);
    if (ok) {
      const to = location?.state?.from?.pathname || "/admin";
      navigate(to, { replace: true });
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: colors.white }}>
      <div className="w-full max-w-md rounded-2xl border p-6 shadow-sm" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        <h1 className="text-2xl font-semibold" style={{ color: colors.secondaryHex }}>Admin Login</h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(0,0,0,0.6)" }}>
          Sign in with your admin credentials.
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm mb-1" style={{ color: "rgba(0,0,0,0.7)" }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              style={{ borderColor: "rgba(0,0,0,0.15)" }}
              placeholder="your@email.com"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-sm mb-1" style={{ color: "rgba(0,0,0,0.7)" }}>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border px-3 py-2 pr-10"
                style={{ borderColor: "rgba(0,0,0,0.15)" }}
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
                style={{ color: "rgba(0,0,0,0.5)" }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          {error ? (
            <div className="rounded-md px-3 py-2 text-sm" style={{ background: "#fee2e2", color: "#991b1b" }}>{error}</div>
          ) : null}
          <button type="submit" className="w-full rounded-md px-3 py-2 font-semibold" style={{ background: colors.primaryHex, color: colors.white }}>
            Login
          </button>
          <p className="text-xs text-center" style={{ color: "rgba(0,0,0,0.6)" }}>
            Need an account? <Link to="/signup" className="underline" style={{ color: colors.primaryHex }}>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
