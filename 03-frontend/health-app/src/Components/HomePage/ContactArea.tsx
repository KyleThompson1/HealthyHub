export const ContactArea = () => {

    return(

        <div className='container my-5' style={{paddingBottom:'125px', paddingTop:'200px'}}>
            <div className='row p-4 align-items-center border shadow-lg image-border' style={{padding: '20px', display: 'flex'}}>
                <div className='col-lg-7 p-3'>
                    <h1 className='display-4 fw-bold' style={{color:'green'}}>
                        Having trouble discovering your next meal?
                    </h1>

                    <p className='lead'>
                        If you can't find the recipes you need, feel 
                        free to reach out to our tech support team. 
                        We currently don't have staff so waiting times 
                        range from 6 months to 1 year for a response.
                    </p>

                    <div className='d-grid gap-2 mb-4 mb-lg-3'>
                        <a className='btn green-button btn-lg text-white mx-auto d-block intro-button-grow' href='#'
                            style={{ maxWidth: '200px' }}>
                            Contact Support
                        </a>
                    </div>
                </div>

                <div className='col-lg-4 offset-lg-1 bottom-card-img'></div>
            </div>
        </div>
    )
}