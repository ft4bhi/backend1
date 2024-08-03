"use client";
import React from 'react';
import { useState } from 'react';

const Inputpage = ({ onSuccess }: { onSuccess: () => void }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handlePost = async () => {
        // Validate input fields
        if (!username || !email) {
            alert('Username and Email are required.');
            return;
        }

        await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            body: JSON.stringify({ name: username, email }), // Ensure `name` is included
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        });

        // Trigger revalidation
        onSuccess();

        setUsername("");
        setEmail("");
    };

    return (
        <div>
            <input className='border border-gray-600' type="text" value={username}
                onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
            <br />
            <input className='border border-gray-600' type="text" value={email}
                onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <br />
            <button className='border border-gray-600 text-white bg-blue-400' onClick={handlePost}>Submit</button>
        </div>
    );
}

export default Inputpage;
