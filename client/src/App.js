import React from "react";
import { Home } from "./pages";
import { Header, Footer } from "./components";

import "./App.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
