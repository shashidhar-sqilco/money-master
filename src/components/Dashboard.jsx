/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { ResponsivePie } from "@nivo/pie";

// eslint-disable-next-line no-unused-vars
const Dashboard = ({ transactions }) => {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpense;

  const chartData = [
    { id: "Income", value: totalIncome },
    { id: "Expenses", value: totalExpense },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="text-lg mb-2">
          Balance:{" "}
          <span className={balance >= 0 ? "text-green-600" : "text-red-600"}>
            ${balance.toFixed(2)}
          </span>
        </p>

        <p className="text-lg mb-2">
          Total Income:{" "}
          <span className="text-green-600">${totalIncome.toFixed(2)}</span>
        </p>
        <p className="text-lg mb-2">
          Total Expenses:{" "}
          <span className="text-red-600">${totalExpense.toFixed(2)}</span>
        </p>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Income vs Expenses</h2>
        <div style={{ height: "300px" }}>
          <ResponsivePie
            data={chartData}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors={{ scheme: "set2" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            radialLabelsSkipAngle={10}
            radialLabelsTextColor="#333333"
            radialLabelsLinkColor={{ from: "color" }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
