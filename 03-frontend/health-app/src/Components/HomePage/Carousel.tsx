import { ReturnRecipe } from "./ReturnRecipe"

export const Carousel = () => {

    return (

        <div className='container mt-5 text-white' style={{ height: 750, paddingTop: '150px'}}>
            <div className='homepage-carousel-title'>
                <h3 style={{ fontSize: '4em'}}>Find your next favorite dish, share your last workout, 
                    and connect with others to share your love of health!</h3>
            </div>

            <div id='carouselExampleControls'
                className='carousel slide mt-5 d-none d-lg-block'
                data-bs-interval='false'>

                {/* Desktop */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <ReturnRecipe />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <ReturnRecipe />
                        </div>
                    </div>

                    <div className='carousel-item'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <ReturnRecipe />
                        </div>
                    </div>
                </div>

                <button className='carousel-control-prev' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                </button>

                <button className='carousel-control-next' type='button'
                    data-bs-target='#carouselExampleControls' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>

            {/* Mobile */}
            <div className='d-lg-none mt-3'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                        <img src={require('../../Images/Veggie Dishes/DishFour.jpg')}
                            width='300'
                            height='300'
                            alt='recipe'
                            className='circle-image'
                        />
                        <h6 className='mt-2'>
                            <b>Recipe</b>
                        </h6>
                        <p>Plant-based</p>
                        <a className='btn green-button text-white' href='#'>View Details</a>
                    </div>
                </div>
            </div>
        </div>
    )
}