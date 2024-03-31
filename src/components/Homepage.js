import React from 'react'
import { Sidebar } from './Sidebar'
import { Cards } from './Cards'

export const Homepage = () => {
    return (
        <>
            <div class="container-fluid row justify-content-center">
                <div className="col-sm-10 col-md-3">
                    <Sidebar />
                </div>
                <div className="col-sm-12 col-md-9">
                    <Cards />
                </div>
            </div >
        </>
    )
}
