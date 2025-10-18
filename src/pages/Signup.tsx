import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import colors from "@/components/colors";
import { loginWithCredentials } from "@/lib/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const ok = loginWithCredentials(email, password);
    if (ok) {
      navigate("/admin", { replace: true });
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: colors.white }}>
      <div className="w-full max-w-md rounded-2xl border p-6 shadow-sm" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        <h1 className="text-2xl font-semibold" style={{ color: colors.secondaryHex }}>Create Account</h1>
        <p className="mt-1 text-sm" style={{ color: "rgba(0,0,0,0.6)" }}>
          Use the provided admin credentials to continue.
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
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
              style={{ borderColor: "rgba(0,0,0,0.15)" }}
              placeholder="Enter password"
            />
          </div>
          {error ? (
            <div className="rounded-md px-3 py-2 text-sm" style={{ background: "#fee2e2", color: "#991b1b" }}>{error}</div>
          ) : null}
          <button type="submit" className="w-full rounded-md px-3 py-2 font-semibold" style={{ background: colors.primaryHex, color: colors.white }}>
            Continue
          </button>
          <p className="text-xs text-center" style={{ color: "rgba(0,0,0,0.6)" }}>
            Already have an account? <Link to="/login" className="underline" style={{ color: colors.primaryHex }}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
