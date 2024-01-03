import { Button, Card } from "react-bootstrap";

import { formatCurrency } from "../utils/formatCurrency";

import { useShoppingCartContext } from "../hooks/useShoppingCartContext";

import capitalizeTitle from "../utils/capitalizeTitle";

type StoreCardProps = {

    id: number,

    imgUrl: string,

    title: string,

    price: number

}

const StoreCard = ({ id, imgUrl, title, price }: StoreCardProps) => {

  const { 
    
    getItemQuantity,
    
    increaseItemQuantity,
    
    decreaseItemQuantity,
    
    removeFromCart
  
  } = useShoppingCartContext();

  const quantity = getItemQuantity(id);

  return (

    <Card className="h-100">

        <Card.Img 
        
            variant="top"
            
            src={ imgUrl }

            style={{ height: "200px", objectFit: "cover" }}
        
        />

        <Card.Body>

          <div className="d-flex justify-content-between align-items-center">

            <h3 className="fs-4">{ capitalizeTitle(title) }</h3>

            <span className="text-muted">{ formatCurrency(price) }</span>

          </div>

        </Card.Body>

        <Card.Footer className="py-3">
          
          {
          
            quantity > 0 ? 
            
            <>
            
              <div className="d-flex justify-content-center align-items-center gap-3 mb-3">

                <Button onClick={ () => increaseItemQuantity(id) }>+</Button>

                <p className="mb-0">{ quantity } In Cart</p>

                <Button onClick={ () => decreaseItemQuantity(id) }>-</Button>

              </div>

              <Button 
              
                className="d-block mx-auto bg-danger border-danger"

                onClick={ () => removeFromCart(id) }
              
              >Remove</Button> 
            
            </> : 
            
            <Button
            
              className="w-100" 
              
              onClick={ () => increaseItemQuantity(id) }
            
            >Add To Cart +</Button>

          }

        </Card.Footer>

    </Card>

  );

}

export default StoreCard;
