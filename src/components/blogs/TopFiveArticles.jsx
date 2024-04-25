import React from 'react'
import { BlogCarousels } from './BlogCarousels'

const TopFiveArticles = () => {
    return (
        <>
            <h3 className='text-start px-3'>Explore recently added articles</h3>
            <p className='mb-4 mx-3 lh-lg' style={{ textAlign: 'justify' }}>Explore our collection of newly added articles on the latest web technologies. Stay up-to-date with the ever-evolving landscape of the digital world. From front-end frameworks to back-end development, delve into expert analyses and practical guidance to enhance your web development skills. Whether you're a seasoned professional or a curious beginner, our articles cater to all levels, providing valuable insights to help you navigate the dynamic world of web technologies.</p>
            <BlogCarousels />
        </>
    )
}

export default TopFiveArticles