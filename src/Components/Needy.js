import React, { Component } from "react";
import Select from "react-select";
import Header from "./Header";
import ModernDatepicker from "react-modern-datepicker";
import moment from "moment";
import Book from "../images/2nd-Year-Physics.jpg";
import MultiSelect from "./MulticheckDropdown";
import Law from "../images/law.png";
// import { DatePicker } from "@material-ui/lab/DatePicker";
// import { TextField } from "@material-ui/core/TextField";
class Needy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment().toDate(),
      fruit: "",
    };
  }
  data = [
    {
      value: "",
      display: "Select All ",
    },
    {
      value: "Apple",
      display: "Apple",
    },
    { value: "Orange", display: "Orange" },
    { value: "Banana", display: "Banana" },
    { value: "Strawberry", display: "Strawberry" },
    { value: "Mango", display: "Mango" },
    { value: "Ananas", display: "Ananas" },
    { value: "Watermelon", display: "Watermelon" },
    { value: "Melon", display: "Melon" },
    { value: "Peach", display: "Peach" },
  ];
  options_type = [
    { value: "clothes", label: "Clothes" },
    { value: "books", label: "Books" },
    { value: "shoes", label: "Shoes" },
  ];
  options_location = [
    { value: "dgkhan", label: "D G Khan" },
    { value: "dikhan", label: "D i Khan" },
    { value: "rawalpindi", label: "Rawalpindi" },
    { value: "islamabad", label: "Islamabad" },
  ];
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  getSelectedValue = (childValue, placeholder) => {
    console.log("value", childValue);
    this.setState({
      fruit: childValue,
    });
  };

  render() {
    return (
      <div className="">
        {" "}
        <Header />
        <div className="mainScroll">
          <div class="container contact-form mt-4 ">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <MultiSelect
                  Option={this.data}
                  getSelectedValue={this.getSelectedValue}
                  value={this.state.fruit}
                  fontFamily={"monospace"}
                  IconColor={"rgb(100 37 84)"}
                  maxMenuheight={"29vh"}
                  selectHeight={"38px"}
                  placeholder="Please Select"
                  autoSelectAll={true}
                ></MultiSelect>
              </div>
              <div className="col-md-3 col-sm-12">
                <Select
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 5,
                    colors: {
                      ...theme.colors,
                      primary25: "rgb(255, 104, 28)",
                      primary: "purple",
                    },
                  })}
                  styles={{
                    control: (base, state) => ({
                      //for outer style
                      ...base,
                      // border: 0

                      borderColor: state.isFocused ? "purple" : "lightgrey",
                      // This line disable the blue border
                      boxShadow: "none",
                    }),
                    option: (base, state) => ({
                      ...base,
                      // backgroundColor: state.isSelected ? "red" : "yellow",
                      color: state.isFocused ? "white" : "black",
                      borderRadius: 30,
                    }),
                    menu: (provided, state) => ({
                      ...provided,
                      // width: state.selectProps.width,
                      borderRadius: 20,
                      borderBottom: "1px dash purple",
                      color: state.selectProps.red,
                      padding: 20,
                    }),
                    singleValue: (provided, state) => {
                      const opacity = state.isDisabled ? 0.5 : 1;
                      const transition = "opacity 300ms";

                      return { ...provided, opacity, transition };
                    },
                  }}
                  placeholder="Select Type"
                  options={this.options_type}
                />
              </div>
              <div className="col-md-3 col-sm-12">
                <Select
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 5,
                    colors: {
                      ...theme.colors,
                      primary25: "rgb(255, 104, 28)",
                      primary: "purple",
                    },
                  })}
                  styles={{
                    control: (base, state) => ({
                      //for outer style
                      ...base,
                      // border: 0

                      borderColor: state.isFocused ? "purple" : "lightgrey",
                      // This line disable the blue border
                      boxShadow: "none",
                    }),
                    option: (base, state) => ({
                      ...base,
                      // backgroundColor: state.isSelected ? "red" : "yellow",
                      color: state.isFocused ? "white" : "black",
                      borderRadius: 30,
                    }),
                    menu: (provided, state) => ({
                      ...provided,
                      // width: state.selectProps.width,
                      borderRadius: 20,
                      borderBottom: "1px dash purple",
                      color: state.selectProps.red,
                      padding: 20,
                    }),
                    singleValue: (provided, state) => {
                      const opacity = state.isDisabled ? 0.5 : 1;
                      const transition = "opacity 300ms";

                      return { ...provided, opacity, transition };
                    },
                  }}
                  placeholder="Select Location"
                  options={this.options_location}
                />
              </div>

              <div className="col-md-3 col-sm-12">
                <ModernDatepicker
                  date={this.state.startDate}
                  format={"DD-MM-YYYY"}
                  showBorder
                  className="modernDate_P"
                  primaryColor={"#642554"}
                  onChange={(date) => this.handleChange(date)}
                  placeholder={"Select a date"}
                />
              </div>
            </div>
            <div className="row" style={{ paddingLeft: "22px" }}>
              <div className="col-md-4" style={{ marginTop: "7%" }}>
                <div
                  class="card shadow"
                  style={{ width: "18rem", borderRadius: "25px" }}
                >
                  <img
                    class="card-img-top"
                    src={Book}
                    alt="Card image cap"
                    style={{
                      height: "163px",
                      borderTopLeftRadius: "25px",
                      borderTopRightRadius: "25px",
                    }}
                  />
                  <div
                    class="card-body"
                    style={{ padding: "4px", height: "90px" }}
                  >
                    <h5 class="card-title">12 Class Physics</h5>
                    <p class="card-text">
                      i have almost a new book.you can take this free.
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      Muzamil
                    </li>
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      03** *******
                    </li>
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      rawalpindi.............
                    </li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link">
                      Get Direction
                    </a>
                    {/* <a href="#" class="card-link">
                      Another link
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="col-md-4" style={{ marginTop: "7%" }}>
                <div
                  class="card shadow"
                  style={{ width: "18rem", borderRadius: "25px" }}
                >
                  <img
                    class="card-img-top"
                    src={Law}
                    alt="Card image cap"
                    style={{
                      height: "163px",
                      borderTopLeftRadius: "25px",
                      borderTopRightRadius: "25px",
                    }}
                  />
                  <div
                    class="card-body"
                    style={{ padding: "4px", height: "90px" }}
                  >
                    <h5 class="card-title">Law Library</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      Usama khan
                    </li>
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      03** *******
                    </li>
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      Rewal...........
                    </li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link">
                      Get Direction
                    </a>
                    {/* <a href="#" class="card-link">
                      Another link
                    </a> */}
                  </div>
                </div>
              </div>

              <div className="col-md-4" style={{ marginTop: "7%" }}>
                <div
                  class="card shadow"
                  style={{ width: "18rem", borderRadius: "25px" }}
                >
                  <img
                    class="card-img-top"
                    src="..."
                    alt="Card image cap"
                    style={{
                      height: "163px",
                      borderTopLeftRadius: "25px",
                      borderTopRightRadius: "25px",
                    }}
                  />
                  <div
                    class="card-body"
                    style={{ padding: "4px", height: "90px" }}
                  >
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      Cras justo odio
                    </li>
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      Dapibus ac facilisis in
                    </li>
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      Vestibulum at eros
                    </li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link">
                      Get Direction
                    </a>
                    {/* <a href="#" class="card-link">
                      Another link
                    </a> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4" style={{ marginTop: "7%" }}>
                <div
                  class="card shadow"
                  style={{ width: "18rem", borderRadius: "25px" }}
                >
                  <img
                    class="card-img-top"
                    src="..."
                    alt="Card image cap"
                    style={{
                      height: "163px",
                      borderTopLeftRadius: "25px",
                      borderTopRightRadius: "25px",
                    }}
                  />
                  <div
                    class="card-body"
                    style={{ padding: "4px", height: "90px" }}
                  >
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      Cras justo odio
                    </li>
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      Dapibus ac facilisis in
                    </li>
                    <li class="list-group-item" style={{ padding: "0px" }}>
                      Vestibulum at eros
                    </li>
                  </ul>
                  <div class="card-body">
                    <a href="#" class="card-link">
                      Get Direction
                    </a>
                    {/* <a href="#" class="card-link">
                      Another link
                    </a> */}
                  </div>
                </div>
              </div>
            </div>

            {/* <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <br />
          <br />
          <input type="submit" value="Submit" /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Needy;
