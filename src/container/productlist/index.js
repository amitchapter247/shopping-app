import React ,{ Component} from 'react';
import axios from "axios";
import{Container , CardBody  , Card} from 'reactstrap';
import ProductComponent from "../../components/productlist/index";



class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    }
  }
  componentDidMount = async () => {

    const response = await axios.get('http://192.168.2.107:8080/getProduct')
    console.log(response);
    const result = response.data.result;

    this.setState({ product: result })
    if (!result) {
      console.log("error");
    }
  };
  render() {
    const { product } = this.state;

    return (
      <>
       
          <CardBody >
          
                 {product && product.length ? product.map(product => {
          return <ProductComponent obj={product} key={product._id} />;
        }) : null}
         
            </CardBody> 

    
      </>

         );
       }
     }
export default ProductList;