import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserType } from './users';

function SingleUser() {
    const params = useParams();
    const [user, setUser] = useState<UserType>();


    useEffect(() => {
        console.log("users:", params)
        const singleUserApiUrl = `https://jsonplaceholder.typicode.com/users/${params.userid}`
        fetch(singleUserApiUrl)
            .then(response => response.json())
            .then(json => setUser(json))
    }, [params])
    return (
        <>
            <Link to="/users">Go Back</Link>
            {
                user && <div className='users__card' key={user.id}>

                    <p>Name:{user.name}</p>
                    <p>Email:{user.email}</p>
                    <p>Phone:{user.phone}</p>
                    <p>Website:{user.website}</p>
                </div>
            } </>
    )
}

export default SingleUser