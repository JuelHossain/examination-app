import { LoadingOverlay } from "@mantine/core";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NotFoundTitle from "./components/shared/NotFound";
import { selectUser } from "./features/auth/authSelector";
import useAuthCheck from "./hooks/useAuthCheck";
import Login from "./pages/auth/Login";
import Protected from "./pages/auth/Protected";
import Unprotected from "./pages/auth/Unprotected";
import CreateExam from "./pages/dashboard/create-exam/CreateExam";
import Dashboard from "./pages/dashboard/Dashboard";
import ExamResult from "./pages/dashboard/exam-result/ExamResult";
import ManageExam from "./pages/dashboard/manage-exam/ManageExam";
import Users from "./pages/dashboard/users/Users";
import Examination from "./pages/examination/Examination";
import Home from "./pages/home/Home";
import User from "./pages/user/User";

function App() {
  const { admin } = useSelector(selectUser) ?? {};
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
          {admin ? (
            <>
              <Route index element={<CreateExam />} />
              <Route path="create-exam" element={<CreateExam />} />
              <Route path="manage-exam" element={<ManageExam />} />
              <Route path="users" element={<Users />} />
            </>
          ) : (
            <>
              <Route index element={<ExamResult />} />
              <Route pathname="exam-result" element={<ExamResult />} />
            </>
          )}
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
      <Route
        path="*"
        element={
          <Protected>
            <NotFoundTitle />
          </Protected>
        }
      />
    </Routes>
  );
}

export default App;
