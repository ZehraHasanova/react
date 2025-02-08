import React from "react";
import "./Credentials.css"; // CSS faylını import edirik

function Credentials() {
  return (
    <div className="container">
      <h1>Live Demo Access Credentials</h1>
      
      <div className="credentials">
        <div className="card">
          <h2>Student:</h2>
          <p><strong>Email:</strong> student@lisbo.com</p>
          <p><strong>Password:</strong> 123456</p>
        </div>

        <div className="card">
          <h2>Instructor:</h2>
          <p><strong>Email:</strong> instructor@lisbo.com</p>
          <p><strong>Password:</strong> 123456</p>
        </div>

        <div className="card">
          <h2>Admin:</h2>
          <p><strong>Email:</strong> admin@lisbo.com</p>
          <p><strong>Password:</strong> 123456</p>
        </div>
      </div>

      <div className="test-card">
        <h2>Test Credit Card:</h2>
        <p><strong>Email:</strong> student@lisbo.com</p>
        <p><strong>Card:</strong> 4242 4242 4242 4242</p>
        <p><strong>MM/YY:</strong> 02/23</p>
        <p><strong>CVC:</strong> 212</p>
      </div>
    </div>
  );
}

export default Credentials;