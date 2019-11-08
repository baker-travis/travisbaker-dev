import React from 'react';

import Circle from './NameCircle';

const tConfig = [
  [0, 8],
  [4, 8],
  [8, 8],
  [12, 8],
  [16, 8],
  [20, 8],
  [24, 0],
  [24, 4],
  [24, 8],
  [24, 12],
  [24, 16]
];

export default function LetterT() {
  return tConfig.map(([bottom, left]) => (
    <Circle key={`${bottom}${left}`} style={{ bottom, left }} />
  ));
}
