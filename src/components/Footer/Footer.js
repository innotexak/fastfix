import React from 'react';
import { Link } from 'react-router-dom';
import aStore from '../../images/astore.svg';
import gPlay from '../../images/gplay.svg';
import { TiSocialFacebookCircular, TiSocialTwitter } from 'react-icons/ti';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';
import { MdLanguage } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import './Footer.css';

export default function Footer() {
  return (
    <section className="footer-section">
      <main className="footer">
        <div className="uber">
          <h1>
            {' '}
            <Link to="/">Uber</Link>
          </h1>
          <Link to="/">Visit Help Center</Link>
        </div>
        <div className="four-footer-column">
          <div className="one">
            <h1>Company</h1>
            <ul>
              <li>
                <Link to="/" id="links">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  Our offerings
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  Investors
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  AI
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  Gift cards
                </Link>
              </li>
            </ul>
          </div>
          <div className="two">
            <h1>Products</h1>
            <ul>
              <li>
                <Link to="/" id="links">
                  {' '}
                  Ride
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  Drive
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  Eat
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  Uber for business
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  Uber freight
                </Link>
              </li>
            </ul>
          </div>
          <div className="three">
            <h1>Global citizenship</h1>
            <ul>
              <li>
                <Link to="/" id="links">
                  Safety
                </Link>
              </li>
              <li>
                <Link to="/" id="links">
                  Diversity and Inclusion
                </Link>
              </li>
            </ul>
          </div>
          <div className="four">
            <h1>Travel</h1>
            <ul>
              <li>
                <Link to="/" id="links">
                  Airports
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="three-footer-column">
          <div className="social">
            <div className="socia">
              <Link to="/" className="s-links">
                <TiSocialFacebookCircular />
              </Link>
              <Link className="s-links">
                <TiSocialTwitter />
              </Link>
              <Link className="s-links">
                <AiOutlineYoutube />
              </Link>
              <Link className="s-links">
                <FaLinkedin />
              </Link>
              <Link to="/" className="s-links">
                <FaInstagram />
              </Link>
            </div>
            <div className="lang">
              <Link to="/" className="left s-links">
                <MdLanguage /> English
              </Link>
              <Link to="/" className="left s-links">
                <GoLocation />
                Abuja
              </Link>
            </div>
          </div>
          <div className="svg">
            <img src={gPlay} alt="google play" />
            <img src={aStore} alt="app store" />
          </div>
        </div>
        <div className="two-footer-column">
          <div>
            <span id="colors">&copy;2021 Uber Technologies Inc.</span>
          </div>
          <div className="policy">
            <Link to="/" id="color">
              Privary
            </Link>
            <Link to="/" id="color">
              Accessibility
            </Link>
            <Link to="/" id="color">
              Terms
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}
