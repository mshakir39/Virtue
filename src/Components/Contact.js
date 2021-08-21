import React from "react";
import Header from "./Header";
import Contact_pic from "../images/contact.png";
const Contact = () => {
  return (
    <div>
      <Header />
      <div class="container contact-form">
        <div class="contact-image">
          <img src={Contact_pic} alt="rocket_contact" />
        </div>
        <form method="post">
          <h3>Drop Us a Message</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="txtName"
                  class="form-control"
                  placeholder="Your Name *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtEmail"
                  class="form-control"
                  placeholder="Your Email *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  class="form-control"
                  placeholder="Your Phone Number *"
                  value=""
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  name="btnSubmit"
                  class="btnContact"
                  value="Send Message"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="txtMsg"
                  class="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%" }}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
