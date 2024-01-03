import { Col, Row } from "react-bootstrap";

import items from "../data/data.json";

import StoreItem from "../components/StoreItem";

const Store = () => {

  return (

    <div>

        <h2>Store</h2>
        
        <Row xs={ 1 } md={ 2 } lg={ 3 } className="g-3">{ 
        
        items.map(item => <Col key={ item.id }>

            <StoreItem { ...item } />

        </Col>)
        
        }</Row>

    </div>

  );

}

export default Store;
