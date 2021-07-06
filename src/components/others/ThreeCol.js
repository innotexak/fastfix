import React from 'react';
import { IoPeopleOutline, IoHomeOutline, IoReaderOutline } from 'react-icons/io5';

export default function ThreeCol() {
  return (
    <div className="three-column">
      <div>
        <i>
          <IoPeopleOutline />
        </i>
        <h3>About Us</h3>
        <p>Find out how we started, what drives us, and how we’re igniting opportunity.</p>
        <a href="/">Read more</a>
      </div>
      <div>
        <i>
          <IoReaderOutline />
        </i>

        <h3>Newsroom</h3>
        <p>See announcements about our latest releases, initiatives, and partnerships.</p>
        <a href="/">Read more</a>
      </div>
      <div>
        <i>
          <IoHomeOutline />
        </i>
        <h3>Global citizenship</h3>
        <p>Read about our commitment to making a positive impact in the cities we serve.</p>
        <a href="/">Read more</a>
      </div>
    </div>
  );
}
