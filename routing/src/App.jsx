import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Layout from "./Components/Layout";
import Settings from "./Components/Admin/Settings";
import Profile from "./Components/Admin/Profile";

import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="admin" element={<Admin />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
