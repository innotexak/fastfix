import React from 'react';
import { Link } from 'react-router-dom';
import { GiNetworkBars } from 'react-icons/gi';
import { AiFillCar } from 'react-icons/ai';
import { ImSpoonKnife } from 'react-icons/im';
import '../index.css';

export default function Repair() {
  return (
    <div className="deliver">
      <div className="card">
        <div className="card-header">
          <Link to="/" className="icons active">
            <GiNetworkBars />
            <p>Drive or</p>
            <p>deliver</p>
          </Link>
          <Link to="/eat" className="icons">
            <ImSpoonKnife />
            <p>Eat</p>
          </Link>

          <Link to="/drive" className="icons ">
            <AiFillCar />
            <p>Ride</p>
          </Link>
        </div>
        <div className="card-body">
          <h1>Get in the driver’s seat and get paid</h1>
          <p>Drive on the platform with the largest network of active riders.</p>
        </div>
        <div className="card-footer">
          <div className="button-container">
            <button className="dark-bg">Signup to drive</button>
            <span id="f-para">
              <a href="/">Learn more about driving and delivery</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
