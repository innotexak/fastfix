import React from 'react';
import { Link } from 'react-router-dom';
import { GiNetworkBars } from 'react-icons/gi';
import { AiFillCar } from 'react-icons/ai';
import { ImSpoonKnife } from 'react-icons/im';
import '../index.css';

export default function Drive() {
  return (
    <div className="ride">
      <div className="card">
        <div className="card-header">
          <Link to="/" className="icons">
            <GiNetworkBars />
            <p>Drive or</p>
            <p>deliver</p>
          </Link>
          <Link to="/eat" className="icons">
            <ImSpoonKnife />
            <p>Eat</p>
          </Link>

          <Link to="/drive" className="icons active">
            <AiFillCar />
            <p>Ride</p>
          </Link>
        </div>
        <div className="card-body">
          <h1>Request a ride now</h1>
          <div className="card-inner">
            <input type="text" placeholder=" enter pick up location" />
            <input type="text" placeholder="enter Destination" />
          </div>
        </div>
        <div className="card-footer">
          <div className="button-container">
            <button className="dark-bg">Request now</button>
            <button className="grey-bg">Schedule for later</button>
          </div>
        </div>
      </div>
    </div>
  );
}
