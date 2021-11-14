import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useUser from "./hooks/useUser";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const { userIsLogged } = useUser();

  useEffect(() => {
    userIsLogged();
  }, [userIsLogged]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
