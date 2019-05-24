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
  constructor(props) {
    super(props);
    this.state = {
      product: [],
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
    if (!result) {
      console.log("error");
    }
  };
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
