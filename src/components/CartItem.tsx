import { Button, Stack } from "react-bootstrap";

import items from "../data/data.json";

import { formatCurrency } from "../utils/formatCurrency";

import { useShoppingCartContext } from "../hooks/useShoppingCartContext";

type CartItemProps = {

    id: number;

    quantity: number;

}

const CartItem = ({ id, quantity }: CartItemProps) => {

    const { removeFromCart } = useShoppingCartContext();

    const item = items.find(item => item.id === id);

    if (item === null) return null;

  return (

    <Stack direction="horizontal" className="mb-3" gap={2}>

        <img 
        
            src={ item?.imgUrl } alt="Alt Img"

            style={{ height: "75px", width: "125px", objectFit: "cover" }}
        
        />

        <div className="me-auto">

            <h3 className="fs-5">
                
                { item?.title } 
                
                <span className="text-muted"> x { quantity }</span>
                
            </h3>

            <span className="text-muted">{ formatCurrency(item?.price || 0) }</span>

        </div>

        <span className="text-muted">{ formatCurrency((item?.price || 0) * quantity) }</span>

        <Button 
        
        variant="outline-danger"

        onClick={ () => removeFromCart(item?.id || 0) }
        
        >X</Button>

    </Stack>

  );

}

export default CartItem;
