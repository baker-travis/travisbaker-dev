import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Circle from './Circle';
import { useNameSize } from './NameContext';

const AnimatedCircle = styled(Circle)`
  transition: bottom 800ms, left 800ms;
`;

// width is 153 x 29
export default function NameCircle({
  style: { left: styleLeft, bottom: styleBottom }
}) {
  const { width, height } = useNameSize();
  const [left, setLeft] = useState(Math.random() * (width - 20));
  const [bottom, setBottom] = useState(Math.random() * (height - 20));

  const scale = width / 153;

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setLeft(styleLeft * scale);
      setBottom(styleBottom * scale);
    }, 1500);

    return () => window.clearTimeout(timeout);
  }, [styleLeft, styleBottom, scale]);

  return (
    <AnimatedCircle
      className="animatedName"
      width={scale * 3}
      style={{ left, bottom, position: 'absolute' }}
      fill="#d6deeb"
    />
  );
}
