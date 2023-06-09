import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">Education</h1>
         <ul>
        <div className="a-right-items">
            
            <li>
            <p className="a-sub">
                <h3> National Institute of Technology, Calicut</h3>      <em className="eddate">2018-2022</em>
           </p>
      
           <p className="a-desc">
               B.Tech - Electronics and Communication Engineering
               CGPA: 8.12
           </p>
           </li>
           <li>
            <p className="a-sub">
                <h3> Our Own English High School, Sharjah</h3> 
           </p>
      
           <p className="a-desc">
                XII | 2018 | Sharjah, UAE
                <p>Percentage : 91.2%</p>
                <hr className="break1"/>
                X | 2016 | Sharjah, UAE
                <p>CGPA: 10</p> 

           </p>
           </li> 
           
        </div>
        </ul>
        
        <div className="techskills">
          <h1>Technical Skills</h1>'
            <hr className="break2" />
           <div className="techskillitems">
               <ul>
              <li><div className="techskillitem">
                 <h3>Languages : </h3><span>Golang,Cpp,Python</span>
              </div>
              </li>
              <li><div className="techskillitem">
                 <h3>Web technologies</h3> <span>HTML, CSS, Bootstrap, Nodejs, Expressjs, Reactjs</span>
              </div>
              </li>
              <li><div className="techskillitem">
                 <h3>Databases</h3> <span>PostgreSQL, MongoDB</span>
              </div>
              </li>
              <li><div className="techskillitem">
                 <h3>Scripting Languages </h3><span >Javascript</span>
              </div>
              </li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
