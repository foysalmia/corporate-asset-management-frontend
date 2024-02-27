/* eslint-disable no-unused-vars */
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
    return (
        <div className="mt-10 px-5">
            <h1 className="font-semibold">Assets Distributed:</h1>
            <Bar data={{
                labels: ['January', 'February', 'March', 'April', 'May','June','July','August','September','October','November','December'],
                datasets: [
                    {
                        label: "Distributed",
                        data: [10,40,30,100,50,15,70,25,58,35,100,59],
                        backgroundColor: [
                            "rgba(101, 88, 245, 1)"
                        ]
                    }
                
                ],
                
            }}/>
        </div>
    );
};

export default BarChart;