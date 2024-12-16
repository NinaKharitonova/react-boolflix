import React from "react";
import { AppProvider } from "./Context";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <AppProvider>
      <Header />
      <Main />
    </AppProvider>
  );
}

export default App;
