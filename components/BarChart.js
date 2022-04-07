import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import letterFrequency, { LetterFrequency } from '@visx/mock-data/lib/mocks/letterFrequency';
import { scaleBand, scaleLinear } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import { rollups, sum, scaleOrdinal,quantize, interpolateRainbow } from 'd3'

const data = letterFrequency.slice(5);
const verticalMargin = 120;

// accessors
const getLetter = (d) => d.letter;
const getLetterFrequency = (d) => Number(d.frequency) * 100;

const getCountry = (d) => d.Country
const getCountryValue = (d) => d.Value


const BarChart = ({ width, height, investment }) => {


  //preprocess the data
  let investment_by_country = rollups(
    investment,
  xs => sum(xs, x => x.total_usd),
  d => d.countries.name
)
.map(([k, v]) => ({ Country: k, Value: v }))

// sort values
investment_by_country.sort(function(a, b){
  return b["Value"]-a["Value"];
});

console.log(investment_by_country)



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
        domain: investment_by_country.map(getCountry),
        padding: 0.4,
      }),
    [innerWidth],
  );
  const yScale = useMemo(
    () =>
      scaleLinear({
        range: [innerHeight, 0],
        round: true,
        domain: [0, Math.max(...investment_by_country.map(getCountryValue))],
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
     
        {investment_by_country.map((d) => {
          const country = getCountry(d);
          const barWidth = xScale.bandwidth();
          const barHeight = innerHeight - (yScale(getCountryValue(d)) ?? 0);
          const barX = xScale(country);
          const barY = innerHeight - barHeight;
          return (
            <Bar
              key={`bar-${country}`}
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