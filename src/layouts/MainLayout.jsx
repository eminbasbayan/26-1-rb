import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Layout/Header'

const MainLayout = () => {
    return (
        <div className='main-layout'>
            <Header />
            <div className='content-wrapper'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout