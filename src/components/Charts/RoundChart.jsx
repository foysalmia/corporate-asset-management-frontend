/* eslint-disable no-unused-vars */
import Chart from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2';

const RoundChart = () => {
    return (
        <div className='col-span-2 bg-white border border-gray-100 drop-shadow-sm rounded-lg px-5 py-2'>
            <h1 className="font-semibold">Assets Category:</h1>
            <Doughnut data={{
                labels: ['Monitor','Mouse','Laptop','Keyboard','Mobile','Printer'],
                datasets: [
                    {
                        label: "Distributed",
                        data: [53,50,130,78,80,30],
                        backgroundColor: [
                            "rgba(101, 88, 245, 1)",
                            "rgba(166, 130, 255, 1)",
                            "rgba(85, 193, 255, 1)",
                            "rgba(16, 46, 74, 1)",
                            "rgba(247, 195, 37, 1)",
                            "rgba(0, 0, 0, 1)"
                        ]
                    }

                ],

            }} />
        </div>
    );
};

export default RoundChart;