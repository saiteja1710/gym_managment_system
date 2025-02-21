import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/users/all")
            .then(({ data }) => setUsers(data))
            .catch(() => alert("Failed to fetch users"));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user._id} className="p-3 bg-white shadow rounded mb-2">{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
