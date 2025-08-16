import React from 'react';


function Education() {
    return ( 
        <div className='container mt-5 space' >
            <div className='row'>
                <div className='col-6'>
                    <img src="media\images\education.svg" alt="" />
                </div>
                <div className='col-6 mt-5 '>
                    <h2 className=' mb-4'>Free and open market education</h2>

                    <p className='fs-5' style={{lineHeight: "1.8", paddingRight:"1.2rem"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                    <a href="" style={{textDecoration:"none", fontSize:"1.2rem"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>

                    <p className='fs-5 mt-5' style={{lineHeight: "1.8", paddingRight:"1.2rem"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

                    <a href="" style={{textDecoration:"none", fontSize:"1.2rem"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;