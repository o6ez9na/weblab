import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import MainPage from "./components/main-page/MainPage";
import Login from "./components/auth/Auth";
import Register from "./components/auth/Register";

function App() {
  const [users, setUsers] = useState([]); // Состояние для пользователей

  // Функция для добавления пользователя
  const handleRegister = (username, password) => {
    if (users.some((user) => user.username === username)) {
      return false; // Пользователь уже существует
    }
    setUsers([...users, { username, password }]);
    return true; // Регистрация успешна
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/auth"
            element={<Login users={users} />} // Передаем пользователей
          />
          <Route
            path="/register"
            element={<Register onRegister={handleRegister} />} // Передаем функцию регистрации
          />
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
