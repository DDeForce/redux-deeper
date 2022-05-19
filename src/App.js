import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useSelector } from "react-redux";

function App() {
  const isCartVisible = useSelector((data) => data.ui.isCartVisible);
  return (
    <Layout>
      {isCartVisible ? <Cart /> : null}
      <Products />
    </Layout>
  );
}

export default App;
