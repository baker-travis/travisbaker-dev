import React from 'react';

import Circle from './NameCircle';

const vConfig = [
  [24, 80],
  [20, 81],
  [16, 82],
  [12, 83],
  [8, 84],
  [4, 85],
  [0, 88],
  [4, 91],
  [8, 92],
  [12, 93],
  [16, 94],
  [20, 95],
  [24, 96]
];

export default function LetterV() {
  return vConfig.map(([bottom, left]) => (
    <Circle key={`${bottom}${left}`} style={{ bottom, left }} />
  ));
}
