import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/Navbar";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Tickets from "./pages/tickets/Tickets";
import EditTicket from './pages/tickets/EditTicket'

import RadioDashboard from "./pages/dashboard/RadioDashboard";
import NewRadio from "./pages/radios/NewRadio";
import Radio from "./pages/radios/Radio";
import EditRadio from "./pages/radios/EditRadio";


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
                path="new-radio"
                element={user ? <NewRadio /> : <Navigate to="/login" />}
              />
              <Route
                path="radios"
                element={user ? <RadioDashboard /> : <Navigate to="/login" />}
              />
               <Route
                path="radios/:id"
                element={user ? <Radio /> : <Navigate to="/login" />}
              />
                <Route
                path="radio-edit/:id"
                element={user ? <EditRadio /> : <Navigate to="/login" />}
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
