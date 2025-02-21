import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Packages from "./pages/Packages";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
            <Route
              path="/packages"
              element={
                <ProtectedRoute>
                  <Packages />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
