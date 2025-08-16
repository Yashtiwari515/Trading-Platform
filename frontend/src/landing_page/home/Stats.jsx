import React from 'react';

function Stats() {
    return ( 
        <div className='container space'>
            <div className='row '>
                <div className='col-6 mt-5'>
                    <h2 className=' mb-5'>Trust with confidence</h2>

                    <h5 className='family textsize'>Customer-first always</h5>
                    <p className='para mt-3'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India's largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                    <h5 className='family textsize mt-5'>No spam or gimmicks</h5>
                    <p className='para mt-3'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                    <h5 className='family textsize mt-5'>The Zerodha universe</h5>
                    <p className='para mt-3'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h5 className='family textsize mt-5'>Do better with money</h5>
                    <p className='para mt-3'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                    
                </div>
                <div className='col-6'>
                    <img src="media\images\ecosystem.png" style={{width:"100%", marginLeft:"1rem"}} className='mt-5'/>
                </div>
            </div>
        </div>
     );
}

export default Stats;