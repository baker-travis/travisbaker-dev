import React from 'react';

import Circle from './NameCircle';

const aConfig = [
  [0, 52],
  [4, 53],
  [8, 54],
  [12, 55],
  [16, 56],
  [20, 57],
  [24, 60],
  [20, 63],
  [16, 64],
  [12, 65],
  [8, 66],
  [4, 67],
  [0, 68],
  [8, 57],
  [8, 60],
  [8, 63]
];

export default function LetterA() {
  return aConfig.map(([bottom, left]) => (
    <Circle key={`${bottom}${left}`} style={{ bottom, left }} />
  ));
}
