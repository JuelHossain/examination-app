import {
  ColorSchemeProvider,
  LoadingOverlay,
  MantineProvider,
  useMantineTheme,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import NotFoundTitle from "./components/shared/NotFound";
import { selectUser } from "./features/auth/authSelector";
import { selectColor } from "./features/exams/examSelector";
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
  const systemColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(systemColorScheme);
  const { colors } = useMantineTheme();

  const getTheme = window.localStorage.getItem("theme");
  const setTheme = (value) => window.localStorage.setItem("theme", value);

  useEffect(() => {
    if (getTheme === "dark" || (!getTheme && systemColorScheme === "dark")) {
      setColorScheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setColorScheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [getTheme, systemColorScheme, colorScheme, colors]);
  const toggleColorScheme = () => {
    if (getTheme) {
      if (getTheme === "light") {
        setColorScheme("dark");
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setColorScheme("light");
        setTheme("light");
      }
    } else {
      if (colorScheme === "dark") {
        document.documentElement.classList.remove("dark");
        setColorScheme("light");
        setTheme("light");
      } else {
        document.documentElement.classList.add("dark");
        setColorScheme("dark");
        setTheme("dark");
      }
    }
  };

  const color = useSelector(selectColor);

  const authChecked = useAuthCheck();
  return !authChecked ? (
    <LoadingOverlay visible overlayBlur={2} />
  ) : (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <div className={`${color?.name}`}>
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
                    <Route path="exam-result" element={<ExamResult />} />
                  </>
                ) : (
                  <>
                    <Route index element={<ExamResult />} />
                    <Route path="exam-result" element={<ExamResult />} />
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
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
