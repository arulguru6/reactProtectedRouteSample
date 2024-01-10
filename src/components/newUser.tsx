import React, { useState } from 'react'
import { UserType } from './users';
import { Link } from 'react-router-dom';

function NewUser() {

    const [newUserData, setNewUserData] = useState<UserType>({
        id: 0,
        name: "",
        phone: "",
        email: "",
        website: "",
    })
    const handleChange = (e: any) => {
        const _newUserData = { ...newUserData } as any;
        _newUserData[e.target.name] = e.target.value;
        setNewUserData(_newUserData);
    }
    const handlePostData = () => {

    }
    return (
        <div className='new-user'>
            <h1>Add New User</h1>
            <Link to="/users">Go Back</Link>
            <div className='new-user__form'>
                <div className='new-user__form-group'>
                    <label htmlFor=''>Name</label>
                    <input type='text' name='name' onChange={handleChange} value={newUserData?.name} placeholder='Jon'></input>
                </div>

                <div className='new-user__form-group'>
                    <label htmlFor=''>Phone</label>
                    <input type='text' name='phone' onChange={handleChange} value={newUserData?.phone} placeholder='xxxxxxxx'></input>
                </div>

                <div className='new-user__form-group'>
                    <label htmlFor=''>Email</label>
                    <input type='text' name='email' onChange={handleChange} value={newUserData?.email} placeholder='AS@d.com'></input>
                </div>

                <div className='new-user__form-group'>
                    <label htmlFor=''>Website</label>
                    <input type='text' name='website' onChange={handleChange} value={newUserData?.website} placeholder='xxxx.xom'></input>
                </div>
                <div className='new-user__form-group'>
                    <button onClick={handlePostData}>Save Data</button>
                </div>
            </div>
        </div>
    )
}

export default NewUser