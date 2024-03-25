import "./App.css";

import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextReducer from "./components/ContextReducer";
import MyCheckOuts from "./components/MyCheckOuts";
import NotFound from "./components/NotFound";

function App() {
  return (
    <ContextReducer>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/cart" Component={Cart} />
          <Route exact path="/createuser" Component={Signup} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/mycheckouts" Component={MyCheckOuts} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextReducer>
  );
}

export default App;
