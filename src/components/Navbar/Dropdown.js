import React from 'react';
import { dropItem } from './Dropdownitem';
import { Link } from 'react-router-dom';
import './dropdown.css';
export default function Dropdown() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      {dropItem.map((item, index) => {
        return (
          <li className="nav-link">
            <Link key={index} to={item.path} className={item.class}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
