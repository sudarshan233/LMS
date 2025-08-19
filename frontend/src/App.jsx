import { Route, Routes } from 'react-router'
import HomePage from "./Pages/HomePage.jsx";
import StudentPage from "./Pages/StudentPage.jsx";

const App = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/student" element={<StudentPage />} />
          </Routes>
      </div>
  );
};

export default App;