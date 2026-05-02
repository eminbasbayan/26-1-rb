import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Layout/Header'

const MainLayout = () => {
    return (
        <div className='main-layout min-h-screen'>
            <Header />
            <main className='content-wrapper mx-auto w-full max-w-7xl'>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout
