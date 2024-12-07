 'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, Line } from "react-chartjs-2"
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement,
  Title, 
  Tooltip, 
  Legend,
  PointElement
} from "chart.js"

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement,
  Title, 
  Tooltip, 
  Legend,
  PointElement
)

const performanceData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Average Grade',
      data: [75, 78, 80, 79, 82, 85],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: 'Attendance Rate',
      data: [90, 92, 88, 95, 93, 97],
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    }
  ]
}

const financialData = {
  labels: ['Fees Collected', 'Pending Payments'],
  datasets: [
    {
      data: [75000, 25000],
      backgroundColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)']
    }
  ]
}

export default function ReportsDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Student Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={performanceData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Financial Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar 
            data={financialData} 
            options={{
              indexAxis: 'y',
              elements: {
                bar: {
                  borderWidth: 2,
                }
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
