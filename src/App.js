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
import { IntlProvider } from "react-intl";
import { zh_TW } from "./i18n/zh-TW";
import { en } from "./i18n/en";
import flatten from "flat";

export const AuthContext = React.createContext();
const initialState = {
  isAuthenticated: false,
  username: null,
  token: null,
  language: navigator.language
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  let messages;
  if (state.language === "zh-TW") {
    messages = zh_TW;
  } else {
    messages = en;
  }
  
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
    <IntlProvider
      locale={state.language}
      key={state.language}
      defaultLocale="zh-TW"
      messages={flatten(messages)}
    >
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
    </IntlProvider>
  );
}

export default App;
