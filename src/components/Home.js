import React from 'react';
import { Link } from 'react-router-dom';
import Preview from './Preview.js';
import callbotThumb from '../assets/img/callbot-blue.png';
import '../App.scss';
import '../scss/components/_home.scss';

function Home(props) {
  return (
    <div className="experiment">
      <div className="experiment__child">
        <div className="component-container">
          <div className="hero">
            <div className="hero__text">
              <div>
                <p className="hero__name paragraph">Andrew Nicholl</p>
                <div className="line"></div>
              </div>
              <h1 className="hero__title">Product Designer,</h1>
              <p className="hero__subtitle">amongst other things.</p>
              <p className="hero__body paragraph">
                I’m a design professional dedicated to creating accessible
                products that can scale with the needs of business and humans
                alike.
              </p>
            </div>
            <div>
              <a
                // href="https://www.nicholldesign.com/andrewnicholl_portfolio.pdf"
                href="https://www.dropbox.com/s/44rakq0gn6qp6zs/andrewnicholl.pdf?dl=0"
                target="_blank"
                className="button desktop-link"
              >
                <p className="paragraph">see portfolio</p>
                <div className="button__arrow">
                  <div className="button__line1"></div>
                  <div className="button__line2"></div>
                  <div className="button__line3"></div>
                </div>
              </a>
              <a
                href="https://www.nicholldesign.com/andrewnicholl_portfolio_compressed.pdf"
                target="_blank"
                className="button mobile-link"
              >
                <p className="paragraph">see portfolio</p>
                <div className="button__arrow">
                  <div className="button__line1"></div>
                  <div className="button__line2"></div>
                  <div className="button__line3"></div>
                </div>
              </a>
              <div className="social">
                <a
                  href="https://twitter.com/andrewtnicholl"
                  target="_blank"
                  className="social__link"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="social__icon"
                  >
                    <path
                      d="M29 7.94689C28.0437 8.35939 27.0031 8.65626 25.9312 8.77189C27.0441 8.11075 27.8775 7.06626 28.275 5.83439C27.2307 6.4556 26.0867 6.89121 24.8937 7.12189C24.3951 6.58885 23.7921 6.1642 23.1222 5.87441C22.4523 5.58462 21.7299 5.4359 21 5.43751C18.0469 5.43751 15.6719 7.83126 15.6719 10.7688C15.6719 11.1813 15.7219 11.5938 15.8031 11.9906C11.3812 11.7594 7.43748 9.64689 4.81561 6.41251C4.33787 7.2285 4.08752 8.15759 4.09061 9.10314C4.09061 10.9531 5.03123 12.5844 6.46561 13.5438C5.62031 13.5105 4.7948 13.2781 4.05623 12.8656V12.9313C4.05623 15.5219 5.88748 17.6688 8.32811 18.1625C7.86985 18.2815 7.39844 18.3424 6.92498 18.3438C6.57811 18.3438 6.24998 18.3094 5.91873 18.2625C6.59373 20.375 8.55936 21.9094 10.9 21.9594C9.06873 23.3938 6.77498 24.2375 4.28436 24.2375C3.83748 24.2375 3.42498 24.2219 2.99686 24.1719C5.35936 25.6875 8.16248 26.5625 11.1812 26.5625C20.9812 26.5625 26.3437 18.4438 26.3437 11.3969C26.3437 11.1656 26.3437 10.9344 26.3281 10.7031C27.3656 9.94376 28.275 9.00314 29 7.94689Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://dribbble.com/andrewnicholl"
                  target="_blank"
                  className="social__link"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="social__icon"
                  >
                    <path
                      d="M16 3C8.83125 3 3 8.83125 3 16C3 23.1687 8.83125 29 16 29C23.1687 29 29 23.1687 29 16C29 8.83125 23.1687 3 16 3ZM24.5969 8.99375C26.1437 10.8844 27.0812 13.2906 27.1031 15.9125C26.7375 15.8344 23.0656 15.0906 19.3719 15.5562C19.2938 15.3656 19.2156 15.175 19.1344 14.9844C18.9031 14.4438 18.6563 13.9031 18.3969 13.375C22.5 11.6969 24.3625 9.3125 24.5969 8.99375ZM16 4.9125C18.8219 4.9125 21.4 5.97187 23.3594 7.70937C23.1594 7.99375 21.4875 10.2406 17.5406 11.7219C15.7219 8.37813 13.7063 5.63438 13.3969 5.22188C14.25 5.01563 15.1219 4.9125 16 4.9125V4.9125ZM11.2781 5.96875C11.5719 6.36875 13.5563 9.12188 15.3938 12.3906C10.2 13.7687 5.625 13.75 5.12813 13.7437C5.85 10.2969 8.17187 7.43438 11.2781 5.96875ZM4.89687 16.0156C4.89687 15.9031 4.9 15.7875 4.90312 15.675C5.3875 15.6844 10.7687 15.7531 16.3156 14.0938C16.6344 14.7156 16.9375 15.3469 17.2156 15.9781C17.0688 16.0187 16.9219 16.0625 16.7781 16.1094C11.05 17.9656 8.00313 23.0125 7.75 23.4406C5.97812 21.4719 4.89687 18.8688 4.89687 16.0156ZM16 27.1187C13.4313 27.1187 11.0656 26.2437 9.18437 24.775C9.38437 24.3656 11.6312 20.025 17.8937 17.8406L17.9656 17.8156C19.525 21.8656 20.1688 25.2625 20.3344 26.2375C18.9646 26.823 17.4897 27.1228 16 27.1187V27.1187ZM22.2031 25.2219C22.0906 24.5469 21.5 21.2969 20.0469 17.3062C23.5281 16.75 26.5844 17.6625 26.9625 17.7812C26.4687 20.8688 24.6969 23.5375 22.2031 25.2219V25.2219Z"
                      fill="white"
                    />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/andrew-nicholl/"
                  target="_blank"
                  className="social__link"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="social__icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.56132 6.67866C9.56132 8.28986 8.25518 9.59599 6.64399 9.59599C5.03279 9.59599 3.72665 8.28986 3.72665 6.67866C3.72665 5.06746 5.03279 3.76132 6.64399 3.76132C8.25518 3.76132 9.56132 5.06746 9.56132 6.67866ZM12.316 27.992V11.8067H17.14V14.02H17.208C17.8787 12.7493 19.5187 11.4067 21.9653 11.4067C27.0613 11.4067 28 14.7573 28 19.1173V27.9933H22.972V20.1213C22.972 18.2453 22.94 15.8307 20.3573 15.8307C17.7387 15.8307 17.3413 17.876 17.3413 19.988V27.992H12.316ZM9.16001 11.8067H4.12668V27.992H9.16001V11.8067Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
