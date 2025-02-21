import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const Dashboard = () => {
    const [analytics, setAnalytics] = useState({});

    useEffect(() => {
        axios.get("http://localhost:5000/api/dashboard/analytics", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then(({ data }) => setAnalytics(data))
            .catch(() => alert("Failed to fetch analytics"));
    }, []);

    const chartData = [
        { name: "Users", count: analytics.totalUsers || 0 },
        { name: "Active", count: analytics.activeMemberships || 0 },
        { name: "Expired", count: analytics.expiredMemberships || 0 },
        { name: "Packages", count: analytics.totalPackages || 0 },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <BarChart width={600} height={300} data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3182ce" />
            </BarChart>
        </div>
    );
};

export default Dashboard;
