import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNav from "./components/PageNav";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
