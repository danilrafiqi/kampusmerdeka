import * as React from "react";

const Arrow = (props) => (
  <svg
    width={800}
    height={800}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 10v3M12 16v-.011"
      stroke="#323232"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M10.252 5.147 3.65 17.029C2.91 18.362 3.874 20 5.399 20h13.202c1.525 0 2.489-1.638 1.748-2.971l-6.6-11.882c-.763-1.372-2.735-1.372-3.497 0Z"
      stroke="#323232"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Arrow;
