import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useUser from "./hooks/useUser";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PrivateRoute from "./Utils/PrivateRoute";

function App() {
  const { userIsLogged } = useUser();

  useEffect(() => {
    userIsLogged();
  }, [userIsLogged]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
