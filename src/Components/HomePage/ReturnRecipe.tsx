import React from 'react'

export const ReturnRecipe = () => {

    return (
        <div className='col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3'>
            <div className='text-center'>
                <img
                    src={require('./../../Images/Veggie Dishes/Recipe Image.jpg')}
                    width='300'
                    height='300'
                    alt='book'
                    className='circle-image'
                />
                <h6 className='mt-2'>Recipe</h6>
                <p>Plant-based</p>
                <a className='btn green-button text-white' href='#'>View Details</a>
            </div>
        </div>
    )
}