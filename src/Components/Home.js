import React, { Component } from "react";
import card_pic from "../images/logo.png";

import Header from "./Header";
// import "../mystyles.css";
import { withRouter } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick = (event) => {
    this.props.history.push("/" + event.target.name);
  };

  render() {
    return (
      <div>
        <Header />
        <div class="container-fluid">
          <div
            class="row"
            id="home-animate"
            style={{
              border: "none",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              class="col-sm-6 mt-3"
              style={{ display: "flex", padding: "0px" }}
            >
              <div class="img-square-wrapper">
                <img
                  class=""
                  src={card_pic}
                  alt="Card image cap"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            {/* <div class="flex-column "style={{;'display:"flex",alignItems:"center",alignSelf:"center"}}> */}
            <div
              class="col-sm-6"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div id="home_text">
                <div class="card-body">
                  <h4 class="card-title">
                    Perfect Place for{" "}
                    <span style={{ color: "#ff681c" }}>Needy!</span>{" "}
                  </h4>
                  <p class="card-text mb-4">
                    Donate Any thing You want .So We Can Help the Needy
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <div class="form-group">
                      <input
                        type="button"
                        name="donate"
                        id="HomeBtn2"
                        //   style={{
                        //     borderRadius: "10px",
                        //     border: "none",
                        //     backgroundColor: "rgb(115 63 169)",
                        //     color: "white",
                        //     height: "35px",
                        //     width: "100px",
                        //   }}
                        onClick={(event) => this.handleClick(event)}
                        value="Donate"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="button"
                        name="needy"
                        id="HomeBtn"
                        //   style={{
                        //     borderRadius: "10px",
                        //     border: "none",
                        //     backgroundColor: "rgb(255, 104, 28)",
                        //     color: "white",
                        //     height: "35px",
                        //     width: "100px",
                        //   }}
                        onClick={(event) => this.handleClick(event)}
                        value="I am Needy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div>
      <Button variant="primary" size="sm">
        ADD Book
      </Button>{' '}
    
    </div> */}
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
