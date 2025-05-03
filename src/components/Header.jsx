import { NavLink, Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react"
import {CartItemsContext} from "../components/Layout"
    

export default function Header() {
  const {cartItems} = useContext(CartItemsContext);
  return (
    <header>
      <Link to={""}>
        <h1>WorldsWear</h1>
      </Link>
      <ul>
        <li>
          <NavLink
            to="items"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Items
          </NavLink>
        </li>
        <li>
          <NavLink
            to="cart"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Cart <FaShoppingCart />
            <div className="small">{cartItems.length}</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
