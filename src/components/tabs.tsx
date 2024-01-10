import React from 'react'
import TabNav from './tabNav'
import { Outlet } from 'react-router-dom'

function Tabs() {
    return (
        <div className='tabs'>
            <h1>Tabs Demo Page</h1>
            <TabNav></TabNav>
            <Outlet></Outlet>

        </div>
    )
}

export default Tabs