import React from 'react';
import '../css/HomeCource.css';

function Test() {
  return (
    <div className="container">
      <div className="box1">
        <img
          src="/col_gate.jpg"
          alt="Image"
          width="750"
          height="422"
        />
      </div>

      <div className="box2">
        <div className="content">
          <h2>Overview of Research</h2>
          <p>
            Besides being an academic institution focusing on quality education, Parvatibai Chowgule College is actively involved in encouraging research. With the implementation of Autonomy, the goals and objectives for research promotion were redefined, and a strategic plan was prepared for promoting and strengthening research. Social responsibility being part of the institutional mission, strategies to contribute to society through various extension services and community outreach activities continue to be executed.
          </p>
          <button className="read-more-button">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Test;
