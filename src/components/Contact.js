import React from 'react'

import Footer from "./Footer.js";

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
            <form class="contact-form" action="https://formspree.io/mqkyodrj" method="post">
              <input type="text" class="contact-form-text" name ="name" placeholder="Name/ID" />
              <input type="text" class="contact-form-text" name="subject" placeholder="Subject" />
              <textarea class="contact-form-text" name="message" placeholder="Message"></textarea>
              <input type="submit" class="contact-form-btn" value="Send"/>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;
