import React from 'react';
import {HashRouter} from "react-router-dom";
import AppRoute from "./routes/AppRoute";

function App() {
  return (
    <>
        <HashRouter>
            <AppRoute></AppRoute>
        </HashRouter>
    </>
  );
}

export default App;
