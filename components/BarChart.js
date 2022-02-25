import { Bar } from "react-chartjs-2"
//import { Chart as ChartJS } from "chart.js/auto"

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "red",
                "blue",
                "yellow",
                "green",
                "purple",
                "orange",
              ],
              borderWidth: 1,
            },
            { label: "Quantity" },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
        }}
      />
    </div>
  )
}

export default BarChart
