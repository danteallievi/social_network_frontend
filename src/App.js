import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import useUser from "./hooks/useUser";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  const { userIsLogged } = useUser();

  useEffect(() => {
    userIsLogged();
  }, [userIsLogged]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="/register" exact element={<RegisterPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route
            exact
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
