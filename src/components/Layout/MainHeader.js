import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../store/firebase.config";

const MainHeader = (props) => {
  // const recipesCollectionRef = collection(db, "test");

  // const testFBaase = () => {
  //   addDoc(recipesCollectionRef, { test1: "proslo2" });
  // };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
            {/* <button onClick={(e) => testFBaase(e)}>Test firebase</button> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
