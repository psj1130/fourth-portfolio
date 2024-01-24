import React from "react";
import './chart.css'
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

export default function Chart(props) {

  const date = props.data.map((d) => {return d.createdAt})
  console.log(date);
  
  const formatXAxis = (xTick: string) => {
    return `${xTick.substring(5,7)}/${xTick.substring(8, 10)}`;
  };
  

  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={props.data} margin={{ top: 40, right: 40, bottom: 30, left: 40 }}>
          <XAxis dataKey='createdAt' stroke="5550bd" tickFormatter={formatXAxis}/>
          <YAxis dataKey='o_amount' stroke="5550bd" hide />
          <Tooltip />
          <Line type="monotone" dataKey='o_amount'/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}