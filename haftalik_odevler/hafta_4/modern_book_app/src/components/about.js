import React from 'react'
import { Outlet } from 'react-router-dom'


export default function about() {
    return (
        <>
            <div>About Page</div>
            <Outlet></Outlet>
        </>
    )
}
