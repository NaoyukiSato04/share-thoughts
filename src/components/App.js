import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
import Profile from "./Auth/Profile"
import UpdateProfile from "./Auth/UpdateProfile"
import Signup from "./Auth/Signup"
import Login from "./Auth/Login"
import ForgotPassword from "./Auth/ForgotPassword"
import PrivateRoute from "./Auth/PrivateRoute"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/Profile" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
