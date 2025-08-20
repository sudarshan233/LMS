import { Route, Routes } from 'react-router'
import {useState} from "react";
import HomePage from "./Pages/HomePage.jsx";
import StudentPage from "./Pages/StudentPage.jsx";

const App = () => {
    const [role, setRole] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
      <div>
          <Routes>
              <Route path="/" element={<HomePage setRole={setRole} setUserName={setUserName} setPassword={setPassword} />} />
              <Route path="/student" element={<StudentPage/>} />
              {role === "student" ? <StudentPage /> : null}
          </Routes>
      </div>
    );
};

export default App;