import React from 'react';
import img1 from '../../images/driver.jfif';
import img2 from '../../images/city-cab.jfif';
export default function SafetyFocuse() {
  return (
    <div>
      <h1 id="sp">Focused on safety, wherever you go</h1>
      <section className="focuse-section">
        <div className="first">
          <img src={img1} alt="driver on focuse" />
          <article>
            <h5>Our commitment to your safety</h5>
            <p>
              {' '}
              With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.
            </p>
            <a href="/">Read about our communities Guidelines</a> <a href="/">see all safety features</a>
          </article>
        </div>
        <div className="second">
          <img src={img2} alt="city route" />
          <article>
            <h5>Setting 10,000+ cities in motion</h5>
            <p> The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
            <a href="/">View all cities</a>
          </article>
        </div>
      </section>
    </div>
  );
}
