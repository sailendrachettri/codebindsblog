import React from 'react'
import { Sidebar } from './Sidebar'
import { Cards } from './Cards'
import Newslatter from './Newslatter'
import Carousel from './Carousel'
import { BlogCarousels } from './blogs/BlogCarousels'

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
                    <p className='mb-4 mx-3 lh-lg' style={{ textAlign: 'justify' }}>LLMs have a wide range of applications, from content creation and language translation to automated customer service and code generation. They can be fine-tuned on specific tasks or datasets, further enhancing their performance in specialized domains. As the field of natural language processing continues to advance, the capabilities of large language models are expected to grow, offering new and innovative ways to interact with and leverage the power of language.</p>

                    <div className='my-5 text-start'>
                        <h3>Comprehensive Field</h3>
                        <Carousel />
                    </div>

                    <h3 className='text-start px-3'>Navigating the Landscape of Transformative AI Technologies</h3>
                    <p className='mb-4 mx-3 lh-lg' style={{ textAlign: 'justify' }}>The blog articles explore the frontiers of large language models (LLMs), discussing their impressive capabilities in natural language processing and the innovative applications they are enabling in the field of artificial intelligence. The articles also delve into the crucial role of building robust datasets for effective machine learning, highlighting the importance of data curation, annotation, and validation. Additionally, the articles provide a comprehensive overview of machine learning, covering the fundamental concepts, algorithms, and practical applications, as well as the broader landscape of artificial intelligence and its potential to shape the future of technology. </p>
                    <p className='mb-4 mx-3 lh-lg' style={{ textAlign: 'justify' }}>The articles further examine the art of fine-tuning, where pre-trained models are optimized for specific tasks or datasets, and the strategies and best practices for unlocking the potential of LLM trainings, which involve complex processes, computational resources, and vast data requirements.</p>
                    <div className='my-5'>
                        <Cards />
                    </div>

                    <h3 className='text-start px-3'>Read insightful articles</h3>
                    <BlogCarousels  />
                </div>
            </div >
        </>
    )
}
