import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export type UserType = {
    id: number,
    name: string,
    email: string,
    phone: string,
    website: string,

}

type UsersType = Array<UserType>;

function Users() {
    const [users, setUsers] = useState<UsersType>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    return (
        <div className='users'>
            <h2>All Users</h2>

            <Link to="/users/new">Add New User</Link>
            <div className='users__list'>
                {
                    users && users.map((user) => (
                        <div className='users__card' key={user.id}>
                            <Link to={`/users/${user.id}`}>  <p>Name:{user.name}</p></Link>

                            <p>Email:{user.email}</p>
                            <p>Phone:{user.phone}</p>
                            <p>Website:{user.website}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Users