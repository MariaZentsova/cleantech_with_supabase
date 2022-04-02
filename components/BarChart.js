import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import letterFrequency, { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency';
import { scaleBand, scaleLinear } from '@visx/scale';

const data = letterFrequency.slice(5);
const verticalMargin = 120;

// accessors
const getLetter = (d) => d.letter;
const getLetterFrequency = (d) => Number(d.frequency) * 100;

const BarChart = ({width, height}) => {

     // bounds
  const xMax = width;
  const yMax = height - verticalMargin;

  const xScale = useMemo(
    () =>
      scaleBand({
        range: [0, xMax],
        round: true,
        domain: data.map(getLetter),
        padding: 0.4,
      }),
    [xMax],
  );
  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getLetterFrequency))],
      }),
    [yMax],
  );

    return width < 10 ? null :  (
        <svg width={width} height={height}>
      
        <Group top={verticalMargin / 2}>
          {data.map((d) => {
            const letter = getLetter(d);
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
            const barX = xScale(letter);
            const barY = yMax - barHeight;
            return (
              <Bar
                key={`bar-${letter}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="rgb(29, 223, 163, 0.6)"
                onClick={() => {
                  if (events) alert(`clicked: ${JSON.stringify(Object.values(d))}`);
                }}
              />
            );
          })}
        </Group>
      </svg>
    )
}

export default BarChart