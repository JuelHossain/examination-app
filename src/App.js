import { LoadingOverlay } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import Login from "./pages/auth/Login";
import Protected from "./pages/auth/Protected";
import Unprotected from "./pages/auth/Unprotected";
import CreateExam from "./pages/dashboard/create-exam/CreateExam";
import Dashboard from "./pages/dashboard/Dashboard";
import ManageExam from "./pages/dashboard/manage-exam/ManageExam";
import Examination from "./pages/examination/Examination";
import Home from "./pages/home/Home";
import User from "./pages/user/User";

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
        <Route index element={<Examination />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<CreateExam />} />
          <Route path="create-exam" element={<CreateExam />} />
          <Route path="manage-exam" element={<ManageExam />} />
        </Route>
        <Route path="/examination" element={<Examination />} />
        <Route path="/user" element={<User />} />
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
