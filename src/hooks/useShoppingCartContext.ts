import { useContext } from "react";

import { Context } from "../context/ShoppingCartContext";

export const useShoppingCartContext = () => useContext(Context);
