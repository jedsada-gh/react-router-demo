import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { PROTECTED_PATH, UNPROTECTED_PATH } from "./constants/path.route";
import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/Home";
// Create wrapper component
function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    // if no user (not set in local storage)
    return (
      //redirect to login page
      <Navigate
        to={UNPROTECTED_PATH.LOGIN} //where
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
  // if have uer data in local storage --> redirect to home page
  if (auth.user) {
    return (
      <Navigate to={PROTECTED_PATH.HOME} state={{ from: location }} replace />
    );
  }

  return (
    // render children (login page)
    <>
      <Outlet />
    </>
  );
}

export const Router = () => {
  // combine all routes (no-auth & auth)
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
