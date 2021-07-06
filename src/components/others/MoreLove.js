import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function MoreLove() {
  return (
    <section className="morelove-section">
      <h1 className="go">There’s more to love in the apps</h1>
      <div className="morelove">
        <div className="diver">
          <div className="flex">
            <h1>
              Ulber <FaArrowRight />
            </h1>
            <button>
              Download the Driver app{' '}
              <i>
                <FaArrowRight className="rightarr" />
              </i>
            </button>
          </div>
          <div className="flex">
            <h1>Ulber</h1>
            <button>
              Download the Ulber app{' '}
              <i>
                <FaArrowRight className="rightarr" />
              </i>
            </button>
          </div>
        </div>
        <div className="fullwidth">
          <div>
            <span>
              signup to drive{' '}
              <i>
                <FaArrowRight />{' '}
              </i>
            </span>
          </div>
          <div>
            <span>
              singup to ride{' '}
              <i>
                <FaArrowRight />
              </i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
