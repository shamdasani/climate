import React from 'react'
import { VictoryChart, VictoryArea, VictoryAxis } from 'victory-chart'
const data = require('./420yrs.json')

export default () => (
  <VictoryChart
    animate={{
      duration: 1000,
      onEnter: { duration: 512, after: () => ({ y: 0 }) }
    }}
  >
    <VictoryAxis
      independentAxis
      tickValues={[
        400000,
        350000,
        300000,
        250000,
        200000,
        150000,
        100000,
        50000,
        0
      ]}
      style={{
        tickLabels: {
          fontSize: 8
        }
      }}
    />
    <VictoryAxis dependentAxis tickFormat={tick => tick + ' ºC'} />
    <VictoryArea
      data={data}
      x="YearsBeforePresent"
      y="ChangeinTemp"
      padding={0}
      style={{
        data: {
          stroke: '#ff4949',
          strokeWidth: 0.2,
          fill: '#ff7f7f',
          fillOpacity: 0.2
        }
      }}
    />
  </VictoryChart>
)
