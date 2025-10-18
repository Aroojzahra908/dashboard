const AUTH_KEY = "app_auth_ok";

export const getConfiguredEmail = (): string => {
  const fromEnv = import.meta.env.VITE_SHARED_EMAIL as string | undefined;
  return (fromEnv && String(fromEnv)) || "panabotics@gmail.com";
};

export const getConfiguredPassword = (): string => {
  const fromEnv = import.meta.env.VITE_SHARED_PASSWORD as string | undefined;
  return (fromEnv && String(fromEnv)) || "panabotics@123";
};

export const isAuthenticated = (): boolean => {
  try {
    return localStorage.getItem(AUTH_KEY) === "true";
  } catch {
    return false;
  }
};

export const loginWithCredentials = (email: string, password: string): boolean => {
  const expectedEmail = getConfiguredEmail().trim().toLowerCase();
  const expectedPassword = getConfiguredPassword();
  const ok = email.trim().toLowerCase() === expectedEmail && password === expectedPassword;
  try {
    if (ok) localStorage.setItem(AUTH_KEY, "true");
  } catch {}
  return ok;
};

export const logout = (): void => {
  try {
    localStorage.removeItem(AUTH_KEY);
  } catch {}
};
