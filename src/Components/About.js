import React from "react";
import Header from "./Header";
import card_pic from "../images/mission.png";
import { connect } from "react-redux";
const About = (props) => {
  return (
    <div>
      <Header />

      <div class="container-fluid">
        <div id="about_about">
          <h3
            style={{
              paddingTop: "3%",
              fontFamily: "ProximaNovaSoftW03-Semibold",
            }}
          >
            About Us {props.myname}
          </h3>
        </div>
        <div
          class="row"
          style={{
            border: "none",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div class="col-sm-6 mt-5" style={{ display: "flex" }}>
            <div class="img-square-wrapper" id="about_img">
              <img
                class=""
                src={card_pic}
                alt="Card image cap"
                style={{ width: "80%" }}
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
            <div class="card-body" id="about_text">
              <h4 class="card-title">
                Our<span style={{ color: "#ff681c" }}> Mission!</span>{" "}
              </h4>
              <p class="card-text mb-4">
                Eos cumque optio dolores excepturi rerum temporibus magni
                recusandae eveniet, totam omnis consectetur maxime quibusdam
                expedita dolorem dolor nobis dicta labore quaerat esse magnam
                unde, aperiam delectus! At maiores, itaque. Laborum enim quasi
                at modi Ad at tempore Labore quaerat esse
              </p>
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
};
const mapStateToProps = (state) => {
  return {
    myname: state.name,
  };
};
export default connect(mapStateToProps)(About);
