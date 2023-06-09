import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c98blnb",
        "template_7urasmo",
        formRef.current,
        "9GKMLb7HZLlOMmy9h"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
          formRef.current.reset();
          setTimeout(() => {
            setDone(false); // Hide the thank you message after 2 seconds
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Building Connections for Meaningful Change  Let's Connect and Collaborate</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 7994499910
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              akashanilk30@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Perumbavoor, Ernakulam Kerala , India 683542
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>"Contact Me": </b> &nbsp; Let's Collaborate and Make an Impact Together!
            
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button className="btn">Submit</button>
            <br/>
            {done && "Thank you for submitting the form. Really appreciate your time and interest"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
