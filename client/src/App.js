import React from "react";
import { Home } from "./pages";
import { Header, Banner } from "./components";

import "./App.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Banner />
    </div>
  );
}

export default App;
