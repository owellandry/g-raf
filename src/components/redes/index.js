import React from 'react';
import './style.css';

function Redes() {
  return (
    <div>
      <div class="cards">
        <article class="plan [ card ]">
          <div class="inner">
            <span class="pricing">
              <span>
                $56 <small>/ m</small>
              </span>
            </span>
            <h2 class="title">Professional</h2>
            <p class="info">This plan is for those who have a team already and running a large business.</p>
            <ul class="features">
              <li>
                <span class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                  </svg>
                </span>
                <span><strong>20</strong> team members</span>
              </li>
              <li>
                <span class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                  </svg>
                </span>
                <span>Plan <strong>team meetings</strong></span>
              </li>
              <li>
                <span class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                  </svg>
                </span>
                <span>File sharing</span>
              </li>
            </ul>
            <button class="button">
              Choose plan
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Redes;