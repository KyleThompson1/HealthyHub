export const Heros = () => {
    return (
        <div>
            <div className='d-none d-lg-block'>
                <h1 className='catch-phrase'>
                    Embrace nature through plant-powered living. 🌿</h1>
                <div className='row g-0 mt-5'>


                    <div className='row g-0'>
                        <div className='col-sm-6 col-md-6 d-flex flex-column justify-content-center 
                                    align-items-center' style={{ padding: '120px' }}>
                            <div className='text-content shadow-lg image-border' style={{ padding: '60px' }}>
                                <h1 style={{ color: 'green' }}>Recipes are updated all the time!</h1>
                                <p className='lead'>
                                    Our vegetarian recipes are retrieved from the Spoonacular API, ensuring only the
                                    most recent and relevant recipes are available to add to your profile.
                                    We are devoted to offering throughly vetted dishes
                                    with the finest ingredients so you can focus on what matters
                                    most: <span style={{ color: 'green' }}>living life to the fullest.</span>
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6'>
                            <div className='col-image-right image-border shadow-lg'></div>
                        </div>
                    </div>

                    {/* Add spacing between hero rows */}
                    <div className='mt-5'></div>


                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left image-border shadow-lg'></div>
                    </div>

                    <div className='col-sm-6 col-md-6 d-flex flex-column justify-content-center 
                                    align-items-center' style={{ padding: '120px' }}>
                        <div className='text-content shadow-lg image-border' style={{ padding: '60px' }}>
                            <h1 style={{ color: 'green' }}>Our misson is simple</h1>
                            <p className='lead'>
                                Our app is focused on helping you find what you need.
                                Everyone at some point has found themselves in the kitchen and
                                asked themselves, "What should I eat?". Well now with
                                Healthy Hub, the decision is simple: we make it for you. And you if
                                don't like the suggestion, feel free to swipe for the next idea!
                            </p>
                            <a className='btn green-button btn-lg text-white mx-auto d-block intro-button-grow'
                                href='#' style={{ maxWidth: '200px' }}>Get started today</a>
                        </div>
                    </div>

                    {/* Add spacing between hero rows */}
                    <div className='mt-5'></div>


                    <div className='row g-0'>
                        <div className='col-sm-6 col-md-6 d-flex flex-column justify-content-center 
                                    align-items-center' style={{ padding: '120px' }}>
                            <div className='text-content shadow-lg image-border' style={{ padding: '60px' }}>
                                <h1 style={{ color: 'green' }}>Good for you, better for our furry friends</h1>
                                <p className='lead'>
                                    Whether you want to develop healthier
                                    eating habits or expand your dietary horizons, we deliver
                                    support and a community that is centered on living meat-free.
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6'>
                            <div className='col-image-last image-border shadow-lg'></div>
                        </div>
                    </div>


                </div>
            </div>

            {/* Mobile Heros */}
            <div className='d-lg-none'>
                <h1 className='catch-phrase'>
                    Embrace nature through plant-powered living.</h1>
                <div className='container'>

                    <div className='m-4'>
                        <div className='col-image-right image-border shadow-lg'></div>
                        <div className='mt-2 '>
                            <h1 style={{ color: 'green' }}>Recipes are updated all the time!</h1>
                            <p className='lead'>
                                Our vegetarian recipes are retrieved from the Spoonacular API, ensuring only the
                                most recent and relevant recipes are available to add to your profile.
                                We are devoted to offering throughly vetted dishes
                                with the finest ingredients so you can focus on what matters
                                most: <span style={{ color: 'green' }}>living life to the fullest.</span>
                            </p>
                        </div>
                    </div>

                    {/* Add spacing between hero rows */}
                    <div className='mt-5'></div>

                    <div className='m-4'>
                        <div className='col-image-left image-border shadow-lg'></div>
                        <div className='mt-2'>
                            <h1 style={{ color: 'green' }}>Our misson is simple</h1>
                            <p className='lead'>
                                Our app is focused on helping you find what you need.
                                Everyone at some point has found themselves in the kitchen and
                                asked themselves, "What should I eat?". Well now with
                                Healthy Hub, the decision is simple: we make it for you. And you if
                                don't like the suggestion, feel free to swipe for the next idea!
                            </p>
                            <a className='btn green-button btn-lg text-white mx-auto d-block'
                                href='#' style={{ maxWidth: '200px' }}>Get started today</a>
                        </div>
                    </div>

                    {/* Add spacing between hero rows */}
                    <div className='mt-5'></div>

                    <div className='m-4'>
                        <div className='col-image-last image-border shadow-lg'></div>
                        <div className='mt-2'>
                            <h1 style={{ color: 'green' }}>Good for you, better for our furry friends</h1>
                            <p className='lead'>
                                Whether you want to develop healthier
                                eating habits or expand your dietary horizons, we deliver
                                support and a community that is centered on living meat-free.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}