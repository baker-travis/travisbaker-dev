import React from 'react';

import Circle from './NameCircle';

const rConfig = [
  [0, 28],
  [4, 28],
  [8, 28],
  [12, 28],
  [16, 28],
  [20, 28],
  [24, 28],
  [24, 32],
  [23, 36],
  [21, 39],
  [17, 40],
  [13, 39],
  [11, 36],
  [10, 32],
  [6, 34],
  [3, 37],
  [0, 40]
];

export default function LetterR() {
  return rConfig.map(([bottom, left]) => (
    <Circle key={`${bottom}${left}`} style={{ bottom, left }} />
  ));
}
