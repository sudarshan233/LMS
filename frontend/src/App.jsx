import { Route, Routes } from 'react-router-dom'
import {useState} from "react";
import HomePage from "./Pages/HomePage.jsx";
import MainPage from "./Pages/MainPage.jsx";
import AdminPage from "./Pages/AdminPage.jsx";

const App = () => {
    const [role, setRole] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    return (
      <div>
          <Routes>
              <Route path="/" element={<HomePage role={role} username={username} password={password}
                                                 setRole={setRole} setUserName={setUserName} setPassword={setPassword} setName={setName} />} />
              <Route path="/main" element={<MainPage role={role} name={name}/>} />
              {/*<Route path="/admin" element={<AdminPage role={role} name={name}/>} />*/}
          </Routes>
      </div>
    );
};

export default App;