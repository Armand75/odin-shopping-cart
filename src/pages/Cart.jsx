import { useContext } from "react";
import { CartItemsContext } from "../components/Layout";
import Card from "../components/Card";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartItemsContext);

  function itemsList(items) {
    if (items.length === 0) {
      return <h1>No items in your cart!</h1>;
    }
    return (
      <>
        {items.map((item) => (
          <div className="Items-action">
            <Card item={item} />
            <div className="buttons">
              <button
                onClick={() => removeFromCart(item)}
                className="add-to-cart"
              >
                Remove from cart
              </button>
              <button onClick={() => removeFromCart(item)}
                className="add-to-cart" >
                    Buy
                </button>
            </div>
          </div>
        ))}
      </>
    );
  }

  return <div className="cart">{itemsList(cartItems)}</div>;
}
