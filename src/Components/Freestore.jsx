import React from "react";
import Header from "./Header";
import axios from "axios";
import { fetch_list } from "../Services/Actions/user_action";
import { change } from "../Services/Actions/action";
import { useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import Card_s from "../Card_s";
const Store = (props) => {
  const [input, setInput] = useState("");
  let [Users, setUsers] = useState([]);

  useEffect(() => {
    {
      props.getuser();
    }
  }, []);
  useEffect(() => {
    setUsers(props.users);
  });

  // const [users, setuser] = useState([]);
  // useEffect(() => {
  //   // axios
  //   //   .get("https://jsonplaceholder.typicode.com/posts")
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  //   async function getData() {
  //     const res = await axios.get(
  //       `https://jsonplaceholder.typicode.com/users/`
  //     );

  //     setuser(res.data);
  //   }
  //   getData();
  // }, []);

  if (input.length > 0) {
    Users = Users.filter((user) => {
      return user.name.toLowerCase().match(input);
    });
  }

  return (
    <div>
      <Header />
      <div>
        <h3>My name is {props.myname}</h3>

        <button
          onClick={() => {
            // props.getlist();
            props.changeName("Muzamil Qureshi");
          }}
        >
          change
        </button>

        <br />
        {/* <button onClick={() => {}}>Fetch Users</button> */}
        {/* {props.users.map((user) => (
          <p key={user.id}>user.id</p>
        ))} */}
      </div>
      <center>
        <Input
          type="text"
          maxLength="11"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          id="search"
          value={input}
          style={{
            color: "green",
            width: "40%",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        {input.length > 10 ? (
          <div style={{ color: "red" }}>Max length reached!</div>
        ) : null}
      </center>

      <center>
        <div>
          <div
            id="card_style"
            style={{ backgroundColor: "whitesmoke", width: "40%" }}
          >
            {Users.map((user) => (
              <h>
                {user.name} <br />
              </h>
            ))}
          </div>
        </div>
      </center>

      <div class="col-sm" id="card_style"></div>
    </div>
  );

  {
    /* <ul>
{
    users.map(user=>( 
<li key={user.id}>

{/* <div class="row ">
    <div class="col-4 sm-col-12">
    <h><b>Name</b> :{user.username}</h>
    </div>
    <div  class="col-4 sm-col-12">
    <h><b>Username</b> :{user.name}</h>
    </div>
    <div  class="col-4 sm-col-12">
    <h><b>Phone</b> :{user.phone}</h>
    </div>
    <div  class="col-4 sm-col-12">
    <h><b>Website</b> :{user.website}</h>
    </div>

</div>  
</li>
    ))};

  </ul> */
  }
};

const mapStateToProps = (state) => {
  // a function to get data from store
  return {
    myname: state.name,
    users: state.users,
  };
};
let filterUser = (state) => {
  return;
  {
    users: state.users.filter((user) => {
      return user.name.toLowerCase().includes();
    });
  }
};
const mapDispatchToProps = (dispatch) => {
  // a function to set data to store by using action
  return {
    getuser: () => {
      dispatch(fetch_list());
    },
    changeName: (name) => {
      dispatch(change(name));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Store);
