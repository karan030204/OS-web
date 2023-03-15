import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { arrayData } from './FCFSScheduling';

const data = [
  {
    name: 'Req 1',
    uv: 400,
  },
  {
    name: 'Req 2',
    uv: 30,
  },
  {
    name: 'Req 3',
    uv: 200,
    amt: 2290,
  },
  {
    name: 'Req 4',
    uv: 278,
  },
  {
    name: 'Req 5 ',
    uv: 189,
  },
  {
    name: 'Req 6',
    uv: 239,
  },
  {
    name: 'Req 7',
    uv: 349,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/line-chart-specified-domain-lm9p7';

  render() {
    return (
<>
      <ResponsiveContainer className="mt-64" width="80%" height="100%" aspect={2}>
        <LineChart
          layout="vertical"
          width={500}
          height={300}
          data={arrayData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0,10]} />
          <YAxis dataKey="Request_Id" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="Track_Number" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </>
    );
  }
}
