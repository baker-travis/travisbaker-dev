import React from 'react';

export default function Circle(props) {
  return (
    <svg {...props} viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50" fill={props.fill || 'black'} />
    </svg>
  );
}
