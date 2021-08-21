import React, { Component } from "react";
import isNull from "../functions/NullCheck";
import $ from "jquery";
// import './multicheck.css'
var check;

class MultiCheckDropdown extends Component {
  constructor(props) {
    super(props);

    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.clearCheckBox = this.clearCheckBox.bind(this);
    this.filterList = this.filterList.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      Status: [],
      StatustoSend: "",
      DisplayValueArray: [],
      DisplayValue: "",
      DiffrentiatValue: "",
      Display: [],
      Objects: [],
      Value: [],
      users: this.props.Option,
      filteredUsers: this.props.Option,
      input_val: "",
      setCheckValue: [],
      checkboxList: {},
      firstTime: true,
      selected_Index: -1,
    };
  }
  onChange(event) {
    event.preventDefault();
    const input_val = event.target.value.toLowerCase();

    this.setState(
      {
        input_val: input_val,
      },
      () => {
        this.filterList();
        if (isNull(this.state.input_val)) {
          if (this.state.selected_Index > -1) {
            if (!isNull(this.state.filteredUsers)) {
              var ele =
                this.refs[
                  "checkbox" +
                    this.state.filteredUsers[this.state.selected_Index].value
                ];
              ele.style.backgroundColor = "#ffffff";
              ele.style.boxShadow = "none";
              ele.childNodes[1].style.color = "#000000";
            }
          }
        }
      }
    );
  }
  clearCheckBox() {
    var temp1 = { ...this.state.checkboxList };

    for (var v in temp1) {
      temp1[v] = false;
    }
    this.setState({
      checkboxList: temp1,
      Status: [],
      DisplayValueArray: [],
      DisplayValue: "",
      StatustoSend: "",
      input_val: "",
      filteredUsers: this.props.Option,
    });
  }

  async handleCheckBox(event) {
    var isChecked = event.target.checked;
    var item = event.target.value;
    // console.log(item)
    var items;
    var data;
    var status;
    var dummy2;
    var dummy;
    var array;
    var array2;
    var index;
    var label = event.target.id;
    var obj;
    if (!isNull(this.state.Status)) {
      //Array has data when there are some or All selected value

      if (isNull(item)) {
        // console.log('1')
        //Clicked value or item is Null or empty. All element will be select in this condition
        items = document.getElementsByName("checkbox");
        obj = [];
        data = [];
        status = [];

        var temp = { ...this.state.checkboxList }; //An Object has keys named as value of this.props.Option and Object values will be true or false

        for (var z in this.props.Option) {
          status.push(
            isNull(this.props.Option[z].display)
              ? this.props.Option[z].display
              : this.props.Option[z].display.trim()
          );
          data.push(this.props.Option[z].value);
        }

        for (var c in temp) {
          temp[c] = true;
        }
        if (items[0].value === "null" || items[0].value === "") {
          //shift func will eleminate first value from arrays
          data.shift();
          status.shift();
        }

        this.setState({
          checkboxList: temp,
          Status: data,
          Objects: this.props.Option,
          StatustoSend: "", //only this will  send to Parent by Call back Func
          DisplayValueArray: status,
          DisplayValue: status.join(", "), //join will add to Values//this will display in Select Option
        });
      } else {
        obj = [...this.state.Objects];
        let val = {};
        val = this.props.Option.filter((obj) => obj.value === item);
        obj.push(val[0]);
        //Clicked value or item is not Null or empty.
        index = this.state.Status.indexOf(item);
        // console.log('2')
        if (index > -1) {
        } else {
          items = document.getElementsByName("checkbox");

          dummy2 = { ...this.state.DisplayValueArray };
          array2 = Object.values(dummy2);

          dummy = { ...this.state.Status };
          array = Object.values(dummy);
          array.unshift(item);
          array2.unshift(label);

          this.setState({
            checkboxList: {
              ...this.state.checkboxList,
              [event.target.value]:
                !this.state.checkboxList[event.target.value],
            },
            Status: array,
            Objects: obj,
            StatustoSend: array.join(), //join will Convert the elements of an array into a string and this will send to Parent by Call back
            DisplayValueArray: array2,
            DisplayValue: array2.join(", "), //join will Convert the elements of an array into a string and this will display in Select Option
          });
        }
      }
    } else {
      //Array has no data and no selected value
      if (isNull(item) || item === "null" || item === "") {
        //true when element or item is empty
        items = document.getElementsByName("checkbox");
        // console.log('3')
        data = [];
        status = [];

        for (var v in this.props.Option) {
          //used to access the Object values

          status.push(
            isNull(this.props.Option[v].display)
              ? this.props.Option[v].display
              : this.props.Option[v].display.trim()
          );
          data.push(this.props.Option[v].value);

          // status.push(this.props.Option[v].display.trim()) //push display from Option props in array
          // data.push(this.props.Option[v].value) //push value from Option props in array
        }
        var temp3 = { ...this.state.checkboxList }; //makes copy of Object using spread
        for (var b in temp3) {
          //used to access the key of Object  and assigning true
          // temp3[b] = true //temp3[b] will get key of checkboxList and true will be assign to it

          temp3[b] = true;
        }
        if (
          isNull(items[0].value) ||
          items[0].value === "null" ||
          items[0].value === ""
        ) {
          //shift func will eleminate first value from arrays
          data.shift();
          status.shift();
        }

        await this.setState({
          checkboxList: temp3,
          Status: data,
          Objects: this.props.Option,
          StatustoSend: "", //only this will  send to Parent by Call back Func
          DisplayValueArray: status,
          DisplayValue: status.join(", "), //join will Convert the elements of an array into a string and this will display in Select Option
        });
      } else {
        // console.log('4')
        obj = [];
        obj = this.props.Option.filter((obj) => obj.value === item);
        // when element or item is not empty or null
        items = document.getElementsByName("checkbox");

        dummy2 = { ...this.state.DisplayValueArray };
        array2 = Object.values(dummy2); //Object.Values()method returns an array of a given object's own enumerable property values

        dummy = { ...this.state.Status };
        array = Object.values(dummy); //Object.Values()method returns an array of a given object's own enumerable property values

        this.setState(
          {
            Status: [...this.state.Status, item],
            checkboxList: {
              ...this.state.checkboxList,
              [event.target.value]:
                !this.state.checkboxList[event.target.value],
            },
            Objects: obj,
            StatustoSend: item,
            DisplayValueArray: [...this.state.DisplayValueArray, label],
            DisplayValue: label,
          },
          () => {}
        );
      }
    }

    if (isNull(item) && isChecked === false) {
      items = document.getElementsByName("checkbox");
      var temp1 = { ...this.state.checkboxList };
      // console.log('5')
      for (var m in temp1) {
        temp1[m] = false;
      }
      this.setState({
        checkboxList: temp1,
        Status: [],
        DisplayValueArray: [],
        Objects: [],
        DisplayValue: "",
        StatustoSend: "",
      });
    } else {
      obj = [];

      obj = this.state.Objects.filter((obj) => obj.value !== item);
      index = this.state.Status.indexOf(item);

      // console.log('6')
      if (index > -1) {
        items = document.getElementsByName("checkbox");
        dummy2 = { ...this.state.DisplayValueArray };
        array2 = Object.values(dummy2);
        dummy = { ...this.state.Status };
        array = Object.values(dummy);
        // array.push(item)
        array.splice(index, 1);
        array2.splice(index, 1);
        // delete dummy[index];
        this.setState({
          Objects: obj,
          Status: array,
          StatustoSend: array.join(),
          checkboxList: {
            ...this.state.checkboxList,
            [event.target.value]: !this.state.checkboxList[event.target.value],
          },
          DisplayValueArray: array2,
          DisplayValue: array2.join(", "),
        });
      }
    }
  }
  async componentDidMount() {
    // console.log('didmounttttttttttttttttttttt')
    if (this.props.value) {
      // var items

      var selectedCheckBoxId;
      var selectedCheckBoxValue;

      // items = document.getElementsByName('checkbox')
      // for (var k = 0; k < items.length; k++) {
      //   if (items[k].value === this.props.value) {
      //     items[k].checked = true

      //     selectedCheckBoxId = items[k].id
      //     selectedCheckBoxValue = items[k].value
      //   }
      // }
      let list2 = {};
      this.props.Option.map((row) => {
        if (row.display === this.props.value) {
          list2[row.value] = true;

          selectedCheckBoxId = row.display;
          selectedCheckBoxValue = row.value;
        } else {
          list2[row.value] = false;
        }

        return row;
      });
      // console.log(
      //   'has value',
      //   selectedCheckBoxId,
      //   selectedCheckBoxValue,
      //   this.state.checkboxList,
      // )
      this.setState({
        checkboxList: list2,
        Status: [...this.state.Status, selectedCheckBoxValue],

        StatustoSend: selectedCheckBoxValue,
        DisplayValueArray: [
          ...this.state.DisplayValueArray,
          selectedCheckBoxId,
        ],
        DisplayValue: selectedCheckBoxId,
      });
    } else {
      //Selected All CheckBox by Default
      if (!this.props.placeholder) {
        var list;
        var data;
        var status;

        //if status is not empty

        list = document.getElementsByName("checkbox");

        data = [];
        status = [];
        for (var z in this.props.Option) {
          status.push(
            isNull(this.props.Option[z].display)
              ? this.props.Option[z].display
              : this.props.Option[z].display.trim()
          );
          data.push(this.props.Option[z].value);
        }

        let list2 = {};

        this.props.Option.map((row) => {
          list2[row.value] = true;
          return row;
        });
        if (list[0] === "null" || list[0] === "") {
          data.shift();
          status.shift();
        } else {
          data.shift();
          status.shift();
        }

        await this.setState(
          {
            checkboxList: list2,
            Value: data,
            Display: status,
            Status: data,
            StatustoSend: "",
            DisplayValueArray: status,
            DisplayValue: status.join(", "),
            Objects: this.props.Option,
          }
          // () => {
          //   console.log('checkboxlist ', this.state.checkboxList)
          // },
        );
      }
      // console.log('did mount ', this.props.Option)
    }

    this.closeDropdown();
    this.showDropdown();

    // this.getCheck()
  }

  showDropdown = async () => {
    //will be call after show dropdown
    const thiss = this;
    $(".dropdown").on("shown.bs.dropdown", async function () {
      thiss.refs.input.focus();
      if (thiss.state.firstTime === true && isNull(thiss.props.value)) {
        let list2 = {};
        console.log("in if", thiss.props.autoSelectAll);
        if (thiss.props.autoSelectAll || thiss.props.autoSelectAll == "true") {
          thiss.props.Option.map((row) => {
            list2[row.value] = true;

            return row;
          });
        } else {
          console.log("in else", thiss.props.autoSelectAll);
          thiss.props.Option.map((row) => {
            list2[row.value] = false;

            return row;
          });
        }

        await thiss.setState(
          {
            firstTime: false,
            checkboxList: list2,
            filteredUsers: thiss.props.Option,
          },
          () => {
            var data = [];
            var status = [];
            var items = document.getElementsByName("checkbox");

            for (var z in thiss.props.Option) {
              // console.log('OBJECTS', this.props.Option[z].display)
              status.push(
                isNull(thiss.props.Option[z].display)
                  ? thiss.props.Option[z].display
                  : thiss.props.Option[z].display.trim()
              );
              data.push(thiss.props.Option[z].value);
            }

            if (items[0].value === "null" || items[0].value === "") {
              data.shift();
              status.shift();
            }
            thiss.setState({
              Status: data,
              StatustoSend: "",
              DisplayValueArray: status,
              DisplayValue: status.join(", "),
            });
          }
        );
      }

      // thiss.setCheck()
    });
  };
  labelColor = (thiss) => {
    if (isNull(thiss.state.input_val) === true) {
      if (thiss.state.selected_Index > -1) {
        var ele =
          this.refs[
            "checkbox" +
              this.state.filteredUsers[this.state.selected_Index].value
          ];
        ele.style.backgroundColor = "#ffffff";
        ele.style.boxShadow = "none";
        ele.childNodes[1].style.color = "#000000";
      }
    }
  };

  closeDropdown = () => {
    // will be call on dropdown going to hide
    // console.log('closed')
    const thiss = this;
    $(".dropdown").on("hide.bs.dropdown", function () {
      if (thiss.props.getSelectedValue)
        if (!isNull(thiss.props.placeholder)) {
          if (check === thiss.props.placeholder) {
            thiss.props.getSelectedValue(
              thiss.state.StatustoSend,
              thiss.state.Objects,
              !0
            );
            if (thiss.state.selected_Index > -1) {
              document.getElementById(
                "checkbox" +
                  thiss.state.filteredUsers[thiss.state.selected_Index].value,
                (document.getElementById("main_div").scrollTop = 0)
              );

              thiss.labelColor(thiss);
            } else {
            }

            thiss.setState({
              input_val: "",
              filteredUsers: thiss.props.Option,
              selected_Index: -1,
            });
          } else {
            thiss.props.getSelectedValue(
              thiss.state.StatustoSend,
              thiss.state.Objects,
              !1
            );
            if (thiss.state.selected_Index > -1) {
              var ell =
                thiss.refs[
                  "checkbox" +
                    thiss.state.filteredUsers[thiss.state.selected_Index].value
                ];
              ell.style.backgroundColor = "#ffffff";
              ell.style.boxShadow = "none";
              var div1 = document.getElementById("main_div");
              if (!isNull(div1)) {
                div1.scrollTop = 0;
              }

              thiss.labelColor(thiss);
            }
            thiss.setState({
              input_val: "",
              filteredUsers: thiss.props.Option,
              selected_Index: -1,
            });
          }
        } else {
          thiss.props.getSelectedValue(
            thiss.state.StatustoSend,
            thiss.state.Objects
          );

          if (thiss.state.filteredUsers.length === 0) {
            thiss.setState({
              selected_Index: -1,
            });
          }
          if (thiss.state.selected_Index > -1) {
            var elll =
              thiss.refs[
                "checkbox" +
                  thiss.state.filteredUsers[thiss.state.selected_Index].value
              ];

            elll.style.backgroundColor = "#ffffff";
            elll.style.boxShadow = "none";
            document.getElementById("main_div").scrollTop = 0;
            thiss.labelColor(thiss);
          }
          thiss.setState({
            input_val: "",
            filteredUsers: thiss.props.Option,
            selected_Index: -1,
          });
        }
      if (thiss.state.selected_Index > -1) {
        var el =
          thiss.refs[
            "checkbox" +
              thiss.state.filteredUsers[thiss.state.selected_Index].value
          ];
        el.style.backgroundColor = "#ffffff";
        el.style.boxShadow = "none";
      }
    });
  };
  filterList() {
    //Filter Option as per input
    let users = this.props.Option;
    let input_val = this.state.input_val;

    users = users.filter(function (user) {
      return user.display.toLowerCase().startsWith(input_val);
    });

    if (!isNull(this.state.filteredUsers)) {
      if (this.state.selected_Index > -1) {
        var ele =
          this.refs[
            "checkbox" +
              this.state.filteredUsers[this.state.selected_Index].value
          ];
        ele.style.backgroundColor = "#ffffff";
        ele.childNodes[1].style.color = "#000000";
        ele.style.boxShadow = "none";
      }
    }
    this.setState(
      {
        filteredUsers: users,
        selected_Index: users.length == 0 ? -1 : 0,
      },
      () => {
        if (!isNull(this.state.filteredUsers)) {
          if (this.state.selected_Index > -1) {
            var ele =
              this.refs[
                "checkbox" +
                  this.state.filteredUsers[this.state.selected_Index].value
              ];
            ele.style.backgroundColor = "#38a2ff";
            ele.childNodes[1].style.color = "#ffffff";
            ele.style.boxShadow = "0 0 11px rgba(0,0,0,0.32)";
          }
        }
      }
    );
  }
  // getCheck = () => {
  //   var list = []
  //   var items = document.getElementsByName('checkbox')
  //   for (var q = 0; q < items.length; q++) {
  //     if (items[q].type === 'checkbox') {
  //       list.push({ name: items[q].value, check: items[q].checked })
  //     }
  //   }
  //   var result = {}
  //   result = list.reduce(function (acc, item) {
  //     acc[item.name] = item.check
  //     return acc
  //   }, {})
  //   this.setState({ checkboxList: result })
  //   console.log('get check', result)
  // }
  // async componentWillMount() {
  //   await this.setState({
  //     filteredUsers: this.props.Option,
  //   })
  // }
  handlekeypress = (event) => {
    ///input Onkey press to handle Arrow keys and enter
    if (!isNull(this.state.filteredUsers)) {
      if (event.keyCode === 40) {
        let index = this.state.selected_Index;
        // console.log('Selected index before change', index)
        this.setState(
          {
            selected_Index:
              this.state.selected_Index < this.state.filteredUsers.length - 1
                ? index + 1
                : this.state.filteredUsers.length - 1,
          },
          () => {
            var element =
              this.refs[
                "checkbox" +
                  this.state.filteredUsers[this.state.selected_Index].value
              ];
            if (this.state.selected_Index > 0) {
              var prev =
                this.refs[
                  "checkbox" +
                    this.state.filteredUsers[this.state.selected_Index - 1]
                      .value
                ];
              prev.style.backgroundColor = "#ffffff";
              prev.childNodes[1].style.color = "#000000";
              prev.style.boxShadow = "none";
              // console.log(
              //   'index',
              //   this.state.selected_Index,
              //   'previous child',
              //   prev,
              // )
            }
            element.style.backgroundColor = "#38a2ff";
            element.focus();
            element.style.boxShadow = "0 0 11px rgba(0,0,0,0.32)";
            element.scrollIntoViewIfNeeded(false);
            element.childNodes[1].style.color = "white";
            // console.log(
            //   'index',
            //   this.state.selected_Index,
            //   'key down',
            //   this.state.filteredUsers[this.state.selected_Index].value,
            //   'down child',
            //   element,
            // )
          }
        );
      } else if (event.keyCode === 38) {
        this.setState(
          {
            selected_Index:
              this.state.selected_Index > 0 ? this.state.selected_Index - 1 : 0,
          },
          () => {
            if (this.state.selected_Index > -1) {
              var element =
                this.refs[
                  "checkbox" +
                    this.state.filteredUsers[this.state.selected_Index].value
                ];
              if (this.state.selected_Index < this.state.filteredUsers.length) {
                var prev =
                  this.refs[
                    "checkbox" +
                      this.state.filteredUsers[this.state.selected_Index + 1]
                        .value
                  ];
                prev.style.backgroundColor = "#ffffff";
                prev.childNodes[1].style.color = "#000000";
                prev.style.boxShadow = "none";
              }
              element.style.backgroundColor = "#38a2ff";
              element.childNodes[1].style.color = "white";
              element.style.boxShadow = "0 0 11px rgba(0,0,0,0.32)";
              element.focus();
              element.scrollIntoViewIfNeeded(false);
              // console.log(
              //   this.state.filteredUsers[this.state.selected_Index].value,
              // )
            }
          }
        );
      }
    }

    if (event.keyCode === 13) {
      if (!isNull(this.state.filteredUsers)) {
        if (this.state.selected_Index > -1) {
          // console.log('index on enter', this.state.selected_Index)
          this.setState(
            {
              checkboxList: {
                ...this.state.checkboxList,
                [this.state.filteredUsers[this.state.selected_Index].value]:
                  !this.state.checkboxList[
                    this.state.filteredUsers[this.state.selected_Index].value
                  ],
              },
            },
            () => {
              var items;
              var data;
              var status;
              var dummy2;
              var dummy;
              var array;
              var array2;
              var index;
              var obj;
              items = document.getElementsByName("checkbox");

              if (isNull(this.state.Status) !== !0) {
                if (
                  isNull(
                    this.state.filteredUsers[this.state.selected_Index].value
                  )
                ) {
                  data = [];
                  status = [];
                  // console.log('1 a')
                  var temp = { ...this.state.checkboxList };

                  for (var z in this.props.Option) {
                    status.push(
                      isNull(this.props.Option[z].display)
                        ? this.props.Option[z].display
                        : this.props.Option[z].display.trim()
                    );
                    data.push(this.props.Option[z].value);
                  }
                  for (var n in temp) {
                    temp[n] = true;
                  }

                  if (items[0].value === "null" || items[0].value === "") {
                    data.shift();
                    status.shift();
                  }
                  this.setState({
                    checkboxList: temp,
                    Status: data,
                    StatustoSend: "",
                    Objects: this.props.Option,
                    DisplayValueArray: status,
                    DisplayValue: status.join(", "),
                  });
                } else {
                  // console.log('2 a')
                  obj = [...this.state.Objects];
                  let val = {};
                  val = this.props.Option.filter(
                    (obj) =>
                      obj.value ===
                      this.state.filteredUsers[this.state.selected_Index].value
                  );
                  obj.push(val[0]);
                  index = this.state.Status.indexOf([
                    this.state.filteredUsers[this.state.selected_Index].value,
                  ]);
                  if (index > -1) {
                  } else {
                    items = document.getElementsByName("checkbox");
                    dummy2 = { ...this.state.DisplayValueArray };
                    array2 = Object.values(dummy2);
                    dummy = { ...this.state.Status };
                    array = Object.values(dummy);
                    array.push(
                      this.state.filteredUsers[this.state.selected_Index].value
                    );
                    array2.push(
                      this.state.filteredUsers[this.state.selected_Index]
                        .display
                    );
                    this.setState({
                      Status: array,
                      StatustoSend: array.join(),
                      Objects: obj,
                      DisplayValueArray: array2,
                      DisplayValue: array2.join(", "),
                    });
                  }
                }
              } else {
                if (
                  isNull(
                    this.state.filteredUsers[this.state.selected_Index].value
                  )
                ) {
                  // console.log('3 a')
                  items = document.getElementsByName("checkbox");
                  var temp2 = { ...this.state.checkboxList };
                  data = [];
                  status = [];

                  for (var a in temp2) {
                    temp2[a] = !0;
                  }
                  if (
                    this.state.filteredUsers[
                      this.state.selected_Index
                    ].display.trim() === "ALL"
                  ) {
                    data.shift();
                    status.shift();
                  }
                  this.setState({
                    checkboxList: temp2,
                    Status: this.state.Value,
                    StatustoSend: "",
                    Objects: this.props.Option,
                    DisplayValueArray: this.state.Display,
                    DisplayValue: this.state.Display.join(", "),
                  });
                } else {
                  // console.log('4 a')
                  obj = [];
                  obj = this.props.Option.filter(
                    (obj) =>
                      obj.value ===
                      this.state.filteredUsers[this.state.selected_Index].value
                  );
                  items = document.getElementsByName("checkbox");
                  dummy2 = { ...this.state.DisplayValueArray };
                  array2 = Object.values(dummy2);
                  dummy = { ...this.state.Status };
                  array = Object.values(dummy);

                  var display =
                    this.state.filteredUsers[this.state.selected_Index].display;
                  var valuee =
                    this.state.filteredUsers[this.state.selected_Index].value;
                  this.setState({
                    Status: [...this.state.Status, valuee],
                    StatustoSend: valuee,
                    DisplayValueArray: [
                      ...this.state.DisplayValueArray,
                      display,
                    ],
                    Objects: obj,
                    DisplayValue: display,
                  });
                }
              }
              if (
                this.state.checkboxList[
                  this.state.filteredUsers[this.state.selected_Index].value
                ] === !1 &&
                isNull(
                  this.state.filteredUsers[this.state.selected_Index].value
                )
              ) {
                // console.log('5 a')
                items = document.getElementsByName("checkbox");
                var temp1 = { ...this.state.checkboxList };
                for (var v in temp1) {
                  temp1[v] = !1;
                }
                this.setState({
                  checkboxList: temp1,
                  Status: [],
                  DisplayValueArray: [],
                  Objects: [],
                  DisplayValue: "",
                  StatustoSend: "",
                });
              } else {
                obj = [];

                obj = this.state.Objects.filter(
                  (obj) =>
                    obj.value !==
                    this.state.filteredUsers[this.state.selected_Index].value
                );
                // console.log('6 a')
                index = this.state.Status.indexOf(
                  this.state.filteredUsers[this.state.selected_Index].value
                );
                if (index > -1) {
                  items = document.getElementsByName("checkbox");
                  dummy2 = { ...this.state.DisplayValueArray };
                  array2 = Object.values(dummy2);
                  dummy = { ...this.state.Status };
                  array = Object.values(dummy);
                  array.splice(index, 1);
                  array2.splice(index, 1);
                  this.setState({
                    Status: array,
                    StatustoSend: array.join(),
                    Objects: obj,
                    DisplayValueArray: array2,
                    DisplayValue: array2.join(", "),
                  });
                }
              }
            }
          );
        }
      }
    }
    // if (event.keyCode === 27) {
    //   console.log(event.keyCode)
    //   this.closeDropdown()
    // }
  };

  onKeyPress = (event) => {
    if (event.which === 13 /* Enter */) {
      event.preventDefault();
    }
  };

  render() {
    check =
      isNull(this.state.DisplayValue) === true
        ? this.props.placeholder
          ? this.props.placeholder
          : "All"
        : this.state.DisplayValue.split(",").length ===
          this.props.Option.length - 1
        ? "All"
        : this.state.DisplayValue;
    // console.log(
    //   'displayvalue in render',
    //   this.props.Option,
    //   this.state.checkboxList,
    //   check,
    // )
    return (
      <div
        class="dropdown"
        style={{
          width: "100%",
        }}
      >
        <div
          data-toggle="dropdown"
          id="dropdownMenuButton"
          title={
            this.state.DisplayValue
              ? this.state.DisplayValue.split(",").length ===
                this.props.Option.length - 1
                ? "All"
                : this.state.DisplayValue
              : ""
          }
        >
          <select
            style={{
              padding: "5px",
              fontSize: "13px",
              fontFamily: this.props.fontFamily
                ? this.props.fontFamily
                : "serif",
              width: "98%",
              height: this.props.selectHeight
                ? this.props.selectHeight
                : "auto",
              borderColor: this.props.selectBordercolor
                ? this.props.selectBordercolor
                : "auto",
            }}
            className=" selectpicker "
          >
            <option>{check}</option>
          </select>

          <div class="overSelect" id="overSelect"></div>
        </div>
        <form onKeyPress={this.onKeyPress}>
          <div
            className="  noselect  FixedDropdown dropdown-menu mt-0 pb-0"
            id="checkboxes"
            unselectable="on"
            aria-labelledby="dropdownMenuButton"
            style={{
              boxShadow: "black 0px 4px 11px -6px",
              borderRadius: "10px",
              zIndex: "3",

              width: "98%",
            }}
          >
            <div class="dropdown-header px-0 py-0" style={{ fontSize: "14px" }}>
              <div class=" has-search">
                <input
                  autoFocus="true"
                  type="text"
                  ref={"input"}
                  autoComplete="off"
                  onKeyDown={(event) => this.handlekeypress(event)}
                  style={{
                    position: "sticky",
                    boxShadow: "black 0px 2px 11px -6px",
                    textTransform: "uppercase",
                    border: "1px solid lightgrey",
                    width: "-webkit-fill-available",
                    borderRadius: "15px",
                    outline: "none",
                    paddingLeft: "7%",
                  }}
                  id="myInput"
                  value={this.state.input_val}
                  onChange={this.onChange}
                />
                <i
                  class="fa fa-search  form-control-feedback"
                  style={{
                    fontSize: "13px",
                    color: this.props.iconColor ? this.props.iconColor : "grey",
                  }}
                ></i>
              </div>
            </div>
            <div
              class="scrollbar"
              id="main_div"
              style={{
                overflowY: "auto",
                overflowX: "hidden",
                height: "auto",
                marginTop: "3px",
                maxHeight: this.props.maxMenuHeight
                  ? this.props.maxMenuHeight
                  : "28vh",
              }}
            >
              {/* {console.log('display  name', this.state.filteredUsers)} */}
              {this.state.filteredUsers.length > 0 ? (
                this.state.filteredUsers.map((s, i) => (
                  <div
                    onMouseOver={() => {
                      // document.getElementById(
                      //   'checkbox' + s.value,
                      // ).style.backgroundColor = '#38a2ff'
                      if (this.state.selected_Index > -1) {
                        var lab =
                          this.refs[
                            "checkbox" +
                              this.state.filteredUsers[
                                this.state.selected_Index
                              ].value
                          ];
                        lab.style.backgroundColor = "#ffffff";
                        lab.childNodes[1].style.color = "#000000";
                        lab.style.boxShadow = "none";
                      }
                      // document.getElementById(
                      //   'checkbox' + s.value,
                      // ).style.color = '#ffffff'
                    }}
                    // onMouseOut={() => {
                    //   // document.getElementById(
                    //   //   'checkbox' + s.value,
                    //   // ).style.backgroundColor = '#ffffff'
                    //   // document.getElementById(
                    //   //   'checkbox' + s.value,
                    //   // ).style.color = '#000000'
                    // }}

                    ref={"checkbox" + s.value}
                    id={"checkbox" + s.value}
                    className="checkbox-main pl-1 py-0 form-group-checkbox form-group-checkbox2"
                    style={{
                      pointerEvents: s.disable === true ? "none" : "auto",
                      display: "flex",
                      height: "23px",
                      width: "99%",
                      borderRadius: "4px",
                    }}
                  >
                    <input
                      class=" checkboxxx pl-2"
                      type="checkbox"
                      disabled={s.disable === true ? true : false}
                      id={s.display}
                      name={"checkbox"}
                      // defaultChecked={this.findChecked(s.display)}
                      checked={
                        s.disable === true
                          ? false
                          : this.state.checkboxList[s.value]
                      }
                      value={s.value}
                      onChange={this.handleCheckBox}
                      style={{
                        pointerEvents: s.disable === true ? "none" : "auto",
                        width: "auto",
                        height: "23px",
                      }}
                    />

                    <label
                      class="pl-2"
                      htmlFor={s.display}
                      name={"checkboxlabel"}
                      title={s.display}
                      value={s.display}
                      style={{
                        // color: 'black',
                        pointerEvents: s.disable === true ? "none" : "auto",
                        fontSize: "12px",
                        paddingTop: "4px",
                        whiteSpace: "nowrap",
                        fontFamily: this.props.fontFamily
                          ? this.props.fontFamily
                          : "serif",
                      }}
                    >
                      {s.display}
                    </label>
                  </div>
                ))
              ) : (
                <center class="mt-1">
                  <div
                    style={{
                      color: "gray",
                      fontFamily: this.props.fontFamily
                        ? this.props.fontFamily
                        : "serif",
                    }}
                  >
                    {" "}
                    No Match Found !
                  </div>
                </center>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default MultiCheckDropdown;
