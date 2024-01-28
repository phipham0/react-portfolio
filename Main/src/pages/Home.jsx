import React from 'react'
import logo from '../assets/phi_pham_headshot_slack.jpg'
const Home = () => {
  

  return (
    <div className="card bg-white w-100">
      <div className="card-header bg-white text-center">
        <h1 className="bg-white">About Me</h1>
      </div>
      <div>
        <img width='200'src={logo}></img>
      </div>
      <div className="card-body m-5 text-left">
      <p>Hi! I'm Phi, an aspiring software developer that aims to strengthen my skills in computer science and secure a job by doing what I love:</p>
      <p>Solving Problems.</p>
      <p>
        My first exposure to computer science was through a game called "Little Big Planet 2." You could use AND or OR gates to provide
        logic in custom stages and add properties to objects, bringing unlimited creativity to the table. As a kid, I had no idea what these
         were, but come AP Computer Science in high school, I was excited to piece this memory to real applications. During this time, I learned to 
         think like a programmer. In university, I ended up majoring Public Health, thinking I would be come a physician assistant, but part of me had a 
         love for programming, and I enrolled in the Elements of Programming certificate at UT Austin while finishing my degree. I deeply enjoyi
         ng helping people in need, but also cannot ignore the fact that my brain loves solving problems and being creative with programming.
          I hope one day that I can combine these two passions in my near future. I have worked with an assortment of computer languages and would
           say I am well-versed in Python. However, I have created projects in HTML, javaScript, CSS, and Java. I also have some knowledge in making 
           queries with SQL, working with MySQL, PostgreSQl, and mongoDB.
      </p>
      
      <p>I have worked with an assortment of computer languages and would say I am well-versed in python. 
        However, I have created projects in HTML, javaScript, CSS, and Java. I also have some knowledge in making queries with SQL, working with MySQL, PostgreSQl, and mongoDB.</p>

      
        
      </div>
      <div className="card-footer text-center m-3">
      </div>
    </div>
  );
};

export default Home;
