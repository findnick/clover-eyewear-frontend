import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 2000 },
    { name: 'May', revenue: 2780 },
    { name: 'Jun', revenue: 1890 },
];

const Analytics = () => (
    <div>
        <h2>Revenue Analytics</h2>
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    </div>
);

export default Analytics;
