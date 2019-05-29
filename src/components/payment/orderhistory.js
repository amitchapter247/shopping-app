import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class OrderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Isopen: false,
    };
  }
  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("cliked");
  };

  // onSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.delete(
  //       "http://192.168.2.243:8080/delete/" + this.props.obj._id
  //     );
  //     console.log(res);
  //     alert("Product Deleted Succesfully");
  //     this.props.history.push("./product-list");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  render() {
    console.log(this.props);
    return (
      <tr className="animate">
        <td />
        <td align="center">
          {/* <img src={BASE_URL + this.props.obj.file} alt="NO Image" width="130px" height="130px" onClick={this.handleShowDialog} />
          {this.state.isOpen && (
            <dialog
              className="dialog animate"
              style={{ position: "absolute" }}
              open
              onClick={this.handleShowDialog}
            >
              <img
                className="image1"
                alt="NO Image"
                src={BASE_URL + this.props.obj.file}
                onClick={this.handleShowDialog}
                alt="no image"
              />
            </dialog>
          )} */}
        </td>
        <td className="c" align="center">  Hello
          {/* {this.props.obj.ptitle} */}
        </td>
        <td className="c" align="center">  Hello o
          {/* {this.props.obj.pdesc} */}
        </td>
        <td align="center">
          <i className="fas fa-rupee-sign" /> Hewf
          {/* {this.props.obj.pprice.toFixed(2)} */}
        </td>
        <td align="center">
          <i className="fas fa-rupee-sign" />ewrewfrew
           {/* {this.props.obj.sprice.toFixed(2)} */}
        </td>
        <td>
          <div align="center">
            {/* 

            <Link to={"/update/" + this.props.obj._id}>
              <OverlayTrigger
                key="top"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-top">
                    <strong>Edit</strong>
                  </Tooltip>
                }
              >
                <Button variant="outline-success">
                  <i className="fas fa-edit" />
                </Button>
              </OverlayTrigger>
            </Link>

            &nbsp;&nbsp; &nbsp;
          <OverlayTrigger
              key="top"
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-top">
                  <strong>Delete</strong>
                </Tooltip>
              }
            >
              <Button

                variant="outline-danger"
                onClick={e =>
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then(result => {
                    if (result.value) {
                      Swal.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                      ) && this.props.onDelete(this.props.obj._id);
                    }
                  })}
              >
                <i className="fas fa-trash-alt" />
              </Button>
            </OverlayTrigger> */}
          </div>{" "}
        </td>
      </tr>
    );
  }
}
export default withRouter(OrderComponent);
