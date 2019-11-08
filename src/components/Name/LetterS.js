import React from 'react';

import Circle from './NameCircle';

const sConfig = [
  [24, 148],
  [24, 144],
  [23, 140],
  [21, 137],
  [18, 136],
  [15, 137],
  [13, 140],
  [11, 144],
  [9, 147],
  [6, 148],
  [3, 147],
  [1, 144],
  [0, 140],
  [0, 136]
];

export default function LetterS() {
  return sConfig.map(([bottom, left]) => (
    <Circle key={`${bottom}${left}`} style={{ bottom, left }} />
  ));
}
