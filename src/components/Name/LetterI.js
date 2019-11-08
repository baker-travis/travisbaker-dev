import React from 'react';

import Circle from './NameCircle';

const iConfig = [
  [0, 108],
  [0, 112],
  [0, 116],
  [0, 120],
  [0, 124],
  [4, 116],
  [8, 116],
  [12, 116],
  [16, 116],
  [20, 116],
  [24, 108],
  [24, 112],
  [24, 116],
  [24, 120],
  [24, 124]
];

export default function LetterI() {
  return iConfig.map(([bottom, left]) => (
    <Circle key={`${bottom}${left}`} style={{ bottom, left }} />
  ));
}
