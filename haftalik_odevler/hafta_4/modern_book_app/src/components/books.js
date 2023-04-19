import React from 'react'
import { Outlet } from 'react-router-dom'

export default function books() {
    return (
        <div>
            <div>Books page</div>
            <Outlet></Outlet>
        </div>
    )
}
