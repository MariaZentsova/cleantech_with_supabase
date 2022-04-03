import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import letterFrequency, { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency';
import { scaleBand, scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';

const data = letterFrequency.slice(5);
const verticalMargin = 120;

// accessors
const getLetter = (d) => d.letter;
const getLetterFrequency = (d) => Number(d.frequency) * 100;

const BarChart = ({ width, height }) => {


   // define margins from where to start drawing the chart
   const margin = { top: 40, right: 40, bottom: 70, left: 40 };


  // bounds
      // defining inner measurements
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  //const xMax = width;
  //const yMax = height - verticalMargin;

  const xScale = useMemo(
    () =>
      scaleBand({
        range: [0, innerWidth],
        round: true,
        domain: data.map(getLetter),
        padding: 0.4,
      }),
    [innerWidth],
  );
  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight, 0],
        round: true,
        domain: [0, Math.max(...data.map(getLetterFrequency))],
      }),
    [innerHeight],
  );

  return width < 10 ? null : (
    <svg width={width} height={height}>
       <Group left={margin.left} top={margin.top}>
      <AxisBottom
        scale={xScale}
        stroke={'#000'}
        tickStroke={'#000'}
        tickTextFill={'#000'}
        top={innerHeight}
        tickLabelProps={() => ({
          fill: '#000',
          fontSize: 11,
          textAnchor: 'middle',
        })}
      />
      <AxisLeft
        tickTextFill={'#000'}
        numTicks = {6}
        stroke={'#000'}
        tickStroke={'#000'}
        scale={yScale}
        tickLabelProps={() => ({
          fill: '#000',
          fontSize: 11,
          textAnchor: 'end',
        })} />
     
        {data.map((d) => {
          const letter = getLetter(d);
          const barWidth = xScale.bandwidth();
          const barHeight = innerHeight - (yScale(getLetterFrequency(d)) ?? 0);
          const barX = xScale(letter);
          const barY = innerHeight - barHeight;
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