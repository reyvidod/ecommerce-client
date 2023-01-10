import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ArticleList from "./pages/ArticleList";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="article">
            <Route path="" element={<ArticleList />} />
          </Route>
          <Route path="product">
            <Route path="" element={<ProductList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
