import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white p-5">
            <h2 className="text-2xl font-bold mb-6">Gym Admin</h2>
            <nav>
                <ul>
                    <li className="mb-4">
                        <Link to="/dashboard" className="block p-3 rounded hover:bg-gray-700">Dashboard</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/users" className="block p-3 rounded hover:bg-gray-700">Users</Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/packages" className="block p-3 rounded hover:bg-gray-700">Packages</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
