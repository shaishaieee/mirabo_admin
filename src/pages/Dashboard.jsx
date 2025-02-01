import "../css/Dashboard.css";
import { FaRobot } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { RiAdvertisementFill } from "react-icons/ri";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const filters = ["日数", "週", "月"];
  const [selectedFilter, setSelectedFilter] = useState("日数");
  const dataMap = {
    日数: {
      labels: [
        "月曜日",
        "火曜日",
        "水曜日",
        "木曜日",
        "金曜日",
        "土曜日",
        "日曜日",
      ],
      data: {
        users: [100, 200, 150, 300, 250, 400, 500],
        chatgptResponse: [50, 100, 75, 150, 125, 200, 250],
        ads: [20, 40, 30, 60, 50, 80, 100],
      },
    },
    週: {
      labels: ["第1週", "第2週", "第3週", "第4週"],
      data: {
        users: [1000, 1500, 1200, 2000],
        chatgptResponse: [500, 750, 600, 1000],
        ads: [200, 300, 250, 400],
      },
    },
    月: {
      labels: [
        "1月",
        "2月",
        "行進",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      data: {
        users: [
          4000, 5000, 4500, 6000, 5500, 7000, 3000, 2200, 8000, 4000, 3500,
          6500,
        ],
        chatgptResponse: [
          2000, 2500, 2250, 3000, 2750, 3500, 4500, 3300, 4500, 6000, 4700,
          4100,
        ],
        ads: [
          800, 1000, 900, 1200, 1100, 1400, 800, 1000, 900, 1200, 1100, 1400,
        ],
      },
    },
  };

  const { labels, data } = dataMap[selectedFilter];

  const chartData = {
    labels,
    datasets: [
      {
        label: "ミニアプリユーザー総数",
        data: data.users,
        borderColor: "#17a2b8",
        backgroundColor: "rgba(46, 198, 221, 0.2)",
        tension: 0.4,
      },
      {
        label: "ミニアプリ広告再生回数合計",
        data: data.ads,
        borderColor: "#28a745",
        backgroundColor: "rgba(45, 239, 136, 0.2)",
        tension: 0.4,
      },
      {
        label: "総GPT応答",
        data: data.chatgptResponse,
        borderColor: "#ffc107",
        backgroundColor: "rgba(236, 248, 78, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: selectedFilter,
        },
      },
      y: {
        title: {
          display: true,
          text: "カウント",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="dashboard">
        <h1>ダッシュボード</h1>
        <div className="dashboard-boxes">
          {/* Box */}
          <div>
            <div className="box A">
              <div className="box-text">
                <h1>150</h1>
                <h4>ミニアプリユーザー総数</h4>
              </div>

              <i>
                <FaUsersLine />
              </i>
            </div>
          </div>

          {/* Box */}
          <div>
            <div className="box B">
              <div className="box-text">
                <h1>109</h1>
                <h4>ミニアプリ広告再生回数合計</h4>
              </div>

              <i>
                <RiAdvertisementFill />
              </i>
            </div>
          </div>

          {/* Box */}
          <div>
            <div className="box C">
              <div className="box-text">
                <h1>290</h1>
                <h4>総GPT応答</h4>
              </div>

              <i>
                <FaRobot />
              </i>
            </div>
          </div>
        </div>

        <div className="dashboard-linegraph">
          <div className="line-graph-container">
            <div className="filter-buttons">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${
                    selectedFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <Line data={chartData} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
