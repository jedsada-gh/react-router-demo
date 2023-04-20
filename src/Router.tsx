import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { PROTECTED_PATH, UNPROTECTED_PATH } from "./constants/path.route";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return (
      <Navigate
        to={UNPROTECTED_PATH.LOGIN}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

function UnRequireAuth() {
  const auth = useAuth();
  const location = useLocation();

  if (auth.user) {
    return (
      <Navigate to={PROTECTED_PATH.HOME} state={{ from: location }} replace />
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
}

export const Router = () => {
  return (
    <Routes>
      <Route element={<UnRequireAuth />}>
        <Route path={UNPROTECTED_PATH.LOGIN} element={<LoginPage />} />
      </Route>
      <Route
        path={PROTECTED_PATH.HOME}
        element={
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        }
      />
    </Routes>
  );
};
