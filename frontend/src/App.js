import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Dashboard from "./components/Admin/Dashboard";
import ItemForm from "./components/Admin/ItemForm";
import ItemList from "./components/User/ItemList";
import ItemDetail from "./components/User/ItemDetail";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/items/new" element={<ItemForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
