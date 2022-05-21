import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sentCartData = async () => {
      const responce = await fetch(
        "https://redux-cart-f8db2-default-rtdb.firebaseio.com/",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!responce.ok) {
        throw new Error("Sending cart data failed.");
      }

      const responceData = await responce.json();
    };
  }, [cart]);

  const isCartVisible = useSelector((data) => data.ui.isCartVisible);

  useSelector((state) => state.cart);
  return (
    <Layout>
      {isCartVisible ? <Cart /> : null}
      <Products />
    </Layout>
  );
}

export default App;
