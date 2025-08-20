
import React from "react";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register chart components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StudentProgressBar = ({ progress }) => {
    // progress is a number (0–100)
    const data = {
        labels: ["Course Progress"],
        datasets: [
            {
                label: "Progress",
                data: [progress], // Example: 65 means 65% progress
                backgroundColor: "#477BFF", // Tailwind's blue-500
                borderRadius: 8, // rounded bar
                barThickness: 20
            }
        ]
    };

    const options = {
        indexAxis: "y", // Horizontal bar
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) => `${context.raw}%`
                }
            }
        },
        scales: {
            x: {
                display: false,
                min: 0,
                max: 100,
                grid: { display: false }
            },
            y: {
                display: false,
                grid: { display: false }
            }
        }
    };

    return <Bar data={data} options={options} />;
};

export default StudentProgressBar;
