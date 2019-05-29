import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
 
} from "mdbreact";
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
          <a href="product-details">
          <MDBCardImage class="card-img-top"    
            cascade
            src={BASE_URL + obj.thumbnail}
            top
            alt="sample photo"
            overlay="white-slight"
            max height="304.234"
            max width="304.219"
           
          />
          </a>
          <MDBCardBody cascade className="text-center">
            <MDBCardTitle>
              <strong>
                <a href="login" className="c">{obj.name}</a>
              </strong>
            </MDBCardTitle>
            <MDBCardText>
              <span className="float-center font-weight-bold">
                <strong>${obj.price}</strong>
              </span>
              <MDBBtn>
                <span class="float-right font-weight-bold">
                  <a
                    href="product-details"
                    class="active"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Add to cart"
                    size="large"
                  >
                    <i class="fas fa-shopping-cart black-text ml-3" />
                  </a>
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
