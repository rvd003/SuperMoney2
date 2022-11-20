

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    date:"Q1",
    uv: 10,
    pv: 24,
    sv:27,
  },
  
  {
    date:"Q2",
    xv: 20,
    pv: 33,
    

    
  },
  {
    date:"Q3",
    xv: 30,
    pv: 34,
   
  },
  
  {
    date:"Q4",
    uv: 24,
    sv: 18,
    
  }]


// 

function Group() {
  return (
    <BarChart
      width={420}
      height={160}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid  />
      <XAxis dataKey="date" />
      
      <YAxis />
      
      
      <Bar dataKey="pv" fill="orange" />
      <Bar dataKey="xv" fill="red" />
      <Bar dataKey="uv" fill="green" />
      <Bar dataKey="sv" fill="blue" />
      
    </BarChart>
  );
}

export default Group;