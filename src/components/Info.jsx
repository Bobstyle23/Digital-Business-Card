import React from "react";
import image from "../assets/bob.JPG";

const Info = () => {
  return (
    <div>
      <img src={image} className="image" alt="" />
      <div className="contacts">
        <p className="name">MukhammadBobur</p>
        <p className="role">Frontend Developer</p>
        <small className="email">bobpakhriev@gmail.com</small>
      </div>
      <div className="buttons">
        <button className="email-btn">
          <i class="fas fa-envelope"></i> Email
        </button>
        <button className="linkedin-btn">
          <i class="fab fa-linkedin"></i> LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;
