import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

export default function Home() {
    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/user');
            const body = await res.json();
            setUser(body);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome To Seedbay</h1>
            {user.name && <p>Name: {user.name}</p>}
            {user.email && <p>Email: {user.email}</p>}
        </div>
    );
}
