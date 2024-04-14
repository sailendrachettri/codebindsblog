import React from 'react'
import img1 from '../assets/carousels/img1.jpg'
import img2 from '../assets/carousels/img2.jpg'
import img3 from '../assets/carousels/img3.jpg'
import img4 from '../assets/carousels/img4.jpg'
import img5 from '../assets/carousels/img5.jpg'

const Carousel = () => {
    return (
        <>
            <div id="carouselInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={img1} className="img-carousel rounded d-block w-100" alt="Carousel 1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className='text-light'>Large Language Models</h4>
                            <p className='text-light'>Powerful neural networks trained on text to generate human-like language.</p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={img2} className="img-carousel rounded d-block w-100" alt="Carousel 2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className='text-light'>Fine Tuning</h4>
                            <p className='text-light'>Further training a pre-trained model on a specific task or dataset.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="img-carousel rounded d-block w-100" alt="Carousel 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className='text-light'>Dataset</h4>
                            <p className='text-light'>Collections of data used to train, validate, and test machine learning models.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="img-carousel rounded d-block w-100" alt="Carousel 4" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className='text-light'>Artificial intelligence</h4>
                            <p className='text-light'>Field focused on developing systems that require human-like intelligence.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img5} className="img-carousel rounded d-block w-100" alt="Carousel 5" />
                        <div className="carousel-caption d-none d-md-block">
                            <h4 className='text-light'>LLM trainings</h4>
                            <p className='text-light'>Processes of training large language models on vast text data.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carousel