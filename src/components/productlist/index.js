import React, {  Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, 
  Button,
  CardHeader,
  CardFooter,
  Row,Col,
   Navbar,
  NavbarBrand,
 Input, FormGroup ,Container
} from 'reactstrap';

const BASE_URL = 'http://192.168.2.107:8080/';


class ProductComponent extends Component {
render() {
  
  return (
    <div className="container-fluid content-row" >
      <div class="column">
          <Col>
        <div class="col-sm-12 col-lg-2">
        <Row>
          <div class="card h-100">
          
                    <CardBody className="container" >
        
      
                  <Card >
              <CardImg  class="card-img-top"top width="100%" alt="Card image cap" src={BASE_URL + this.props.obj.thumbnail}  className="ig" />
              <CardBody>
                <CardTitle>{this.props.obj.name}</CardTitle>
                <CardSubtitle>${this.props.obj.price}</CardSubtitle>
              
                <Button>Add to Cart</Button>
              </CardBody>
      
      
            </Card>
         </CardBody>
       
      
        </div>
</Row>
      </div>
     </Col>

    </div>
</div >

      
  );
  }
};

export default ProductComponent;