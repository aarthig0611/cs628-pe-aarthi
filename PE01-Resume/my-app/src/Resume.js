import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h1>Aarthi Ganesan</h1>
      <p>123 ABC Street, XYZ Town USA, 12345 | (123) 456-7890 | aarthig0611@gmail.com</p>

      <section>
        <h2>Education</h2>
        <p>
          <strong>Master of Science in Computer Science</strong> <br />
          City University of Seattle, Washington, USA | October 2023 - Present <br />
          GPA: 3.9/4.0
        </p>
        <p>
          <strong>Bachelor of Engineering in Computer Science & Engineering</strong> <br />
          Madras Institute of Technology, Chennai, India | August 2018 - April 2022 <br />
          GPA: 7.8/10.0
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <p>
          Programming languages: Java, Python, JavaScript <br />
          Frameworks and libraries: React, Redux, Spring Boot, Django, Node.js <br />
          Database systems: MySQL, PostgreSQL <br />
          Operating systems: Windows, Linux (Ubuntu) <br />
          Version control: Git (GitHub) <br />
          Cloud Platforms and Services: AWS (EC2, S3, Lambda), ServiceNow <br />
        </p>
      </section>

      <section>
        <h2>Work Experience</h2>
        <p>
          <strong>Associate Engineer</strong> <br />
          Virtusa, Chennai, India | June 2022 - October 2023 <br />
          - Specialized in full-stack development with React and Spring Boot. <br />
          - Earned ServiceNow Certified System Administrator (CSA) Utah Version. <br />
          - Designed automated workflows using Flow Designer for ticket handling processes. <br />
          - Developed a Service Portal for seamless IT asset-related ticket submission. <br />
          - Implemented Virtual Agent functionality to streamline ticket creation. <br />
          - Created Performance Analytics dashboards for tracking ticket lifecycle details. <br />
          - Configured user roles, groups, and ACL rules to ensure secure, role-based access.
        </p>
      </section>

      <section>
        <h2>Projects</h2>
        <p>
          <strong>D2H Recharge Portal</strong> <br />
          Developed a web application using React and Spring Boot. <br />
          Source code: <a href="https://github.com/aarthig0611/Gist-D2H-Portal-aarthig0611" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
        <p>
          <strong>Multi-Factor Authentication</strong> <br />
          Designed and implemented MFA using Microsoft Azure Active Directory B2C Authentication. <br />
          Source code: <a href="https://github.com/aarthig0611/mfa-frontend" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
        <p>
          <strong>Dynamic Task Manager</strong> <br />
          Built a personal task manager to streamline task management, prioritization, and sorting. <br />
          Leveraged advanced data structures and algorithms to enhance efficiency and user experience. <br />
          Source code: <a href="https://github.com/aarthig0611/Dynamic-Task-Manager" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </p>
      </section>
    </div>
  );
}

export default Resume;
