import React from "react";
import Greetings from "./Greetings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greetings />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
