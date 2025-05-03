import "./styles/App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Items, {loader as itemsLoader} from "./pages/Items";
import Cart from "./pages/Cart";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<Layout />}>
        <Route path="" errorElement={<NotFound />} element={<Home />} />
        <Route path="items" errorElement={<NotFound />} loader={itemsLoader} element={<Items />} />
        <Route path="cart" errorElement={<NotFound />} element={<Cart />} />
        <Route path="about" errorElement={<NotFound />} element={<About />} />
        <Route path="*" errorElement={<NotFound />} element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

