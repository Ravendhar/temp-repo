import './cobProgressChart.css';
import React from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';
import CobRunningBatch from '../CobStage_RunningBatch/cobRunningBatch';

const CobProgressChart = () => {
  const data = [
    { name: "cob1", value: 100000000000 },
    { name: "cob2", value: 200000000000 },
    { name: "cob3", value: 300000000000 },
    { name: "cob4", value: 400000000000 },
    { name: "cob5", value: 500000000000 },
    { name: "cob6", value: 600000000000 },
    { name: "cob7", value: 700000000000 }        
  ];

  return ( 
    <div className='parentDiv'>
        <div className="cobProgressChart">
          <div className='header'>Cob Progress Chart</div>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </div>
        <div className='cobRunningBatch'>
            <CobRunningBatch/>
        </div>
    </div>   
  );
};

export default CobProgressChart;
