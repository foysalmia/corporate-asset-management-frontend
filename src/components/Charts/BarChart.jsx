/* eslint-disable no-unused-vars */
import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2';

const BarChart = ({data}) => {
    const {monthly_distribute} = data;

    return (
        <div className="mt-10 px-5">
            <h1 className="font-semibold">Assets Distributed:</h1>
            <Bar data={{
               labels: monthly_distribute?.map(data => data.month),
                datasets: [
                    {
                        label: "Distributed",
                        data: monthly_distribute?.map(data => data.total_distribute),
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