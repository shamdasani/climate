import React from 'react'
import { VictoryChart, VictoryArea, VictoryAxis } from 'victory-chart'
const data = require('./temp-data.json')

export default () => (
  <VictoryChart
    animate={{
      duration: 768,
      onEnter: { duration: 512, after: () => ({ y: 0 }) }
    }}
  >
    <VictoryAxis
      independentAxis
      tickValues={[1880, 1900, 1920, 1940, 1960, 1980, 2000]}
      style={{
        tickLabels: {
          fontSize: 16,
          fill: '#fff'
        },
        axis: {
          stroke: '#fff'
        }
      }}
    />
    <VictoryAxis
      dependentAxis
      tickFormat={tick => tick + ' ºC'}
      style={{
        tickLabels: {
          fill: '#fff'
        },
        axis: {
          stroke: '#fff'
        }
      }}
    />
    <VictoryArea
      data={data}
      x="year"
      y="mean"
      padding={0}
      style={{
        data: {
          stroke: '#ff4949',
          strokeWidth: 2,
          fill: '#ff7f7f',
          fillOpacity: 0.2
        }
      }}
    />
  </VictoryChart>
)
