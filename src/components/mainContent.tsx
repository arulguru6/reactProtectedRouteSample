import React from 'react'
import { Outlet } from 'react-router-dom'

function MainContent() {
    return (
        <div className='inner-content'>

            <Outlet></Outlet>
        </div>

    )
}

export default MainContent