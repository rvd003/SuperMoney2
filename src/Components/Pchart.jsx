import React from 'react';
import { PieChart, Pie} from 'recharts';


const Pchart = () => {

// Sample data
const data = [
{name: 'Geeksforgeeks', students: 400,fill:"red"},
{name: 'Technical scripter', students: 700,fill:"green"},
{name: 'Geek-i-knack', students: 200,fill:"blue"},
{name: 'Geek-o-mania', students: 1000,fill:"orange"}
];


return (
		<PieChart width={200} height={160}>
		<Pie data={data} dataKey="students" outerRadius={70} innerRadius={50} />
		</PieChart>
);
}

export default Pchart;
