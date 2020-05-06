import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2'
import axios from 'axios';


const StatsVN = () => {
    
    const [dataVN, setDataVN] = useState([]);

    useEffect(() => {
            
        axios.get('https://td.fpt.ai/corona/corona-chart-vn.json')
        .then(function (response) {
            setDataVN(response.data)  
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
        });
     }, []);
     
    const ChartVN = () => (
        <div className="App">
        {
           <Line
            data = {
              {
                labels:  Object.keys(dataVN).map((key)=>key),
                datasets:[{
                      data: Object.keys(dataVN).map((key)=>dataVN[key][0]),
                      label:"Số ca nhiễm",
                      fill:true,
                      lineTension: 0.1,
                      borderColor: 'red',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'red',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'red',
                      pointHoverBorderColor: 'red',
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                },
                {
                      data: Object.keys(dataVN).map((key)=>dataVN[key][1]),
                      label:"Số ca nghi nhiễm",
                      fill:true,
                      lineTension: 0.1,
                      borderColor: 'green',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'green',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'green',
                      pointHoverBorderColor: 'green',
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                     
                },
                {
                      data: Object.keys(dataVN).map((key)=>dataVN[key][2]),
                      label:"Số ca đã phục hồi",
                      fill:true,
                      lineTension: 0.1,
                      borderColor: 'aqua',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'aqua',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'aqua',
                      pointHoverBorderColor: 'aqua',
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      
                }
                ]
              }
            }
           />
        } 		
     </div>     
      );
      return <ChartVN></ChartVN>
}
export default  StatsVN;