import React from 'react'
const Resume = () => {
  

  return (
    <div className="card bg-white w-100">
      <div className="card-header bg-white text-center">
      </div>

      <div className="card-body m-5 text-left">
        <h2><a href='/Pham_Phi_Resume.pdf' download>Resume</a></h2>
        <h2>Front-end Proficiencies</h2>
        <p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </p>
        <h2>Back-end Proficiencies</h2>
        <p>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL,Sequelize</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Resume;
