import React, { useState, useEffect } from 'react';

const Dashboard: React.FC = () => {
    const [completedUsers, setCompletedUsers] = useState(0);
    const [paidUsers, setPaidUsers] = useState(0);

    useEffect(() => {
        // Simulate fetching analytics data
        setCompletedUsers(Math.floor(Math.random() * 1000));
        setPaidUsers(Math.floor(Math.random() * 500));
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Analytics Dashboard</h1>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Onboarding Funnel Metrics</h2>
                <p className="mb-2">Completed Users: {completedUsers}</p>
                <p>Paid Users: {paidUsers}</p>
            </div>
        </div>
    );
};

export default Dashboard;