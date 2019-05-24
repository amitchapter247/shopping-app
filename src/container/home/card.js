<<<<<<< HEAD
import React, { Component } from "react";
import axios from "axios";
import Slider from "react-slick";
import CardComponent from "../../components/home/card";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: true
};
const settings1 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipeToSlide: true,
  arrows: true,
  centerMode: true,
  centerPadding: "40px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};
const popularvisit = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 5000,
  cssEase: "linear"
};

class CardContainer extends Component {
=======
import Axios from "axios";
import React, { Component } from "react";

import MultipleComponent from "../../components/home/card";

class MultipleItems extends Component {
>>>>>>> ad64d195fd3ea5778a48713aeae963b155477fd4
  constructor(props) {
    super(props);
    this.state = {
      product: [],
<<<<<<< HEAD
      products: [],
      data: []
    };
  }
  componentDidMount = async () => {
    const response = await axios.get("http://192.168.2.107:8080/getProduct");
    const result = response.data.result;
    console.log("result =====> ", result);
    this.setState({ product: result });
    if (!result) {
      console.log("error");
    }
    const res = await axios.get("http://192.168.2.107:8080/getproduct");
    const result1 = res.data.result;
    console.log("result =====> ", result1);
    this.setState({ products: result1 });
    if (!result) {
      console.log("error");
    }

    const response1 = await axios.get("http://192.168.2.107:8080/visitProduct");
    const result2 = response1.data.result;
    this.setState({ data: result2 });
=======
      isLoading: false,
      errors: {},
    };
  }
  componentDidMount = async () => {
    // const data= {name , price, thumbnail};
   const response=  await Axios.get('http://192.168.2.112:8080/getItem/:id')
    const result = response.data.result;
    this.setState({ product: result });
    console.log(result);
>>>>>>> ad64d195fd3ea5778a48713aeae963b155477fd4
    if (!result) {
      console.log("error");
    }
  };
<<<<<<< HEAD
  render() {
    const { product } = this.state;
    const { products } = this.state;
    const { data } = this.state;
    return (
      <>
        <div>
          <h4 className={"h4"}> Featured products</h4>
          <Slider {...settings}>
            {product && product.length
              ? product.map(product => {
                  return <CardComponent obj={product} key={product._id} />;
                })
              : null}
          </Slider>

          <div className={"multi1"}>
            <h4 className={"h4"}> Recently visited products</h4>
            <Slider {...settings1}>
              {products && products.length
                ? products.map(products => {
                    return <CardComponent obj={products} key={products._id} />;
                  })
                : null}
            </Slider>
          </div>

          <div className={"rowgap"} />

          <div className={"multi"}>
            <h4 className={"h4"}> Popular products</h4>
            <Slider {...popularvisit}>
              {data && data.length
                ? data.map(data => {
                    return <CardComponent obj={data} key={data._id} />;
                  })
                : null}
            </Slider>
          </div>
        </div>
      </>
    );
  }
}
export default CardContainer;
=======

  // autoLogin = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     this.props.history.push("/product-list");
  //   }
  // };
  render() {
    const { product } = this.state;
    return (
      <MultipleComponent
      products={products}
      />
    );
  }
}

export default MultipleItems;
>>>>>>> ad64d195fd3ea5778a48713aeae963b155477fd4
