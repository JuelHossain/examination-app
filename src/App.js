import { LoadingOverlay } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import Login from "./pages/auth/Login";
import Protected from "./pages/auth/Protected";
import Unprotected from "./pages/auth/Unprotected";
import Home from "./pages/home/Home";

function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <LoadingOverlay visible overlayBlur={2} />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <Protected>
            <Home />
          </Protected>
        }
      >
        {/* <Route index element={<Team />} />
          <Route path="/teams" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/dashboard" element={<User />} /> */}
      </Route>

      <Route
        path="/login"
        element={
          <Unprotected>
            <Login />
          </Unprotected>
        }
      />
    </Routes>
  );
}

export default App;
