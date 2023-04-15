import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppShell } from "@mantine/core";

//pages
import HomePage from "./pages/home/home";
import ProductPage from "./pages/product/product";

//components
import Navbar from "./components/navbar/navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
