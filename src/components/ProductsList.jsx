import React from 'react'
import { Card } from "react-bootstrap";

const ProductsList = ({products}) =>{
   return (
    <div className = "d-flex flex-wrap justify-content-center">
        {
            products.map((prod) => {
                return (
                               <Card key={prod.id} style={{ width: "18rem" }}>
                         <Card.Img variant="top" className="h-50" src={prod.thumbnail} />
                         <Card.Body>
                           <Card.Title>{prod.title}</Card.Title>
                           <Card.Text>
                             {prod.description.length > 50
                               ? prod.description.slice(0, 50) + "..."
                               : prod.description}
                           </Card.Text>
                         </Card.Body>
                       </Card>
                );
              }
             )
        }
    </div>
);
};

export default ProductsList
