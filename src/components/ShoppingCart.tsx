import { Offcanvas } from "react-bootstrap";

import { useShoppingCartContext } from "../hooks/useShoppingCartContext";

import CartItem from "./CartItem";

import items from "../data/data.json";

import { formatCurrency } from "../utils/formatCurrency";

type ShoppingCartProps = {

    isOpen: boolean;

}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {

    const { cartItems, closeCart } = useShoppingCartContext();

    return (

        <Offcanvas show={ isOpen } onHide={ closeCart } placement="end">

            <Offcanvas.Header closeButton>

                <Offcanvas.Title>Cart</Offcanvas.Title>

            </Offcanvas.Header>

            <Offcanvas.Body>{
            
                cartItems.map(cartItem => <CartItem key={ cartItem.id } { ...cartItem } />)
                
            }</Offcanvas.Body>

            <footer className="mb-3 ps-3">

                <h4>Total: 
                        
                    { ` ${formatCurrency(cartItems.reduce((total, currentItem) => {

                        const item = items.find(i => i.id === currentItem.id);

                        return total + (item?.price || 0) * currentItem.quantity;

                    }, 0))}` }
                    
                </h4>

            </footer>

        </Offcanvas>

    );

}

export default ShoppingCart;
