import React, { useState, useEffect } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Search from "./Search";
import HomepageBtn from "./HomepageBtn";
import errors from "./errors";
import { ErrorContext, MovieContext } from "./context";
import { fetchLoginStatus } from "./service";

import "./App.css";

function App() {
  const [userState, setUserState] = useState({ isLoggedIn: false });
  const [movieState, setMovieState] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    fetchLoginStatus()
      .then((json) => {
        setUserState({
          isLoggedIn: true,
          username: json.username,
        });
      })
      .catch((err) => {
        setError(errors[err.error || err || "DEFAULT"]);
      });
  }, [userState.username]);

  const login = (username) => {
    setUserState({
      isLoggedIn: true,
      username,
    });
  };

  const logout = () => {
    setUserState({
      isLoggedIn: false,
    });
  };

  let content;
  if (!userState.isLoggedIn) {
    content = (
      <div>
        <Login onLogin={login} />
      </div>
    );
  } else {
    content = (
      <MovieContext.Provider value={[movieState, setMovieState]}>
        <div className="header">
          <HomepageBtn />
          <Logout onLogout={logout} />
        </div>
        <Search />
      </MovieContext.Provider>
    );
  }

  return (
    <div className="App">
      <h1>Your Movie Database</h1>
      <p className="error">{error}</p>
      <ErrorContext.Provider value={[setError]}>
        {content}
      </ErrorContext.Provider>
    </div>
  );
}

export default App;
