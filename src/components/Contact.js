import React from 'react'

import { feedback } from "./feedback.js"
import Footer from "./Footer.js";

function handleContactForm(e) {
  e.preventDefault()
  //UPDATE FEEDBACK DB HERE
  feedback[Object.keys(feedback).length] = {
    name: document.getElementById("name").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  }
}

function Contact() {
  return (
    <div className="screen">
      <div className="page">
        <div className="page_header">
          Contact Us
        </div>
        <hr />
        <div className="page_body">
          <div className="contact">
            Corrections and suggestions for new pages are very much appreciated but feel free to reach out for any reason!
            <form class="contact-form" action="index.html" method="post">
              <input type="text" class="contact-form-text" id="name" placeholder="Name/ID" />
              <input type="text" class="contact-form-text" id="subject" placeholder="Subject" />
              <textarea class="contact-form-text" id="message" placeholder="Message"></textarea>
              <input type="submit" class="contact-form-btn" value="Send" onClick={handleContactForm}/>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;
