import React from 'react';
import { Link } from 'react-router-dom';
import { GiAutoRepair } from 'react-icons/gi';
import '../index.css';
export default function Home() {
  return (
    <div className="home">
      <div className="card">
        <div className="card-header">
          <Link>
            <GiAutoRepair />
          </Link>
        </div>
        <div className="card-body"></div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}
