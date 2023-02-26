/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';

export default function Circle(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <circle
        cx={12}
        cy={12}
        r={10}
      />
    </svg>
  );
}
