import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
 
} from "mdbreact";
import { Link } from "react-router-dom";
import React, { Component } from "react";
// import Sidebar from "../.../container/Layout/Sidebar"
import BASE_URL from "../../BASE_URL ";
class ProductComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { product, obj } = this.props;
    return (
      // <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
      <MDBCard  >
           <Link to={"product-details/" + obj._id}>
          <MDBCardImage class="card-img-top"    
            cascade
            src={BASE_URL + obj.thumbnail}
            top
            alt="sample photo"
            overlay="white-slight"
            max height="304.234"
            max width="304.219"
            data-toggle="tooltip"
                      data-placement="top"
                      title="view details"
          />
      </Link>
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>
              <strong className="product-name">
                  <Link to={"product-details/" + obj._id} className="product-name">{obj.name}</Link>
              </strong>
            </MDBCardTitle>
            <MDBCardText>
              <span className="product-price">
                <strong>${obj.price}</strong>
              </span>
              <MDBBtn>
                <span >
                  
                   <Link
                      to={"product-details/" + obj._id}
                      // className="product-cart"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to cart"
                    >
                      <i className="fas fa-shopping-cart" />
                    </Link>
                </span>
              </MDBBtn>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        
      // </MDBCol>
      /* <div className="container-fluid content-row" >
            <div class="column">
             <Col>
             <div class="col-sm-12 col-lg-2">
             <Row>
             <div class="card h-100">

                         <CardBody className="container" >

                       <Card >
                    <CardImg  class="card-img-top"top width="100%" alt="Card image cap" src={BASE_URL + obj.thumbnail}  className="ig" />
                   <CardBody>
                 <CardTitle>{obj.name}</CardTitle>
                    <CardSubtitle>${obj.price}</CardSubtitle>

                      <Button>Add to Cart</Button>
                   </CardBody>

                  </Card>
              </CardBody>

              </div>
     </Row>
           </div>
          </Col>

        </div>
     </div > */
    );
  }
}
export default ProductComponent;
