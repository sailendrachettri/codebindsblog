import React from 'react'
import { Sidebar } from './Sidebar'
import Newslatter from './Newslatter'
import Qnamenu from './pages/Qnamenu'
import TopFiveArticles from './blogs/TopFiveArticles'
import AllBlogPosts from './blogs/AllBlogPosts'
import LLMCards from './pages/LLMCards'
import SimilarReads from './pages/SimilarReads'

export const Homepage = () => {
    return (
        <>
            <div className="container-fluid row justify-content-center mt-2">
                {/* LEFT SIDE OF A PAGE */}
                <div className="col-sm-10 col-md-3 order-last">
                    <Sidebar />
                    <Newslatter />
                    <Qnamenu />
                </div>

                {/* RIGHT SIDE OF A PAGE */}
                <div className="col-sm-12 col-md-9 text-center mt-4 order-first">
                    <LLMCards />
                    <TopFiveArticles />
                    <AllBlogPosts />
                    <SimilarReads />
                </div>
            </div >
        </>
    )
}
