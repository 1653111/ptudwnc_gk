import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2'
import axios from 'axios';


const StatTotal = () => {
    const [dataTotal, setDataTotal] = useState([]);

    useEffect(() => {
        axios.get('https://td.fpt.ai/corona/corona-total.json')
        .then(function (response) {
            setDataTotal(response.data)         
        })
        .catch(function (error) {
          console.log(error);
        });     
     }, []);
    const ChartTotal = () => (
      
        <div className="App">
        {
           <Line
            data = {
              {
                labels:  Object.keys(dataTotal).map((key)=>key),
                datasets:[{
                      data: Object.keys(dataTotal).map((key)=>dataTotal[key][0]),
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
                      data: Object.keys(dataTotal).map((key)=>dataTotal[key][1]),
                      label:"Số ca tử vong",
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
                      data: Object.keys(dataTotal).map((key)=>dataTotal[key][2]),
                      label:"Số ca phục hồi",
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
      return <ChartTotal></ChartTotal>
}
export default  StatTotal;