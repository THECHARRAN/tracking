import React from 'react';
import Sidebar from '../../layout/sidebar';
import Shipment from '../shipment';

import {
  FaShippingFast,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaExclamationTriangle
} from 'react-icons/fa';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer
} from 'recharts';
import './MetricsPanel.css';

const metricData = [
  { title: 'Shipments', value: 1240, icon: <FaShippingFast /> },
  { title: 'Delivered', value: 1130, icon: <FaCheckCircle /> },
  { title: 'Pending', value: 90, icon: <FaClock /> },
  { title: 'Delayed', value: 20, icon: <FaExclamationTriangle /> },
  { title: 'Cancelled', value: 10, icon: <FaTimesCircle /> }
];

const shipmentData = [
  { date: 'Mon', shipments: 200 },
  { date: 'Tue', shipments: 300 },
  { date: 'Wed', shipments: 250 },
  { date: 'Thu', shipments: 400 },
  { date: 'Fri', shipments: 380 },
  { date: 'Sat', shipments: 500 },
  { date: 'Sun', shipments: 450 }
];

const regionData = [
  { region: 'North', shipments: 400 },
  { region: 'South', shipments: 300 },
  { region: 'East', shipments: 200 },
  { region: 'West', shipments: 350 }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: '#1a1a1a',
        border: '1px solid #444',
        padding: '6px 10px',
        borderRadius: '4px',
        color: '#fff',
        fontSize: '12px'
      }}>
        <div><strong>{label}</strong></div>
        <div>Shipments: {payload[0].value}</div>
      </div>
    );
  }
  return null;
};

const MetricsPanel = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard">
        {/* Metric Cards */}
        <div className="metrics-row">
          {metricData.map((metric, index) => (
            <div className="metric-card" key={index}>
              <div className="icon">{metric.icon}</div>
              <h3>{metric.title}</h3>
              <p>{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Charts and Globe Row */}
        <div className="charts-row">
          <div className="chart-card">
            <h3>📈 Shipment Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={shipmentData}>
                <CartesianGrid stroke="#444" />
                <XAxis dataKey="date" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="shipments"
                  stroke="#00bfff"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>📊 Region Breakdown</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionData}>
                <CartesianGrid stroke="#444" />
                <XAxis dataKey="region" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar
                  dataKey="shipments"
                  fill="url(#colorBar)"
                  activeBar={{ fillOpacity: 1 }}
                />
                <defs>
                  <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff8c00" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#ff0080" stopOpacity={0.8} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card globe-card">
            <h3>🌍 Shipment Globe</h3>
            <div style={{ width: "50%", height: "50%" , }}>
              <Shipment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsPanel;
