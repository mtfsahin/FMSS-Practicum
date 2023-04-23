import React from 'react'
import { Outlet } from 'react-router-dom'

export default function about() {
    return (
        <>
            {/* about page content */}
            <div className='flex justify-center mt-10'>
            FMSS Practicum Week-4 - Book app study
            </div>
            {/* call Outlet from react router dom */}
            <Outlet/>
        </>
    )
}
