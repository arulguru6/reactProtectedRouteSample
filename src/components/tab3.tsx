import React from 'react'
import WithPermission from './withPermission'

function Tab3() {
    return (
        <div className='tab3'>
            Tab3
            <WithPermission roleRequired="ADMIN" message='Only Admin can view this'>
                <h1>Welcome Admin!</h1>
                <button>Edit</button>
            </WithPermission>
        </div>
    )
}

export default Tab3