import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { actionTypes } from "./action";
import { reducer } from "./reducer";

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  username: null,
  token: null
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    if (username && token) {
      dispatch({
        type: actionTypes.LOGIN,
        payload: {
          username: username,
          token: token
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {state.isAuthenticated ? (
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="*" component={Dashboard} />
          </Switch>
        </Router>
      ) : (
        <Router>
          <Route exact path="/" component={Login} />
          <Redirect to="/" />
        </Router>
      )}
    </AuthContext.Provider>
  );
}

export default App;
