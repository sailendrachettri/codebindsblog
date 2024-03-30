import React from 'react'
import { Sidebar } from './Sidebar'
import { Cards } from './Cards'

export const Homepage = () => {
    return (
        <>
            <div class="container-fluid border d-flex">
                <Sidebar />
                <Cards />
            </div>
        </>
    )
}
