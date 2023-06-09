import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Akash AnilKumar</h1>
          <div className="i-title">
           <h1>I'm a passionate</h1> 
            <div className="i-title-wrapper">
              <div className="i-title-item">Software Enginner</div>
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Programmer</div>
            </div>
          </div>
          <p className="i-desc">
          A resourceful Software engineer 
          proficient in Reactjs, Nodejs, Golang, Python and SQL. 
          <hr className="break"/>
          Graduated from National Institute of Technology Calicut in Electronics and Communication with a score of 81.2% in academics. 
          Continuous learner of new technologies and tools.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
