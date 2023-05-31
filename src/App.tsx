import "./App.css";
import { AuthProvider } from "./auth/auth.provider";
import { Router } from "./Router";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
