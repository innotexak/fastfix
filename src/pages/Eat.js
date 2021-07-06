import React from 'react';
import { Link } from 'react-router-dom';
import { GiNetworkBars } from 'react-icons/gi';
import { AiFillCar } from 'react-icons/ai';
import { ImSpoonKnife } from 'react-icons/im';
import '../index.css';

export default function Eat() {
  return (
    <div className="eat">
      <div className="card">
        <div className="card-header">
          <Link to="/" className="icons">
            <GiNetworkBars />
            <p>Drive or </p>
            <p>deliver </p>
          </Link>
          <Link to="/eat" className="icons active">
            <ImSpoonKnife />
            <p>Eat</p>
          </Link>

          <Link to="/drive" className="icons">
            <AiFillCar />
            <p>Ride</p>
          </Link>
        </div>
        <div className="card-body">
          <h1>Discover delicious eats</h1>
          <p>Order delivery from restaurants you love.</p>
        </div>
        <div className="card-footer">
          <div className="button-container">
            <button className="dark-bg">Order now</button>
            <p>Own a restaurant? Partner with Uber Eats</p>
          </div>
        </div>
      </div>
    </div>
  );
}
