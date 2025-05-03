import { Await, useLoaderData, useSearchParams } from "react-router";
import { Suspense } from "react";
import { getItems } from "../api";
import Card from "../components/Card"
import {CartItemsContext} from "../components/Layout"
import { useContext } from "react";

export function loader() {
  return { items: getItems() };
}

export default function Items() {
  const itemsPromiseObj = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const {addToCart} = useContext(CartItemsContext);


  function handleFilterChange(category) {
    setSearchParams((prevParams) => {
      if (category === "clear") prevParams.delete("category");
      else prevParams.set("category", category);

      return prevParams;
    });
  }

  function itemsList(items) {
    return (
        <>
            {items.map(item => (
                <div className="Items-action">
                    <Card item={item} />
                    <button onClick={() => addToCart(item)} className="add-to-cart" >Add to cart</button>
                </div>
            ))}
        </>
    )
  }

  function createItemsComp(items) {
    const allCategories = items.map((item) => item.category);
    const categories = [...new Set(allCategories)];
    const filteredItems = items.filter(
      (item) => item.category === categoryFilter
    );

    return (
      <>
        <div className="categories-search">
          {categories.map((category) => (
            <div
              className="category"
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </div>
          ))}
          <div
            className="clear-filters"
            onClick={() => handleFilterChange("clear")}
          >
            Clear filters
          </div>
        </div>
        <div className="items-list">
            {categoryFilter ? itemsList(filteredItems) : itemsList(items)}
        </div>
      </>
    );
  }

  return (
    <div className="items">
      <h1>Items from our suppliers all over the world.</h1>
      <Suspense fallback={<div className="loader"></div>}>
        <Await resolve={itemsPromiseObj.items}>{createItemsComp}</Await>
      </Suspense>
    </div>
  );
}
