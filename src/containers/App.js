import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Cart } from "pages/cart/Cart";
import { CategoriesChart } from "pages/Categories/CategoriesChart";
import { Contact } from "pages/contact/contact";
import { OrderSuccess } from "pages/orderSuccess/OrderSuccess";
import { Shop } from "pages/shop/Shop";

import { Navbar } from "components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<CategoriesChart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<OrderSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
