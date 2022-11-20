import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "Q1",
    pv: 24,
    amt: 2400
  },
  {
    name: "Q2",
    pv: 28,
    amt: 2210
  },
  {
    name: "Q3",
    pv: 30,
    amt: 2290
  },
  {
    name: "Q4",
    pv: 39,
    amt: 2000
  },
  
];


function Grph() {
  return (
    <BarChart
      width={330}
      height={250}
      data={data}
      margin={{
        top: 5,
        right: 60,
        
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis />
      <CartesianGrid  />
      <Bar dataKey="pv" fill="#4227B1"  />
    </BarChart>
  );
}

export default Grph;