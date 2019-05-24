import React, { Component } from "react";

const BASE_URL = "http://192.168.2.107:8080/";

export default class CardComponent extends Component {
  render() {
    return (
      <>
      <div className={"animate"}>
        <div className="container ">
          <div>
            <img
              src={BASE_URL + this.props.obj.thumbnail}
              alt={"No img"}
              className="ig"
            />
            <h5 className="textcenter">{this.props.obj.name}</h5>
            <h5 className="textcenter">{this.props.obj.price}</h5>
          </div>
        </div>
        </div>
      </>
    );
  }
}
