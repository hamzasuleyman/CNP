import React from "react";
import "./contactcard.css";

const ContactCard = () => {
  return (
    <div className="cnp__contact-card">
      <div className="cnp__contact-main">
        <div className="cnp__contact-main-header">
          <h2 className="cnp__contact-title">Contact Us</h2>
          <p className="cnp__contact-title-p">
            Feel free to drop us a line below{" "}
          </p>
        </div>
        <div className="cnp__contact-main__section">
          <form method="post">
            <div className="cnp__contact-main__section-input">
              <div className="cnp__contact-main__section-input-one">
                <div className="cnp__contact-main__section-inputs cnp__contact-main__section-input-first">
                  <label for="fullName">
                    Full Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
              <div className="cnp__contact-main__section-input-two">
                <div className="cnp__contact-main__section-inputs cnp__contact-main__section-input-second">
                  <label>
                    Phone number <span>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              <div className="cnp__contact-main__section-input-three">
                <div className="cnp__contact-main__section-inputs cnp__contact-main__section-input-third">
                  <label>
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div className="cnp__contact-main__section-input-four">
                <div className="cnp__contact-main__section-inputs cnp__contact-main__section-input-fourth">
                  <label>
                    Subject <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter the subject"
                    required
                  />
                </div>
              </div>
              <div className="cnp__contact-main__section-input-five">
                <div className="cnp__contact-main__section-inputs cnp__contact-main__section-input-fivth">
                  <label for="message">
                    Message <span>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
          <div className="cnp__contact-main-footer">
            <div className="cnp__contact-main-footer__main">
              <button className="cnp__contact-main-footer__main-btn">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
