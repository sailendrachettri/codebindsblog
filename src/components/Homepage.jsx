import React from 'react'
import { Sidebar } from './Sidebar'
import { Cards } from './Cards'
import Newslatter from './Newslatter'
import Carousel from './Carousel'

export const Homepage = () => {
    return (
        <>
            <div className="container-fluid row justify-content-center mt-2">
                <div className="col-sm-10 col-md-3 order-last">
                    <Sidebar />
                    <Newslatter />
                </div>
                <div className="col-sm-12 col-md-9 text-center mt-4 order-first">
                    <h2>Learn Large Language Model</h2>
                    <p className='mb-4 mx-3 lh-lg' style={{ textAlign: 'justify' }}>Large language models are advanced artificial intelligence systems capable of understanding and generating human-like text. They're trained on vast amounts of data and can perform various language-related tasks such as translation, summarization, and conversation. These models have achieved significant breakthroughs in natural language processing and are used in applications ranging from chatbots to content generation, and even in scientific research.</p>

                    <div className='my-5 text-start'>
                        <h3>Comprehensive Field</h3>
                        <Carousel />
                    </div>
                    <div className='my-5'>
                        <Cards />
                    </div>
                </div>
            </div >
        </>
    )
}
