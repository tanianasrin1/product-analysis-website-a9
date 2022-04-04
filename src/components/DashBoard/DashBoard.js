import React from 'react';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './DashBoard.css'

const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401,
            // "cx":"50%",
            // "cy":"50%",
            // "outerRadius":50
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]

    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ];

    return (
        <div className='rechart'>
            
            <LineChart width={450} height={200} data={data}>
                <Line dataKey={"sell"}></Line>
                <XAxis dataKey={"month"}></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>

            </LineChart>

            <PieChart width={400} height={400}>
                <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8"></Pie>
                <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label ></Pie>

                <Tooltip></Tooltip>

            </PieChart>
            


        </div>
    );
};

export default DashBoard;