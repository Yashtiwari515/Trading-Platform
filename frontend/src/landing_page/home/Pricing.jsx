import React from 'react';
function Pricing() {
    return ( 
        <div className='container mt-5 space' >
            <div className='row mb-5'>
                <div className='col-5 '>
                    <h2 className=' mb-4'>Unbeatable pricing</h2>

                    <p className='fs-5' style={{lineHeight: "1.8", paddingRight:"1.2rem"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

                    <a href="" style={{textDecoration:"none", fontSize:"1.2rem"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-7' style={{paddingLeft:"8rem"}}>
                    <div className='row'>
                        <div className='col-4 '>
                            <div className='row'>
                                <div className='col-6'><img src="media\images\pricing0.svg" className='pricingimg' /></div>
                                <div className='col-6'>
                                    <p className='pricingpara'>Free account opening</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-4'>
                             <div className='row'>
                                <div className='col-6'><img src="media\images\pricing0.svg" className='pricingimg'/></div>
                                <div className='col-6'>
                                    <p className='pricingpara'>Free equity delivery and direct mutual funds</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                             <div className='row'>
                                <div className='col-6'><img src="media\images\intradayTrades.svg" className='pricingimg'/></div>
                                <div className='col-6'>
                                    <p className='pricingpara' style={{left:"0px"}}>Intraday and F&O</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;