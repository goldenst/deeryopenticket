import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Tickets from "./pages/tickets/Tickets";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EditTicket from './pages/tickets/EditTicket'

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <Router>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={user ? <Dashboard /> : <Navigate to="login" />}
              />
              <Route
                path="create"
                element={user ? <Create /> : <Navigate to="/login" />}
              />
              <Route
                path="Tickets/:id"
                element={user ? <Tickets /> : <Navigate to="/login" />}
              />
              <Route
                path="Tickets-edit/:id"
                element={user ? <EditTicket /> : <Navigate to="/login" />}
              />
              <Route
                path="signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
              <Route
                path="login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
