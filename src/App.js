import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "panding",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      const responce = await fetch(
        "https://redux-cart-f8db2-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!responce.ok) {
        throw new Error("Sending cart data failed.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);

  const isCartVisible = useSelector((data) => data.ui.isCartVisible);

  useSelector((state) => state.cart);
  return (
    <Fragment>
      {notification ? (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      ) : null}
      <Layout>
        {isCartVisible ? <Cart /> : null}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
