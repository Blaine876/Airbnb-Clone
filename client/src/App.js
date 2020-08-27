import React from "react";
import { Home, Search } from "./pages";
import { Header, Footer } from "./components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/search">
            <Search />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
