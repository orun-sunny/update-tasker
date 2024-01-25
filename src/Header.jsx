import { useState } from "react";

import logo from "./assets/assets/logo.svg";
import moon from "./assets/assets/icons/moon.svg";
import ring from "./assets/assets/ring.svg";
import cart from "./assets/assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  function handleCartShow() {
    setShowCart(true);
  }
  return (
    <header>
      {showCart && <CartDetails onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img src={cart} width="24" height="24" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
