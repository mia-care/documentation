import React from "react";
import Classes from "./styles.module.css";


const renderSvg = function (options) {
  options = options || {};
  return (
    <div className={Classes.logoBox}>
    <svg
      style={options.style}
      viewBox="0 0 494.51 116.51"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <g>
            <g>
              <path
                className={Classes.hexagonOrange}
                d="M20,8.5,31.21,15v13L20,34.4,8.78,27.92V15L20,8.5M20-.22,1.23,10.61V32.28L20,43.12,38.76,32.28V10.61L20-.22Z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                className={Classes.hexagonRed}
                d="M40.76,44.51,52,51v13L40.76,70.4,29.55,63.93V51l11.21-6.47m0-8.72L22,46.62V68.29L40.76,79.13,59.53,68.29V46.62L40.76,35.79Z"
              />
            </g>
            <g>
              <path
                className={Classes.hexagonBlue}
                d="M61.62,80.52,72.83,87v13l-11.21,6.47L50.4,99.94V87l11.22-6.47m0-8.73L42.85,82.63V104.3l18.77,10.83L80.38,104.3V82.63L61.62,71.79Z"
              />
            </g>
            <g>
              <path
                className={Classes.hexagonGreen}
                d="M19.91,80.52,31.12,87v13l-11.21,6.47L8.7,99.94V87l11.21-6.47m0-8.73L1.14,82.63V104.3l18.77,10.83L38.68,104.3V82.63L19.91,71.79Z"
              />
            </g>
          </g>
        </g>
        <g>
          <path
            className={Classes.hexagonPurple}
            d="M82.29,44.51,93.51,51v13L82.29,70.4,71.08,63.93V51l11.21-6.47m0-8.72L63.52,46.62V68.29L82.29,79.13l18.77-10.84V46.62L82.29,35.79Z"
          />
        </g>
  </g>
  <g>
    <g>
      <path
        className={Classes.letter}
        d="M123.69,9.35h4.39v3.13a17.11,17.11,0,0,1-.09,1.73h.09a9.23,9.23,0,0,1,8.13-5.42c4,0,6.31,1.82,7.11,5.37h.09a9.52,9.52,0,0,1,8.41-5.37c5.33,0,7.81,3,7.81,9.07V33h-4.54V18.84c0-3.32-.65-5.94-4.2-5.94-3.32,0-5.8,2.81-6.64,6a14.31,14.31,0,0,0-.33,3.27V33h-4.53V18.84c0-3.09-.47-5.94-4.11-5.94-3.46,0-5.89,2.85-6.78,6.22a13.22,13.22,0,0,0-.28,3.08V33h-4.53Z"
      />
      <path className={Classes.letter} d="M165.42,0H170V4.63h-4.58Zm.05,9.35H170V33h-4.53Z" />
      <path
        className={Classes.letter}
        d="M188.51,18.23h1v-.42c0-3.88-2.2-5.19-5.19-5.19a12,12,0,0,0-6.59,2.29l-1.87-3.32a14.85,14.85,0,0,1,8.84-2.8c6,0,9.34,3.27,9.34,9.25V33h-4.2V30.76a18.31,18.31,0,0,1,.09-1.87h-.09a8.19,8.19,0,0,1-7.57,4.67c-4.07,0-8-2.48-8-7.2C174.26,18.56,184.54,18.23,188.51,18.23Zm-5.23,11.68c3.83,0,6.31-4,6.31-7.52v-.75h-1.17c-3.41,0-9.58.24-9.58,4.49C178.84,28.05,180.33,29.91,183.28,29.91Z"
      />
    </g>
    <g  className={Classes.hexagonRed}>
        <path
          className={Classes.letter}
          d="M123.82,44.62h25.77c12.89,0,22.18,8.69,22.18,22.07s-9.29,22.37-22.18,22.37H133.71v26.07h-9.89ZM148,80.47c8.49,0,13.69-5.29,13.69-13.78s-5.2-13.48-13.59-13.48H133.71V80.47Z"
        />
        <path
          className={Classes.letter}
          d="M179.85,44.62h9.69v55c0,6.1,2.4,7.19,5.4,7.19a15.44,15.44,0,0,0,1.7-.1v8.59a27.25,27.25,0,0,1-3.2.2c-5.49,0-13.59-1.49-13.59-14.18Z"
        />
        <path
          className={Classes.letter}
          d="M231.29,83.57h2.2v-.9c0-8.29-4.69-11.09-11.08-11.09-7.8,0-14.09,4.9-14.09,4.9l-4-7.09a31.67,31.67,0,0,1,18.87-6c12.79,0,20,7,20,19.78v32h-9v-4.79a38,38,0,0,1,.2-4h-.2a17.47,17.47,0,0,1-16.18,10c-8.69,0-17.18-5.29-17.18-15.38C200.83,84.27,222.8,83.57,231.29,83.57Zm-11.18,25c8.19,0,13.48-8.59,13.48-16.08v-1.6H231.1c-7.3,0-20.48.5-20.48,9.59C210.62,104.55,213.82,108.54,220.11,108.54Z"
        />
        <path
          className={Classes.letter}
          d="M257.46,73.08h-6.59V65.29h6.89V50.71h9.39V65.29h12.19v7.79H267.15V95.56c0,10.08,7.1,11.38,10.79,11.38a11.68,11.68,0,0,0,2.3-.2v8.59a26.59,26.59,0,0,1-3.4.2c-6.49,0-19.38-2-19.38-18.87Z"
        />
        <path
          className={Classes.letter}
          d="M291.82,73.08h-6.29V65.29h6.29v-2.4c0-16.68,12.59-18.77,19-18.77a20.81,20.81,0,0,1,3.7.3v8.29a14.06,14.06,0,0,0-2.5-.2c-3.7,0-10.59,1.2-10.59,10.58v2.2h12v7.79h-12v42.05h-9.59Z"
        />
        <path
          className={Classes.letter}
          d="M344.26,63.39c15.08,0,27.27,11.09,27.27,26.37s-12.19,26.57-27.27,26.57S317,105.15,317,89.76,329.18,63.39,344.26,63.39Zm0,44.55c9.59,0,17.38-7.59,17.38-18.18s-7.79-18-17.38-18-17.38,7.5-17.38,18S334.77,107.94,344.26,107.94Z"
        />
        <path
          className={Classes.letter}
          d="M381,64.59h9.39v8.79a36.29,36.29,0,0,1-.2,3.8h.2c2.29-7.39,8.19-13.19,16-13.19a17,17,0,0,1,2.49.2v9.59a13.81,13.81,0,0,0-2.79-.3c-6.19,0-11.89,4.4-14.19,11.89a31,31,0,0,0-1.19,9.09v20.67H381Z"
        />
        <path
          className={Classes.letter}
          d="M416.48,64.59h9.39v6.7a33.75,33.75,0,0,1-.21,3.69h.21c2.39-5.89,9.48-11.59,17.38-11.59,8.48,0,13.48,3.9,15.18,11.49h.2a20.34,20.34,0,0,1,18-11.49c11.38,0,16.68,6.5,16.68,19.38v32.36H483.6V84.87c0-7.09-1.4-12.69-9-12.69-7.09,0-12.39,6-14.19,12.89a30.12,30.12,0,0,0-.69,7v23.07H450V84.87c0-6.59-1-12.69-8.79-12.69-7.39,0-12.59,6.1-14.49,13.29a27.87,27.87,0,0,0-.6,6.59v23.07h-9.68Z"
        />
    </g>
  </g>
  <g>
    <g>
      <path
        className={Classes.hexagonOrange}
        d="M20,8.5,31.21,15v13L20,34.4,8.78,27.92V15L20,8.5M20-.22,1.23,10.61V32.28L20,43.12,38.76,32.28V10.61L20-.22Z"
      />
    </g>
  </g>
    </svg>
    </div>
  );
};

function Logo() {
  return (
    <div>
      {
        renderSvg({})
      }
    </div>
  );
}

export default Logo;