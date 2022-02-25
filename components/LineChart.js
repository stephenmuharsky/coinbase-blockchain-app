import styled from "styled-components"
import { Line } from "react-chartjs-2"
import { plugins } from "chart.js"

const LineChart = () => {
  return (
    <Wrapper>
      <Line
        height={150}
        widget={400}
        options={{
          legend: {
            display: false,
          },
        }}
        data={{
          labels: [
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
          ],
          datasets: [
            {
              fill: false,
              lineTension: 0.1,
              backgroundColor: "#3773f5",
              borderColor: "#3773f5",
              borderCapStyle: "butt",
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: "miter",
              pointBorderColor: "#3773f5",
              pointBackgroundColor: "#3773f5",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "#3773f5",
              pointHoverBorderColor: "#3773f5",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
            },
          ],
        }}
      />
    </Wrapper>
  )
}

export default LineChart

const Wrapper = styled.div``
