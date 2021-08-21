import React, { Component } from "react";
import Header from "./Header";
import isNull from "../functions/NullCheck";

import Swal from "sweetalert2";
class Donate extends Component {
  constructor(props) {
    super(props);
    this.donateModel = {
      name: "",
      email: "",
      phoneNumber: "",
      location: "",
      message: "",
    };
    this.validationModel = {
      name: false,
      email: false,
      phoneNumber: false,
      location: false,
      message: false,
    };
    this.state = {
      donateModel: this.donateModel,
      validationModel: this.validationModel,
      file: "",
      ImagePreviewUrl: "",
    };
  }
  Donate = (event) => {
    event.preventDefault();
    var validation = { ...this.state.validationModel };

    if (isNull(this.state.donateModel.name)) {
      validation.name = true;
    }
    if (isNull(this.state.donateModel.email)) {
      validation.email = true;
    }
    if (isNull(this.state.donateModel.phoneNumber)) {
      validation.phoneNumber = true;
    }
    if (isNull(this.state.donateModel.location)) {
      validation.location = true;
    }
    if (isNull(this.state.donateModel.message)) {
      validation.message = true;
    }

    if (
      validation.name == false &&
      validation.email == false &&
      validation.phoneNumber == false &&
      validation.location == false &&
      validation.message == false
    ) {
      console.log("Submitted");
    } else {
      this.setState({
        validationModel: validation,
      });
    }

    // if (this.isModelNull() === false) {
    //   Swal.fire({
    //     title: " Please Fill Fields !",
    //     icon: "warning",
    //     iconColor: "Orange",
    //     // html:
    //     //   "You can use <b>bold text</b>, " +
    //     //   '<a href="//sweetalert2.github.io">links</a> ' +
    //     //   "and other HTML tags",
    //     // showCloseButton: true,
    //     // showCancelButton: true,
    //     // focusConfirm: false,
    //     confirmButtonText: '<i class="fa fa-thumbs-up" ></i> OK!',
    //     confirmButtonColor: "#36122d",
    //     // confirmButtonAriaLabel: "Thumbs up, great!",
    //     // cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    //     // cancelButtonAriaLabel: "Thumbs down",
    //   });
    //   // Swal.fire("Please Fill All Fields", "", "warning");
    //   // return;
    //   // Swal.fire({
    //   //   title: "Warning!",
    //   //   text: "Please Fill All The Fields! ⚠️",
    //   //   type: "warning",
    //   //   // showCancelButton: true,
    //   //   // Background color of the "Confirm"-button. The default color is #3085d6
    //   //   confirmButtonColor: "#36122d",
    //   //   // Background color of the "Cancel"-button. The default color is #aaa
    //   //   // cancelButtonColor: "Crimson",
    //   //   confirmButtonText: "OK",
    //   // });
    //   // .then((result) => {
    //   //   if (result.value) {
    //   //     Swal.fire({
    //   //       type: "success",
    //   //       title: "Deleted!",
    //   //       text: "Your file has been deleted.",
    //   //       timer: 2000,
    //   //       showCancelButton: false,
    //   //       showConfirmButton: false,
    //   //     });
    //   //   }
    //   // }

    //   // );
    // } else {
    //   console.log("filled");
    // }
  };
  isModelNull = () => {
    let NullCount = 0;
    if (isNull(this.state.donateModel.name)) {
      NullCount += 1;
    }
    if (isNull(this.state.donateModel.email)) {
      NullCount += 1;
    }
    if (isNull(this.state.donateModel.phoneNumber)) {
      NullCount += 1;
    }
    if (isNull(this.state.donateModel.location)) {
      NullCount += 1;
    }
    if (isNull(this.state.donateModel.message)) {
      NullCount += 1;
    }

    if (NullCount > 0) return true;
    return false;
  };
  handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState(
      {
        donateModel: {
          ...this.state.donateModel,
          [name]: value,
        },
        validationModel: {
          ...this.state.validationModel,
          [name]: false,
        },
      },
      () => {
        console.log(this.state.donateModel, "Modeeeeel");
      }
    );
  };
  handleImageChange = (event) => {
    event.preventDefault();
    console.log("url !", this.state.ImagePreviewUrl);
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState(
        {
          file: file,
          ImagePreviewUrl: reader.result,
        },
        () => {
          console.log("url", this.state.ImagePreviewUrl);
        }
      );
    };
    if (event.target.files[0] instanceof Blob) {
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  render() {
    return (
      <div>
        <Header />
        <div class="container contact-form mt-4">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6%",
            }}
          >
            {/* <img src={Contact_pic} alt="rocket_contact" /> */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f7f1f1",
                width: "100px",
                height: "73px",
                borderRadius: "50px",
              }}
            >
              <label htmlFor="file-update">
                {!isNull(this.state.ImagePreviewUrl) ? (
                  <img
                    src={this.state.ImagePreviewUrl}
                    style={{ width: "100%" }}
                  ></img>
                ) : (
                  <i
                    class="fa fa-image fa-3x"
                    type="file"
                    style={{ color: "purple" }}
                    aria-hidden="true"
                  ></i>
                )}
              </label>
              <input
                style={{ display: "none" }}
                id="file-update"
                type="file"
                name="file"
                onChange={(event) => {
                  this.handleImageChange(event);
                }}
                // value={this.state.donateModel.name}
                // onChange={this.handleChange}
                // style={{ boxShadow: "0px 8px 15px rgb(0 0 0 / 11%)" }}
              />
            </div>
          </div>
          <div>
            <form
              onSubmit={(event) => {
                this.Donate(event);
              }}
            >
              <h3>Donate Whatever You Want</h3>
              <div class="row">
                <div className="col-md-4 col-sm-12 mt-3">
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    class="form-control"
                    placeholder="Your Name *"
                    value={this.state.donateModel.name}
                    onChange={this.handleChange}
                    style={{ boxShadow: "0px 8px 15px rgb(0 0 0 / 11%)" }}
                  />
                  {this.state.validationModel.name === true ? (
                    <i
                      class="fa fa-exclamation-triangle"
                      style={{
                        color: "red",
                        margin: "10px",
                        position: "absolute",
                        marginLeft: "92%",
                      }}
                    ></i>
                  ) : (
                    ""
                  )}
                </div>

                <div className=" col-md-4 col-sm-12 mt-3 ">
                  <input
                    type="text"
                    name="email"
                    class="form-control"
                    placeholder="Your Email *"
                    value={this.state.donateModel.email}
                    onChange={this.handleChange}
                    style={{ boxShadow: "0px 8px 15px rgb(0 0 0 / 11%)" }}
                  />
                  {this.state.validationModel.email === true ? (
                    <i
                      class="fa fa-exclamation-triangle"
                      style={{
                        color: "red",
                        margin: "10px",
                        position: "absolute",
                        marginLeft: "92%",
                      }}
                    ></i>
                  ) : (
                    ""
                  )}
                </div>

                <div className="col-md-4 col-sm-12 mt-3 ">
                  <input
                    type="text"
                    name="phoneNumber"
                    class="form-control"
                    placeholder="Your Phone Number *"
                    value={this.state.donateModel.phoneNumber}
                    onChange={this.handleChange}
                    style={{ boxShadow: "0px 8px 15px rgb(0 0 0 / 11%)" }}
                  />
                  {this.state.validationModel.phoneNumber === true ? (
                    <i
                      class="fa fa-exclamation-triangle"
                      style={{
                        color: "red",
                        margin: "10px",
                        position: "absolute",
                        marginLeft: "92%",
                      }}
                    ></i>
                  ) : (
                    ""
                  )}
                </div>

                <div className="row" style={{ display: "contents" }}>
                  <div className="col-md-4 col-sm-12 mt-3 ">
                    {" "}
                    <input
                      type="text"
                      name="location"
                      class="form-control"
                      placeholder="Your Location *"
                      value={this.state.donateModel.location}
                      onChange={this.handleChange}
                      style={{ boxShadow: "0px 8px 15px rgb(0 0 0 / 11%)" }}
                    />
                    {this.state.validationModel.location === true ? (
                      <i
                        class="fa fa-exclamation-triangle"
                        style={{
                          color: "red",
                          margin: "10px",
                          position: "absolute",
                          marginLeft: "92%",
                        }}
                      ></i>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-md-8 col-sm-12 mt-3 ">
                    <textarea
                      name="message"
                      class="form-control"
                      placeholder="Description... "
                      style={{ width: "100%" }}
                      onChange={this.handleChange}
                      style={{ boxShadow: "0px 8px 15px rgb(0 0 0 / 11%)" }}
                    ></textarea>
                    {this.state.validationModel.message === true ? (
                      <i
                        class="fa fa-exclamation-triangle"
                        style={{
                          color: "red",
                          margin: "10px",
                          position: "absolute",
                          marginLeft: "92%",
                          marginTop: "18px",
                        }}
                      ></i>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="row" style={{ display: "contents" }}>
                  <div
                    class="col-md-12 col-sm-12 mt-3"
                    style={{ position: "fixed", left: "0%", bottom: "6%" }}
                  >
                    <input
                      type="submit"
                      name="btnSubmit"
                      class="btnContact"
                      value="Donate"
                      style={{
                        width: "200px",
                        height: "50px",
                        padding: "0px",
                        boxShadow: "0px 8px 15px rgb(0 0 0 / 33%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Donate;
