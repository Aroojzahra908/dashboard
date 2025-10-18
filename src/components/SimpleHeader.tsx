import { Link, useLocation, useNavigate } from "react-router-dom";
import colors from "@/components/colors";
import { isAuthenticated, logout } from "@/lib/auth";

const SimpleHeader = () => {
  const authed = isAuthenticated();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="w-full bg-white border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={authed ? "/admin" : "/login"} className="flex items-center gap-2">
          <img src="/logo.svg" alt="Panabotics" className="h-10 w-auto" />
          <span className="hidden sm:block text-sm font-semibold" style={{ color: colors.secondaryHex }}>Panabotics</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          {authed ? (
            <>
              <Link to="/admin" className="px-3 py-1.5 rounded-md text-sm font-medium" style={{ color: colors.secondaryHex }}>Admin</Link>
              <button
                onClick={() => { logout(); navigate("/login", { replace: true, state: { from: location } }); }}
                className="px-3 py-1.5 rounded-md text-sm font-semibold shadow-sm"
                style={{ background: colors.primaryHex, color: colors.white }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1.5 rounded-md text-sm font-medium" style={{ color: colors.secondaryHex }}>Login</Link>
              <Link to="/signup" className="px-3 py-1.5 rounded-md text-sm font-semibold shadow-sm" style={{ background: colors.primaryHex, color: colors.white }}>Sign up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default SimpleHeader;
