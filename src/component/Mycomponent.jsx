import React, { useEffect, useState } from 'react';

function MyComponent() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api?results=5&noinfo')
            .then(response => response.json())
            .then(data => setUsers(data.results))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>
                    <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
                    <img src={user.picture.large} alt="Profile" />
                    <p>Email: {user.email}</p>
                    <p>Username: {user.login.username}</p>
                    <p>Location: {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Cell: {user.cell}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default MyComponent;